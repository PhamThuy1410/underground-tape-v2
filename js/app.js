// ========== GLOBAL WEB AUDIO ==========
let audioCtx, analyser, source, dataArray;
let isVisualizerSetup = false;

(() => {
  "use strict";

  // ========== STATE ==========
let allArtists = [];
let currentArtistId = null;
let currentArtistData = null;
let currentIndex = -1;
let isSeeking = false;

  // ========== DOM SELECTORS ==========
  const artistSelector = document.getElementById("artistSelector");
  const artistGrid = document.getElementById("artistGrid");
  const mainContent = document.getElementById("mainContent");
  const backBtn = document.getElementById("backBtn");

  const artistHero = document.getElementById("artistHero");
  const artistName = document.getElementById("artistName");
  const artistBio = document.getElementById("artistBio");
  const artistLinks = document.getElementById("artistLinks");

  const trackList = document.getElementById("trackList");
  const videosSection = document.getElementById("videosSection");
  const videosSelf = document.getElementById("videosSelf");

  const deck = document.getElementById("deck");
  const audioEl = document.getElementById("audioEl");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const lyricsBtn = document.getElementById("lyricsBtn");
  const seekBar = document.getElementById("seekBar");
  const visualizer = document.getElementById("visualizer");

  const deckArtist = document.getElementById("deckArtist");
  const deckTitle = document.getElementById("deckTitle");
  const timeCurrent = document.getElementById("timeCurrent");
  const timeDuration = document.getElementById("timeDuration");

  const lyricsModal = document.getElementById("lyricsModal");
  const lyricsCloseBtn = document.getElementById("lyricsCloseBtn");
  const lyricsTitle = document.getElementById("lyricsTitle");
  const lyricsBody = document.getElementById("lyricsBody");

  const videoModal = document.getElementById("videoModal");
  const videoCloseBtn = document.getElementById("videoCloseBtn");
  const videoPlayer = document.getElementById("videoPlayer");

  // ========== INIT ==========
  async function init() {
    await loadArtists();
    renderArtistSelector();

    const urlArtist = getUrlParam("artist");

    if (urlArtist && allArtists.find(a => a.id === urlArtist)) {
        selectArtist(urlArtist);
    }

    setupEventListeners();
    setupVisualizer();
  }

  // ========== LOAD ARTISTS & PLAYLISTS ==========
  // Store playlists in memory
  let playlistsData = {};

  async function loadArtists() {
    try {
      const resp = await fetch("artists.json");
      const data = await resp.json();
      allArtists = data.artists;

      // Load tất cả playlists - dùng fetch thay vì script tags
      await Promise.all(
        allArtists.map(async (artist) => {
          try {
            const playlistResp = await fetch(`js/playlists/${artist.id}.js?v=${Date.now()}`);
            const playlistText = await playlistResp.text();
            
            // Execute playlist script để define global variables
            const script = document.createElement('script');
            script.textContent = playlistText;
            document.head.appendChild(script);
            
            // Store reference
            playlistsData[artist.id] = true;
          } catch (err) {
            console.warn(`Failed to load playlist for ${artist.id}:`, err);
          }
        })
      );

      // Wait for scripts to actually execute
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (err) {
      console.error("Failed to load artists:", err);
    }
  }

  function getPlaylistForArtist(artistId) {
    const varName = `TRACKS_${artistId.toUpperCase()}`;
    const tracks = window[varName];
    if (!tracks) {
      console.warn(`Playlist not found: ${varName}`);
      return [];
    }
    return tracks;
  }

  function getVideosForArtist(artistId) {
    const varName = `VIDEOS_${artistId.toUpperCase()}`;
    const videos = window[varName];
    if (!videos) {
      return [];
    }
    return videos;
  }

  // ========== ARTIST SELECTOR ==========
  function renderArtistSelector() {
    artistGrid.innerHTML = allArtists
      .map(
        (artist) => `
      <div class="artist-card">
        <img class="artist-card__image" src="${artist.heroImage}" alt="${artist.name}" />
        <div class="artist-card__info">
          <h3 class="artist-card__name">${artist.name}</h3>
          <p class="artist-card__year">Est. ${artist.year}</p>
          <button class="artist-card__btn" data-artist-id="${artist.id}">
            Play →
          </button>
        </div>
      </div>
    `
      )
      .join("");

    artistGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-artist-id]");
      if (btn) {
        selectArtist(btn.dataset.artistId);
      }
    });
  }

  function selectArtist(artistId) {
    currentArtistId = artistId;
    currentArtistData = allArtists.find((a) => a.id === artistId);
    currentIndex = -1;

    window.history.replaceState(null, "", `?artist=${artistId}`);

    renderArtistHeader();
    renderTracklist();
    renderVideos();

    artistSelector.style.display = "none";
    mainContent.style.display = "block";

    audioEl.pause();
    audioEl.src = "";
    updateDeckMetadata();
  }

  function renderArtistHeader() {
    artistHero.src = currentArtistData.heroImage;
    artistName.textContent = currentArtistData.name;
    artistBio.textContent = currentArtistData.bio;

    artistLinks.innerHTML = Object.entries(currentArtistData.links)
      .map(
        ([name, url]) =>
          `<a href="${url}" target="_blank" rel="noopener" class="artist-link">${name.toUpperCase()}</a>`
      )
      .join("");
  }

  // ========== TRACKLIST ==========
  function renderTracklist() {
    const tracks = getPlaylistForArtist(currentArtistId);

    trackList.innerHTML = tracks
      .map(
        (track, idx) => `
      <li class="track-item" data-index="${idx}">
        <span class="track-item__number">${String(idx + 1).padStart(2, "0")}</span>
        <div class="track-item__info">
          <div class="track-item__title">${track.title}</div>
          <div class="track-item__artist">${track.artist}</div>
        </div>
        <span class="track-item__duration" data-duration="">0:00</span>
      </li>
    `
      )
      .join("");

    trackList.addEventListener("click", (e) => {
      const item = e.target.closest(".track-item");
      if (item) {
        const idx = Number(item.dataset.index);
        playTrack(idx);
      }
    });

    updateDurations();
  }

  function renderVideos() {
    const videos = getVideosForArtist(currentArtistId);
    if (videos.length === 0) {
      videosSection.style.display = "none";
      return;
    }

    videosSection.style.display = "block";
    videosSelf.innerHTML = videos
      .map(
        (video, idx) => `
      <div class="video-card">
        <img src="${video.poster || "https://via.placeholder.com/300x200"}" alt="${video.title}" class="video-card__image" />
        <div class="video-card__info">
          <h3 class="video-card__title">${video.title}</h3>
          <button class="video-card__btn" data-video-index="${idx}">Watch</button>
        </div>
      </div>
    `
      )
      .join("");

    videosSelf.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-video-index]");
      if (btn) {
        const idx = Number(btn.dataset.videoIndex);
        openVideo(idx);
      }
    });
  }

  // ========== PLAYBACK ==========
  function playTrack(index) {
    const tracks = getPlaylistForArtist(currentArtistId);
    if (!tracks || !tracks[index]) {
      console.warn(`Track not found at index ${index}`);
      return;
    }

    currentIndex = index;
    const track = tracks[index];

    if (!track.src) {
      console.warn(`No audio src for track:`, track);
      return;
    }

    // Pause và reset audio
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.src = track.src;

    // Wait một chút rồi play
    setTimeout(() => {
      audioEl.play().catch((err) => {
        console.warn("Playback error:", err);
      });
    }, 100);

    updateTracklistUI();
    updateDeckMetadata();
  }

  function togglePlay() {
    if (currentIndex === -1) {
      playTrack(0);
    } else if (audioEl.paused) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }

  function playNext() {
    const tracks = getPlaylistForArtist(currentArtistId);
    const nextIdx = (currentIndex + 1) % tracks.length;
    playTrack(nextIdx);
  }

  function playPrev() {
    const tracks = getPlaylistForArtist(currentArtistId);
    const prevIdx = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    playTrack(prevIdx);
  }

  function updateTracklistUI() {
    document.querySelectorAll(".track-item").forEach((el, idx) => {
      el.classList.toggle("is-playing", idx === currentIndex);
    });
  }

  function updateDeckMetadata() {
    const tracks = getPlaylistForArtist(currentArtistId);
    if (currentIndex === -1 || !tracks[currentIndex]) {
      deckArtist.textContent = currentArtistData?.name || "—";
      deckTitle.textContent = "Select a track";
      return;
    }

    const track = tracks[currentIndex];
    deckArtist.textContent = track.artist;
    deckTitle.textContent = track.title;

    updateMediaSession(track);
  }

  // ========== UI UPDATES ==========
  function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function updateSeekFill() {
    const pct = audioEl.duration
      ? (audioEl.currentTime / audioEl.duration) * 100
      : 0;
    seekBar.style.setProperty("--seek-pct", `${pct}%`);
    timeCurrent.textContent = formatTime(audioEl.currentTime);
  }

  function updateDurations() {
    document.querySelectorAll(".track-item__duration").forEach((el, idx) => {
      const tracks = getPlaylistForArtist(currentArtistId);
      if (!tracks[idx]) return;

      const audio = new Audio(tracks[idx].src);
      audio.addEventListener("loadedmetadata", () => {
        el.textContent = formatTime(audio.duration);
      });
    });
  }

  // ========== VISUALIZER ==========
  function setupVisualizer() {
    const ctx = visualizer.getContext("2d");
    if (!ctx) return;

    function draw() {
      if (!analyser || !dataArray) {
        requestAnimationFrame(draw);
        return;
      }

      analyser.getByteFrequencyData(dataArray);

      const w = visualizer.width;
      const h = visualizer.height;
      const bars = Math.floor(dataArray.length / 2);
      const barWidth = w / bars;

      ctx.fillStyle = "rgba(10, 10, 10, 0.3)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#e63946";
      ctx.globalAlpha = 0.8;

      for (let i = 0; i < bars; i++) {
        const val = dataArray[i * 2] || 0;
        const barHeight = (val / 255) * h;
        const x = i * barWidth;
        const y = h - barHeight;

        ctx.fillRect(x, y, barWidth - 1, barHeight);
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    draw();
  }

  // ========== MEDIA SESSION ==========
  function updateMediaSession(track) {
    if (!navigator.mediaSession) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: currentArtistData.name,
      artwork: [
        {
          src: currentArtistData.heroImage,
          sizes: "256x256",
          type: "image/webp",
        },
      ],
    });
  }

  // ========== MODALS ==========
  function openLyrics() {
    const tracks = getPlaylistForArtist(currentArtistId);
    if (currentIndex === -1 || !tracks[currentIndex]) return;

    const track = tracks[currentIndex];
    const src = track.src;

    lyricsTitle.textContent = `${track.title} — ${track.artist}`;

    const lyrics = LYRICS[src];
    if (!lyrics) {
      lyricsBody.innerHTML =
        '<p style="color: var(--text-secondary); font-style: italic;">Lyrics not available</p>';
    } else {
      lyricsBody.innerHTML = `<p>${lyrics.replace(/\n/g, "<br />")}</p>`;
    }

    lyricsModal.style.display = "flex";
  }

  function closeLyrics() {
    lyricsModal.style.display = "none";
  }

  function openVideo(index) {
    const videos = getVideosForArtist(currentArtistId);
    if (!videos[index]) return;

    videoPlayer.src = videos[index].src;
    videoModal.style.display = "flex";
    audioEl.pause();
  }

  function closeVideo() {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.src = "";
  }

  // ========== URL UTILITIES ==========
  function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  // ========== EVENT LISTENERS ==========
  function setupEventListeners() {
    backBtn.addEventListener("click", () => {
      audioEl.pause();
      audioEl.src = "";
      mainContent.style.display = "none";
      artistSelector.style.display = "flex";
      currentIndex = -1;
    });

    playBtn.addEventListener("click", togglePlay);
    prevBtn.addEventListener("click", playPrev);
    nextBtn.addEventListener("click", playNext);

    seekBar.addEventListener("input", () => {
      isSeeking = true;
      const pct = Number(seekBar.value) / 100;
      audioEl.currentTime = pct * audioEl.duration;
      updateSeekFill();
    });

    seekBar.addEventListener("change", () => {
      isSeeking = false;
    });

    audioEl.addEventListener("play", () => {
      document.body.classList.add("is-playing");
      document.getElementById("playIcon").style.display = "none";
      document.getElementById("pauseIcon").style.display = "block";
    });

    audioEl.addEventListener("pause", () => {
      document.body.classList.remove("is-playing");
      document.getElementById("playIcon").style.display = "block";
      document.getElementById("pauseIcon").style.display = "none";
    });

    audioEl.addEventListener("loadedmetadata", () => {
      seekBar.max = audioEl.duration;
      timeDuration.textContent = formatTime(audioEl.duration);
    });

    audioEl.addEventListener("timeupdate", () => {
      if (!isSeeking) {
        updateSeekFill();
      }
    });

    audioEl.addEventListener("ended", playNext);

    lyricsBtn.addEventListener("click", openLyrics);
    lyricsCloseBtn.addEventListener("click", closeLyrics);
    videoCloseBtn.addEventListener("click", closeVideo);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLyrics();
        closeVideo();
      }
    });

    if (navigator.mediaSession) {
      navigator.mediaSession.setActionHandler("play", () => audioEl.play());
      navigator.mediaSession.setActionHandler("pause", () => audioEl.pause());
      navigator.mediaSession.setActionHandler("previoustrack", playPrev);
      navigator.mediaSession.setActionHandler("nexttrack", playNext);
    }
  }

  // ========== SETUP WEB AUDIO ==========
  function setupAudioContext() {
    if (isVisualizerSetup) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      analyser = audioCtx.createAnalyser();
      source = audioCtx.createMediaElementSource(audioEl);

      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      analyser.fftSize = 64;
      dataArray = new Uint8Array(analyser.frequencyBinCount);

      isVisualizerSetup = true;
      console.log("✅ Web Audio setup OK");
    } catch (err) {
      console.warn("Web Audio not supported:", err);
    }
  }

  document.addEventListener("click", setupAudioContext, { once: true });
  document.addEventListener("touchstart", setupAudioContext, { once: true });

  // ========== START ==========
  init();
})();
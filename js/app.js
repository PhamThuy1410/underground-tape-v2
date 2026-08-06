// ========== GLOBAL STATE ==========
let allArtists = [];
let currentArtistId = null;
let currentArtistData = null;
let currentIndex = -1;
let isSeeking = false;

// Web Audio
let audioCtx, analyser, source, dataArray;
let isVisualizerSetup = false;

// ========== DOM ==========
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

const audioEl = document.getElementById("audioEl");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const lyricsBtn = document.getElementById("lyricsBtn");
const seekBar = document.getElementById("seekBar");

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
  // Nếu không có URL param, ở lại homepage
  
  setupEventListeners();
  setupAudioContext();
}

// ========== LOAD ARTISTS ==========
async function loadArtists() {
  try {
    const resp = await fetch("artists.json");
    const data = await resp.json();
    allArtists = data.artists;
    
    // Load playlists
    await Promise.all(
      allArtists.map(artist => 
        new Promise(resolve => {
          const script = document.createElement("script");
          script.src = `js/playlists/${artist.id}.js?v=${Date.now()}`;
          script.onload = resolve;
          script.onerror = resolve;
          document.head.appendChild(script);
        })
      )
    );
  } catch (err) {
    console.error("Load artists failed:", err);
  }
}

function getPlaylistForArtist(artistId) {
  const varName = `TRACKS_${artistId.toUpperCase()}`;
  return window[varName] || [];
}

function getVideosForArtist(artistId) {
  const varName = `VIDEOS_${artistId.toUpperCase()}`;
  return window[varName] || [];
}

// ========== ARTIST SELECTOR ==========
function renderArtistSelector() {
  artistGrid.innerHTML = allArtists.map(artist => `
    <div class="artist-card">
      <img class="artist-card__image" src="${artist.heroImage}" alt="${artist.name}" />
      <div class="artist-card__info">
        <h3 class="artist-card__name">${artist.name}</h3>
        <p class="artist-card__year">Est. ${artist.year}</p>
        <button class="artist-card__btn" data-artist-id="${artist.id}">Play →</button>
      </div>
    </div>
  `).join("");

  artistGrid.addEventListener("click", e => {
    const btn = e.target.closest("[data-artist-id]");
    if (btn) selectArtist(btn.dataset.artistId);
  });
}

function selectArtist(id) {
  currentArtistId = id;
  currentArtistData = allArtists.find(a => a.id === id);
  currentIndex = -1;

  window.history.replaceState(null, "", `?artist=${id}`);

  renderArtistHeader();
  renderTracklist();
  renderVideos();

  artistSelector.style.display = "none";
  mainContent.style.display = "block";

  audioEl.pause();
  audioEl.src = "";
  updateDeckMetadata();
}

// ========== ARTIST HEADER ==========
function renderArtistHeader() {
  artistHero.src = currentArtistData.heroImage;
  artistName.textContent = currentArtistData.name;
  artistBio.textContent = currentArtistData.bio;

  artistLinks.innerHTML = Object.entries(currentArtistData.links)
    .map(([name, url]) => `
      <a href="${url}" target="_blank" rel="noopener" class="artist-link">
        ${name.toUpperCase()}
      </a>
    `).join("");
}

// ========== TRACKLIST ==========
function renderTracklist() {
  const tracks = getPlaylistForArtist(currentArtistId);

  trackList.innerHTML = tracks.map((track, idx) => `
    <li class="track-item" data-index="${idx}">
      <span class="track-item__number">${String(idx + 1).padStart(2, "0")}</span>
      <div class="track-item__info">
        <div class="track-item__title">${track.title}</div>
        <div class="track-item__artist">${track.artist}</div>
      </div>
      <span class="track-item__duration">0:00</span>
    </li>
  `).join("");

  trackList.addEventListener("click", e => {
    const item = e.target.closest(".track-item");
    if (item) playTrack(Number(item.dataset.index));
  });
}

function renderVideos() {
  const videos = getVideosForArtist(currentArtistId);
  if (!videos.length) {
    videosSection.style.display = "none";
    return;
  }

  videosSection.style.display = "block";
  videosSelf.innerHTML = videos.map((video, idx) => `
    <div class="video-card">
      <img src="${video.poster || "https://via.placeholder.com/300x200"}" alt="${video.title}" class="video-card__image" />
      <div class="video-card__info">
        <h3 class="video-card__title">${video.title}</h3>
        <button class="video-card__btn" data-video-index="${idx}">Watch</button>
      </div>
    </div>
  `).join("");

  videosSelf.addEventListener("click", e => {
    const btn = e.target.closest("[data-video-index]");
    if (btn) openVideo(Number(btn.dataset.videoIndex));
  });
}

// ========== PLAYBACK ==========
async function playTrack(idx) {
  const tracks = getPlaylistForArtist(currentArtistId);
  if (!tracks[idx]) return;

  currentIndex = idx;
  const track = tracks[idx];

  audioEl.pause();
  audioEl.src = track.src;
    
  if (audioCtx && audioCtx.state === "suspended") {
    await audioCtx.resume();
  }

  audioEl.play().catch(err => console.warn("Play error:", err));

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

  if (navigator.mediaSession) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: currentArtistData.name,
      artwork: [{
        src: currentArtistData.heroImage,
        sizes: "256x256",
        type: "image/webp"
      }]
    });
  }
}

// ========== UI ==========
function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function updateSeekFill() {
  const pct = audioEl.duration ? (audioEl.currentTime / audioEl.duration) * 100 : 0;
  seekBar.style.setProperty("--seek-pct", `${pct}%`);
  seekBar.value = audioEl.currentTime; // ← Thay: dùng thời gian thật, không phải pct
  timeCurrent.textContent = formatTime(audioEl.currentTime);
}

// ========== WEB AUDIO ==========
function setupAudioContext() {
  if (isVisualizerSetup) return;

  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AC();
    analyser = audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(audioEl);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 64;
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    isVisualizerSetup = true;
    console.log("✅ Web Audio ready");
  } catch (err) {
    console.warn("Web Audio error:", err);
  }
}

document.addEventListener("click", setupAudioContext, { once: true });
document.addEventListener("touchstart", setupAudioContext, { once: true });

// ========== MODALS ==========
function openLyrics() {
  const tracks = getPlaylistForArtist(currentArtistId);
  if (currentIndex === -1 || !tracks[currentIndex]) return;

  const track = tracks[currentIndex];
  lyricsTitle.textContent = `${track.title} — ${track.artist}`;

  const lyrics = LYRICS?.[track.src];
  lyricsBody.innerHTML = lyrics 
    ? `<p>${lyrics.replace(/\n/g, "<br />")}</p>`
    : '<p style="color: var(--text-secondary); font-style: italic;">No lyrics</p>';

  lyricsModal.style.display = "flex";
}

function closeLyrics() {
  lyricsModal.style.display = "none";
}

function openVideo(idx) {
  const videos = getVideosForArtist(currentArtistId);
  if (!videos[idx]) return;

  videoPlayer.src = videos[idx].src;
  videoModal.style.display = "flex";
  audioEl.pause();
}

function closeVideo() {
  videoModal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.src = "";
}

// ========== UTILS ==========
function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
  backBtn.addEventListener("click", () => {
    audioEl.pause();
    audioEl.src = "";
    mainContent.style.display = "none";
    artistSelector.style.display = "flex";
    currentIndex = -1;
    
    // Reset URL khi back
    window.history.replaceState(null, "", window.location.pathname);
  });

  playBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", playPrev);
  nextBtn.addEventListener("click", playNext);

  seekBar.addEventListener("input", () => {
    isSeeking = true;
    audioEl.currentTime = Number(seekBar.value); // ← Thay: seekBar.value = duration (không chia 100)
    updateSeekFill();
  });
  
  seekBar.addEventListener("change", () => {
    isSeeking = false;
  });

  audioEl.addEventListener("play", () => {
    document.getElementById("playIcon").style.display = "none";
    document.getElementById("pauseIcon").style.display = "block";
  });

  audioEl.addEventListener("pause", () => {
    document.getElementById("playIcon").style.display = "block";
    document.getElementById("pauseIcon").style.display = "none";
  });

  audioEl.addEventListener("loadedmetadata", () => {
    seekBar.max = audioEl.duration;
    timeDuration.textContent = formatTime(audioEl.duration);
  });

  audioEl.addEventListener("timeupdate", () => {
    if (!isSeeking) updateSeekFill();
  });

  audioEl.addEventListener("ended", playNext);

  lyricsBtn.addEventListener("click", openLyrics);
  lyricsCloseBtn.addEventListener("click", closeLyrics);
  videoCloseBtn.addEventListener("click", closeVideo);

  document.addEventListener("keydown", e => {
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

// ========== START ==========
init();
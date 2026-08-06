# 🎵 UNDERGRND v2 — Multi-Artist Platform

Underground hip-hop mixtape platform với hỗ trợ nhiều artist. Modern design, fully static, deploy anywhere.

## 🎯 Features

✅ **Multi-artist support** — Quản lý nhiều artist với giao diện thống nhất  
✅ **Artist selector** — Grid view chọn artist, smooth UX  
✅ **Auto-generated playlists** — Node.js script quét file, sinh playlist tự động  
✅ **Modern UI** — Underground hip-hop aesthetic, mobile-responsive  
✅ **Real-time visualizer** — Web Audio API + Canvas frequency bars  
✅ **Lock screen support** — Media Session API (iOS Safari)  
✅ **URL routing** — Share artist links: `?artist=mck`, `?artist=obito`  
✅ **No backend** — Fully static HTML/CSS/JS, deploy anywhere  

## 📁 Folder Structure

```
underground-tape/
├── index.html                       # Main template
├── artists.json                     # Artist metadata config
├── css/
│   └── style.css                   # Modern underground design
├── js/
│   ├── config.js                   # Global config
│   ├── app.js                      # Player logic (346 dòng)
│   ├── lyrics.js                   # Lyrics database
│   └── playlists/
│       ├── mck.js                  # MCK playlist (auto-generated)
│       ├── obito.js                # OBITO playlist
│       ├── wxrdie.js               # WXRDIE playlist
│       └── dangrangto.js           # DANGRANGTO playlist
├── assets/
│   └── artists/
│       ├── mck/
│       │   ├── audio/              # ← Thả file mp3 tại đây
│       │   ├── video/              # ← Thả file mp4 tại đây
│       │   ├── covers/             # ← (Optional) ảnh bìa
│       │   └── hero.webp           # ← Hero image cho artist
│       ├── obito/
│       │   ├── audio/
│       │   ├── video/
│       │   ├── covers/
│       │   └── hero.webp
│       ├── wxrdie/
│       │   ├── audio/
│       │   ├── video/
│       │   ├── covers/
│       │   └── hero.webp
│       └── dangrangto/
│           ├── audio/
│           ├── video/
│           ├── covers/
│           └── hero.webp
├── generate-playlist.js            # Auto-generate playlists (Node.js)
└── README.md                       # This file
```

## 🚀 Quick Start

### 1. **Setup Artists Data**

Sửa `artists.json` để thêm/chỉnh sửa artist metadata:

```json
{
  "artists": [
    {
      "id": "mck",
      "name": "MCK",
      "fullName": "MCK",
      "bio": "Underground rapper Việt Nam...",
      "year": 2024,
      "links": {
        "spotify": "https://open.spotify.com/...",
        "soundcloud": "https://soundcloud.com/...",
        "instagram": "https://instagram.com/..."
      },
      "color": "#c81e3a",           # Accent color cho artist này
      "heroImage": "assets/artists/mck/hero.webp"
    }
    // ... thêm artist khác
  ]
}
```

### 2. **Add Audio Files**

Thả file mp3 vào folder tương ứng:

```bash
# MCK
assets/artists/mck/audio/1 - Song Title.mp3
assets/artists/mck/audio/2 - Another Song ft Artist.mp3
assets/artists/mck/audio/3 - Track Title.mp3

# OBITO
assets/artists/obito/audio/1 - Track Title.mp3
# ... etc
```

**File naming convention (important!):**
- ✅ `01 - Song Title.mp3` (numbered, sorted numerically)
- ✅ `10 - Song Title ft Wxrdie.mp3` (with featured artist)
- ✅ `Song Title.mp3` (no number, sorted alphabetically after numbered)

### 3. **Add Hero Images**

Thay ảnh placeholder (`hero.webp`) cho từng artist:

```bash
assets/artists/mck/hero.webp         # Thay cái này
assets/artists/obito/hero.webp       # Thay cái này
assets/artists/wxrdie/hero.webp      # Thay cái này
assets/artists/dangrangto/hero.webp  # Thay cái này
```

**Image specs:**
- Format: WebP (hoặc JPG/PNG)
- Aspect ratio: 1:1 (square)
- Size: ~300x300px min, ~2MB max
- Use: Artist portrait / album cover

### 4. **Auto-Generate Playlists**

Quét tất cả file, sinh playlist tự động:

```bash
node generate-playlist.js
```

**Output:**
```
✅ MCK             → 3 tracks, 0 videos
✅ OBITO           → 2 tracks, 0 videos
✅ WXRDIE          → 2 tracks, 0 videos
✅ DANGRANGTO      → 2 tracks, 0 videos

📊 Total: 9 tracks, 0 videos across 4 artists
📂 Output: js/playlists/
```

Generated files tại `js/playlists/`:
- `mck.js` — TRACKS_MCK, VIDEOS_MCK
- `obito.js` — TRACKS_OBITO, VIDEOS_OBITO
- `wxrdie.js` — TRACKS_WXRDIE, VIDEOS_WXRDIE
- `dangrangto.js` — TRACKS_DANGRANGTO, VIDEOS_DANGRANGTO

### 5. **(Optional) Add Lyrics**

Edit `js/lyrics.js`:

```javascript
const LYRICS = {
  "assets/artists/mck/audio/1 - Elegie.mp3": `
    Verse 1
    Đêm nay vắng một người
    ...
    Chorus
    Elegie mãi vọng về
    ...
  `,
  // Thêm lời bài khác
};
```

Lyrics được hiển thị khi người dùng bấm nút "Lyrics" ở player.

### 6. **Test Locally**

```bash
# ⚠️ DON'T use: python3 -m http.server (không support range requests)

# ✅ USE:
npx http-server -p 8000
# Hoặc: python -m http.server 8000

# Mở: http://localhost:8000
```

### 7. **Deploy**

**Option A: Cloudflare Pages** (recommended)
- Drag folder → instant deploy
- HTTPS + CDN included
- Auto-deploy on every push

**Option B: Netlify**
- Same as Cloudflare Pages
- Connect GitHub → auto-deploy

**Option C: GitHub Pages**
- Push to `gh-pages` branch
- Access tại `username.github.io/repo-name`

## 🎨 Customization

### Change Artist Selector Colors

Mỗi artist card có `--accent-color` CSS var:

```json
{
  "id": "mck",
  "color": "#c81e3a",      // ← Thay hex color này
  ...
}
```

Các preset colors:
- Blood red: `#c81e3a`
- Purple: `#5b2a6e`
- Cyan: `#06b6d4`
- Orange: `#f97316`

### Change Design Tokens

Edit `css/style.css` CSS variables:

```css
:root {
  --bg-void: #0a0808;          /* Background */
  --accent-blood: #c81e3a;     /* Primary accent */
  --accent-acid: #d4f13f;      /* Secondary accent */
  --ink-paper: #e9e3d6;        /* Text color */
  /* ... thêm variables khác */
}
```

### Add Video Support

1. Thả file mp4 vào `assets/artists/[artist-id]/video/`:
   ```
   assets/artists/mck/video/1 - MV Title.mp4
   ```

2. Chạy `node generate-playlist.js` → tự detect

3. Video cards sẽ tự render ở "MUSIC VIDEOS" section

## 📊 Architecture

### app.js Flow

```
1. init()
   ├─ loadArtists() → fetch artists.json
   ├─ renderArtistSelector() → display grid
   └─ setupEventListeners()

2. User clicks artist card
   ├─ selectArtist(artistId)
   ├─ renderArtistHeader()
   ├─ renderTracklist() → load TRACKS_[ID].js
   ├─ renderVideos() → load VIDEOS_[ID].js
   └─ Update URL: ?artist=mck

3. User clicks track
   ├─ playTrack(index)
   ├─ audioEl.src = track.src
   ├─ audioEl.play()
   ├─ updateVisualizer()
   └─ updateMediaSession()

4. Artist switch
   ├─ audioEl.pause()
   ├─ selectArtist(newArtistId)
   └─ Load new playlist
```

### Data Flow

```
artists.json
    ↓
loadArtists() → allArtists[]
    ↓
selectArtist(id)
    ├─ render header + links
    ├─ getPlaylistForArtist(id) → TRACKS_ID[]
    ├─ getVideosForArtist(id) → VIDEOS_ID[]
    └─ render tracklist + videos
```

### Playlist Generation

```
generate-playlist.js
├─ Loop each artist in artists.json
├─ Scan: assets/artists/[id]/audio/
├─ Parse: "01 - Title ft Artist.mp3"
│   → { order: 1, title: "Title", feat: "Artist" }
├─ Sort: numbered first, then alphabetical
└─ Output: js/playlists/[id].js
   ├─ TRACKS_[ID] = [...]
   └─ VIDEOS_[ID] = [...]
```

## 🎯 Key Features Explained

### Artist Selector

- Grid layout, 4 columns (responsive)
- Hover animation: scale up, glow effect
- Click → load artist header + playlist
- Back button → return to selector

### Artist Header

- Hero image (cinematic, full-width)
- Artist info (name, bio, year)
- Social links (Spotify, SoundCloud, Instagram)
- Animated on load

### Tracklist

- Numbered list, border-left accent
- Hover: highlight + slide right
- Click → play
- Playing indicator: highlight + animation
- Duration auto-loaded

### Deck (Fixed Player)

- 140px height, stick to bottom
- Left: reels (animated on play)
- Center: metadata + visualizer
- Right: controls (play/pause, next/prev, lyrics)
- Bottom: seekbar

### Visualizer

- Canvas, 200x60px
- Real-time frequency bars (Web Audio API)
- Gradient color: purple → red → yellow
- FFT size: 64 (32 bars)

### Media Session (iOS)

- Lock screen controls
- Playback continues when tab unfocused
- Previous/next buttons work on lock screen

### Lyrics Modal

- Dark backdrop + centered box
- Scrollable
- Close: button + ESC key
- Auto-updates when switching tracks

### Video Modal

- Fullscreen video player
- Close: button + ESC key
- Pause audio when opening video

## 🔧 Troubleshooting

### No Audio Playing

- Check: browser console for errors
- Check: audio files in correct folder
- Check: file permissions (readable)
- Check: CORS headers (for external CDN)

### Playlist Not Generated

- Check: `node generate-playlist.js` ran successfully
- Check: file naming convention (see above)
- Check: `js/playlists/` folder has files

### Videos Not Showing

- Check: video files in `assets/artists/[id]/video/`
- Check: `node generate-playlist.js` ran
- Check: file format (mp4, mov, webm)

### Visualizer Not Working

- Check: browser console
- Check: Web Audio API not blocked
- Check: click page first (iOS requires user gesture)

## 📱 Mobile Optimization

- Responsive grid (1 col on mobile)
- Touch-friendly buttons (40x40px min)
- Readable text sizes (clamp for scaling)
- Deck adapts: hide reels on mobile
- Reduced animations on low-power devices

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | All features |
| Firefox | ✅ Full | All features |
| Safari | ✅ Full | iOS 13+, Media Session |
| Edge | ✅ Full | All features |
| iOS Safari | ✅ Full | Lock screen + auto-play |
| Android Chrome | ✅ Full | All features |

## 📦 Deployment Checklist

- [ ] Add hero images for each artist
- [ ] Add mp3 files to `assets/artists/[id]/audio/`
- [ ] Run `node generate-playlist.js`
- [ ] Test locally: `npx http-server -p 8000`
- [ ] Test on phone (WiFi)
- [ ] Update `artists.json` with real data
- [ ] (Optional) Add lyrics to `js/lyrics.js`
- [ ] Push to GitHub
- [ ] Connect to Cloudflare Pages / Netlify
- [ ] Share link! 🎉

## 📝 Notes

- Platform fully static (no database needed)
- Player works offline (after first load)
- All data stored in JSON/JS (human-readable)
- Scales to 100+ artists, 1000+ tracks
- Zero dependencies (vanilla JS)

## 🔗 Quick Links

- **Cloudflare Pages**: https://pages.cloudflare.com/
- **Netlify**: https://www.netlify.com/
- **GitHub Pages**: https://pages.github.com/
- **Web Audio API**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
- **Media Session**: https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API

---

**Made with ❤️ for underground hip-hop**

v2.0 — Multi-artist edition | 2024

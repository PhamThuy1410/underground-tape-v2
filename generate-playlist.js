#!/usr/bin/env node
/* =========================================================
   generate-playlist.js v2
   Multi-artist version
   
   Tự động quét assets/artists/[artist-id]/audio/ + /video/
   Sinh ra js/playlists/[artist-id].js cho mỗi artist
   
   CÁCH DÙNG:
     node generate-playlist.js
   
   Folder structure cần thiết:
     assets/artists/
     ├── mck/
     │   ├── audio/        ← thả mp3 tại đây
     │   ├── video/        ← thả mp4 tại đây
     │   └── covers/       ← (optional) ảnh bìa
     ├── obito/
     ├── wxrdie/
     └── dangrangto/
   
   Output:
     js/playlists/
     ├── mck.js
     ├── obito.js
     ├── wxrdie.js
     └── dangrangto.js
   ========================================================= */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const ARTISTS_CONFIG_PATH = path.join(ROOT, "artists.json");
const PLAYLISTS_OUT_DIR = path.join(ROOT, "js/playlists");

const AUDIO_EXT = [".mp3", ".m4a", ".wav", ".aac", ".ogg"];
const VIDEO_EXT = [".mp4", ".mov", ".webm", ".m4v"];

// Load artists config
function loadArtistsConfig() {
  try {
    const data = fs.readFileSync(ARTISTS_CONFIG_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("❌ Cannot read artists.json:", err.message);
    process.exit(1);
  }
}

function listFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => !f.startsWith(".") && exts.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "vi", { numeric: true }));
}

function parseFileName(raw) {
  const match = raw.match(/^\s*(\d+)\s*-\s*(.+?)\.\w+$/);
  const name = match ? match[2].trim() : raw.replace(/\.\w+$/, "");
  const num = match ? Number(match[1]) : null;

  // Extract feat/featuring
  const ftMatch = name.match(/\s+(?:ft|feat|featuring)\.?\s+(.+)$/i);

  return {
    num,
    title: ftMatch ? name.slice(0, ftMatch.index).trim() : name,
    feat: ftMatch ? ftMatch[1].trim() : "",
  };
}

function buildList(files, folder) {
  const parsed = files.map((raw) => ({ raw, ...parseFileName(raw) }));
  parsed.sort((a, b) => {
    if (a.num != null && b.num != null) return a.num - b.num;
    if (a.num != null) return -1;
    if (b.num != null) return 1;
    return a.raw.localeCompare(b.raw, "vi", { numeric: true });
  });
  return parsed.map((p, i) => ({
    src: `assets/artists/${folder}/${p.raw}`,
    title: p.title,
    feat: p.feat,
    order: p.num ?? i + 1,
  }));
}

function generatePlaylistForArtist(artistId, artistName) {
  const audioDir = path.join(ROOT, `assets/artists/${artistId}/audio`);
  const videoDir = path.join(ROOT, `assets/artists/${artistId}/video`);

  const tracks = buildList(listFiles(audioDir, AUDIO_EXT), `${artistId}/audio`);
  const videos = buildList(listFiles(videoDir, VIDEO_EXT), `${artistId}/video`);

  const output = `/* =========================================================
   PLAYLIST: ${artistName}
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_${artistId.toUpperCase()} = ${JSON.stringify(tracks, null, 2)}.map((t) => ({
  ...t,
  artist: t.feat ? "${artistName} ft. " + t.feat : "${artistName}",
  cover: t.cover || "",
}));

window.VIDEOS_${artistId.toUpperCase()} = ${JSON.stringify(videos, null, 2)}.map((v) => ({
  ...v,
  artist: "${artistName}",
  poster: v.poster || "",
}));
`;

  return { output, trackCount: tracks.length, videoCount: videos.length };
}

// Main
function main() {
  const config = loadArtistsConfig();
  
  // Create output directory
  fs.mkdirSync(PLAYLISTS_OUT_DIR, { recursive: true });

  console.log("\n📀 Generating playlists for all artists...\n");

  let totalTracks = 0;
  let totalVideos = 0;

  config.artists.forEach((artist) => {
    const { output, trackCount, videoCount } = generatePlaylistForArtist(
      artist.id,
      artist.name
    );

    const outPath = path.join(PLAYLISTS_OUT_DIR, `${artist.id}.js`);
    fs.writeFileSync(outPath, output, "utf-8");

    console.log(`✅ ${artist.name.padEnd(15)} → ${trackCount} tracks, ${videoCount} videos`);
    totalTracks += trackCount;
    totalVideos += videoCount;
  });

  console.log(`\n📊 Total: ${totalTracks} tracks, ${totalVideos} videos across ${config.artists.length} artists`);
  console.log(`📂 Output: ${PLAYLISTS_OUT_DIR}/`);
  console.log("\n✨ Done! Now load playlists in HTML:\n");
  console.log(
    config.artists.map((a) => `<script src="js/playlists/${a.id}.js"><\/script>`).join("\n")
  );
}

main();

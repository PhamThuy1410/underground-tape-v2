/* =========================================================
   PLAYLIST: DANGRANGTO
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_DANGRANGTO = [
  {
    "src": "assets/artists/dangrangto/audio/1 - xương rồng.mp3",
    "title": "xương rồng",
    "feat": "",
    "order": 1
  },
  {
    "src": "assets/artists/dangrangto/audio/2 - My lil bitch ft TeuYungBoy.mp3",
    "title": "My lil bitch",
    "feat": "TeuYungBoy",
    "order": 2
  },
  {
    "src": "assets/artists/dangrangto/audio/3 - cây màu đen ft MR LANH, LWKI.mp3",
    "title": "cây màu đen",
    "feat": "MR LANH, LWKI",
    "order": 3
  },
  {
    "src": "assets/artists/dangrangto/audio/4 - buổi sáng Khương Đình ft BIG WIND.mp3",
    "title": "buổi sáng Khương Đình",
    "feat": "BIG WIND",
    "order": 4
  },
  {
    "src": "assets/artists/dangrangto/audio/5 - vùng vẫy ft ZEXZEX.mp3",
    "title": "vùng vẫy",
    "feat": "ZEXZEX",
    "order": 5
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "DANGRANGTO ft. " + t.feat : "DANGRANGTO",
  cover: t.cover || "",
}));

window.VIDEOS_DANGRANGTO = [].map((v) => ({
  ...v,
  artist: "DANGRANGTO",
  poster: v.poster || "",
}));

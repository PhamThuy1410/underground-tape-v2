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
  },
  {
    "src": "assets/artists/dangrangto/audio/6 - baby anh đợi có lâu.mp3",
    "title": "baby anh đợi có lâu",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/dangrangto/audio/7 - bolero buồn.mp3",
    "title": "bolero buồn",
    "feat": "",
    "order": 7
  },
  {
    "src": "assets/artists/dangrangto/audio/8 - tốt cho anh.mp3",
    "title": "tốt cho anh",
    "feat": "",
    "order": 8
  },
  {
    "src": "assets/artists/dangrangto/audio/9 - một ly.mp3",
    "title": "một ly",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/dangrangto/audio/10 - đánh rơi.mp3",
    "title": "đánh rơi",
    "feat": "",
    "order": 10
  },
  {
    "src": "assets/artists/dangrangto/audio/11 - quenvaonhau.mp3",
    "title": "quenvaonhau",
    "feat": "",
    "order": 11
  },
  {
    "src": "assets/artists/dangrangto/audio/12 - món quà.mp3",
    "title": "món quà",
    "feat": "",
    "order": 12
  },
  {
    "src": "assets/artists/dangrangto/audio/13 - đắm say trong tình yêu.mp3",
    "title": "đắm say trong tình yêu",
    "feat": "",
    "order": 13
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

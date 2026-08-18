/* =========================================================
   PLAYLIST: OBITO
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_OBITO = [
  {
    "src": "assets/artists/obito/audio/1 - Xuất Phát Điểm.mp3",
    "title": "Xuất Phát Điểm",
    "feat": "",
    "order": 1
  },
  {
    "src": "assets/artists/obito/audio/2 - 1000 Ánh Mắt.mp3",
    "title": "1000 Ánh Mắt",
    "feat": "",
    "order": 2
  },
  {
    "src": "assets/artists/obito/audio/3 - Đầu Đường Xó Chợ ft. Lăng LD.mp3",
    "title": "Đầu Đường Xó Chợ",
    "feat": "Lăng LD",
    "order": 3
  },
  {
    "src": "assets/artists/obito/audio/4 - Biên Giới Long Bình.mp3",
    "title": "Biên Giới Long Bình",
    "feat": "",
    "order": 4
  },
  {
    "src": "assets/artists/obito/audio/5 - BUSINESS MODE.mp3",
    "title": "BUSINESS MODE",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/obito/audio/6 - Lost.mp3",
    "title": "Lost",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/obito/audio/7 - Panorama.mp3",
    "title": "Panorama",
    "feat": "",
    "order": 7
  },
  {
    "src": "assets/artists/obito/audio/8 - Phong Long.mp3",
    "title": "Phong Long",
    "feat": "",
    "order": 8
  },
  {
    "src": "assets/artists/obito/audio/9 - Shay Nắnggg.mp3",
    "title": "Shay Nắnggg",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/obito/audio/10 - Simple Love.mp3",
    "title": "Simple Love",
    "feat": "",
    "order": 10
  },
  {
    "src": "assets/artists/obito/audio/11 - Soju Love.mp3",
    "title": "Soju Love",
    "feat": "",
    "order": 11
  },
  {
    "src": "assets/artists/obito/audio/12 - Sài Gòn ơi.mp3",
    "title": "Sài Gòn ơi",
    "feat": "",
    "order": 12
  },
  {
    "src": "assets/artists/obito/audio/13 - Track 06.mp3",
    "title": "Track 06",
    "feat": "",
    "order": 13
  },
  {
    "src": "assets/artists/obito/audio/14 - When You Look At Me.mp3",
    "title": "When You Look At Me",
    "feat": "",
    "order": 14
  },
  {
    "src": "assets/artists/obito/audio/15 - dư âm.mp3",
    "title": "dư âm",
    "feat": "",
    "order": 15
  },
  {
    "src": "assets/artists/obito/audio/16 - nước.mp3",
    "title": "nước",
    "feat": "",
    "order": 16
  },
  {
    "src": "assets/artists/obito/audio/17 - Đánh Đổi.mp3",
    "title": "Đánh Đổi",
    "feat": "",
    "order": 17
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "OBITO ft. " + t.feat : "OBITO",
  cover: t.cover || "",
}));

window.VIDEOS_OBITO = [].map((v) => ({
  ...v,
  artist: "OBITO",
  poster: v.poster || "",
}));

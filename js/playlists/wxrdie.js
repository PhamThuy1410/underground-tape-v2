/* =========================================================
   PLAYLIST: WXRDIE
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_WXRDIE = [
  {
    "src": "assets/artists/wxrdie/audio/1 - 29.mp3",
    "title": "29",
    "feat": "",
    "order": 1
  },
  {
    "src": "assets/artists/wxrdie/audio/2 - Anh Freestyle.mp3",
    "title": "Anh Freestyle",
    "feat": "",
    "order": 2
  },
  {
    "src": "assets/artists/wxrdie/audio/3 - Băng Qua Cầu Giấy.mp3",
    "title": "Băng Qua Cầu Giấy",
    "feat": "",
    "order": 3
  },
  {
    "src": "assets/artists/wxrdie/audio/4 - Bởi Vì.mp3",
    "title": "Bởi Vì",
    "feat": "",
    "order": 4
  },
  {
    "src": "assets/artists/wxrdie/audio/5 - Ca Khúc Cuối.mp3",
    "title": "Ca Khúc Cuối",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/wxrdie/audio/6 - Cả 2.mp3",
    "title": "Cả 2",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/wxrdie/audio/7 - Get Money.mp3",
    "title": "Get Money",
    "feat": "",
    "order": 7
  },
  {
    "src": "assets/artists/wxrdie/audio/8 - Gia Tài.mp3",
    "title": "Gia Tài",
    "feat": "",
    "order": 8
  },
  {
    "src": "assets/artists/wxrdie/audio/9 - Lonely Stonie.mp3",
    "title": "Lonely Stonie",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/wxrdie/audio/10 - Lâu Đài.mp3",
    "title": "Lâu Đài",
    "feat": "",
    "order": 10
  },
  {
    "src": "assets/artists/wxrdie/audio/11 - Lối Sống.mp3",
    "title": "Lối Sống",
    "feat": "",
    "order": 11
  },
  {
    "src": "assets/artists/wxrdie/audio/12 - Mời Em.mp3",
    "title": "Mời Em",
    "feat": "",
    "order": 12
  },
  {
    "src": "assets/artists/wxrdie/audio/13 - Nu Cep.mp3",
    "title": "Nu Cep",
    "feat": "",
    "order": 13
  },
  {
    "src": "assets/artists/wxrdie/audio/14 - Pray For.mp3",
    "title": "Pray For",
    "feat": "",
    "order": 14
  },
  {
    "src": "assets/artists/wxrdie/audio/15 - Thèn Chóa.mp3",
    "title": "Thèn Chóa",
    "feat": "",
    "order": 15
  },
  {
    "src": "assets/artists/wxrdie/audio/16 - Thíc Qé.mp3",
    "title": "Thíc Qé",
    "feat": "",
    "order": 16
  },
  {
    "src": "assets/artists/wxrdie/audio/17 - Tim Anh Ghen.mp3",
    "title": "Tim Anh Ghen",
    "feat": "",
    "order": 17
  },
  {
    "src": "assets/artists/wxrdie/audio/18 - Trở Về.mp3",
    "title": "Trở Về",
    "feat": "",
    "order": 18
  },
  {
    "src": "assets/artists/wxrdie/audio/19 - Đau Đầu.mp3",
    "title": "Đau Đầu",
    "feat": "",
    "order": 19
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "WXRDIE ft. " + t.feat : "WXRDIE",
  cover: t.cover || "",
}));

window.VIDEOS_WXRDIE = [].map((v) => ({
  ...v,
  artist: "WXRDIE",
  poster: v.poster || "",
}));

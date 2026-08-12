/* =========================================================
   PLAYLIST: B RAY
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_BRAY = [
  {
    "src": "assets/artists/bray/audio/1 - Man Down ft Ếch và Báo.mp3",
    "title": "Man Down",
    "feat": "Ếch và Báo",
    "order": 1
  },
  {
    "src": "assets/artists/bray/audio/2 - Tệ Hại & Xấu Xí (Intro).mp3",
    "title": "Tệ Hại & Xấu Xí (Intro)",
    "feat": "",
    "order": 2
  },
  {
    "src": "assets/artists/bray/audio/3 - Đúng Như Lời Họ Nói.mp3",
    "title": "Đúng Như Lời Họ Nói",
    "feat": "",
    "order": 3
  },
  {
    "src": "assets/artists/bray/audio/4 - Cho Con (Lullaby pt.2).mp3",
    "title": "Cho Con (Lullaby pt.2)",
    "feat": "",
    "order": 4
  },
  {
    "src": "assets/artists/bray/audio/5 - Felina.mp3",
    "title": "Felina",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/bray/audio/6 - Ta CÓ Nên (Intro).mp3",
    "title": "Ta CÓ Nên (Intro)",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/bray/audio/7 - Cho Ba.mp3",
    "title": "Cho Ba",
    "feat": "",
    "order": 7
  },
  {
    "src": "assets/artists/bray/audio/8 - Chân Mệnh ft B Rizzle.mp3",
    "title": "Chân Mệnh",
    "feat": "B Rizzle",
    "order": 8
  },
  {
    "src": "assets/artists/bray/audio/9 - Một Vòng Sài Gòn.mp3",
    "title": "Một Vòng Sài Gòn",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/bray/audio/10 - Vùng An Toàn ft V#.mp3",
    "title": "Vùng An Toàn",
    "feat": "V#",
    "order": 10
  },
  {
    "src": "assets/artists/bray/audio/11 - The One ft Đạt G.mp3",
    "title": "The One",
    "feat": "Đạt G",
    "order": 11
  },
  {
    "src": "assets/artists/bray/audio/12 - Ghệ Mới ft Young H.mp3",
    "title": "Ghệ Mới",
    "feat": "Young H",
    "order": 12
  },
  {
    "src": "assets/artists/bray/audio/13 - Y Chang Em (interlude).mp3",
    "title": "Y Chang Em (interlude)",
    "feat": "",
    "order": 13
  },
  {
    "src": "assets/artists/bray/audio/14 - Feel At Home.mp3",
    "title": "Feel At Home",
    "feat": "",
    "order": 14
  },
  {
    "src": "assets/artists/bray/audio/15 - Còn Ai Ngoài Anh Với Em.mp3",
    "title": "Còn Ai Ngoài Anh Với Em",
    "feat": "",
    "order": 15
  },
  {
    "src": "assets/artists/bray/audio/16 - Viết Em Bản Tình Ca.mp3",
    "title": "Viết Em Bản Tình Ca",
    "feat": "",
    "order": 16
  },
  {
    "src": "assets/artists/bray/audio/17 - B.S.N.L ft YoungH.mp3",
    "title": "B.S.N.L",
    "feat": "YoungH",
    "order": 17
  },
  {
    "src": "assets/artists/bray/audio/18 - B.S.N.L 2 ft YoungH.mp3",
    "title": "B.S.N.L 2",
    "feat": "YoungH",
    "order": 18
  },
  {
    "src": "assets/artists/bray/audio/19 - B.S.N.L 3 ft YoungH.mp3",
    "title": "B.S.N.L 3",
    "feat": "YoungH",
    "order": 19
  },
  {
    "src": "assets/artists/bray/audio/20 - Để Ai Cần ft Young H.mp3",
    "title": "Để Ai Cần",
    "feat": "Young H",
    "order": 20
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "B RAY ft. " + t.feat : "B RAY",
  cover: t.cover || "",
}));

window.VIDEOS_BRAY = [].map((v) => ({
  ...v,
  artist: "B RAY",
  poster: v.poster || "",
}));

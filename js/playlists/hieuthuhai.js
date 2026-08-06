/* =========================================================
   PLAYLIST: HIEUTHUHAI
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_HIEUTHUHAI = [
  {
    "src": "assets/artists/hieuthuhai/audio/1 - Anh Nên Đi Khỏi Đây.mp3",
    "title": "Anh Nên Đi Khỏi Đây",
    "feat": "",
    "order": 1
  },
  {
    "src": "assets/artists/hieuthuhai/audio/2 - Hết Yêu.mp3",
    "title": "Hết Yêu",
    "feat": "",
    "order": 2
  },
  {
    "src": "assets/artists/hieuthuhai/audio/3 - Nước Mắt Cá Sấu.mp3",
    "title": "Nước Mắt Cá Sấu",
    "feat": "",
    "order": 3
  },
  {
    "src": "assets/artists/hieuthuhai/audio/4 - Người Im Lặng Gặp Người Hay Nói.mp3",
    "title": "Người Im Lặng Gặp Người Hay Nói",
    "feat": "",
    "order": 4
  },
  {
    "src": "assets/artists/hieuthuhai/audio/5 - Nước Mắt Cá Sấu.mp3",
    "title": "Nước Mắt Cá Sấu",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/hieuthuhai/audio/6 - Sắp Nổi Tiếng 2.mp3",
    "title": "Sắp Nổi Tiếng 2",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/hieuthuhai/audio/7 - Vacheron Louie V ft Hustlang Robber.mp3",
    "title": "Vacheron Louie V",
    "feat": "Hustlang Robber",
    "order": 7
  },
  {
    "src": "assets/artists/hieuthuhai/audio/8 - Đáng Lý Anh Nên Yêu Em Hơn.mp3",
    "title": "Đáng Lý Anh Nên Yêu Em Hơn",
    "feat": "",
    "order": 8
  },
  {
    "src": "assets/artists/hieuthuhai/audio/9 - Đâu Có Ai Nhìn.mp3",
    "title": "Đâu Có Ai Nhìn",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/hieuthuhai/audio/10 - Đâu Cần Gì Hơn.mp3",
    "title": "Đâu Cần Gì Hơn",
    "feat": "",
    "order": 10
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "HIEUTHUHAI ft. " + t.feat : "HIEUTHUHAI",
  cover: t.cover || "",
}));

window.VIDEOS_HIEUTHUHAI = [].map((v) => ({
  ...v,
  artist: "HIEUTHUHAI",
  poster: v.poster || "",
}));

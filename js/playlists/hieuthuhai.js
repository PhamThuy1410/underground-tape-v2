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
    "src": "assets/artists/hieuthuhai/audio/5 - Sắp Nổi Tiếng 2.mp3",
    "title": "Sắp Nổi Tiếng 2",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/hieuthuhai/audio/6 - Vacheron Louie V ft Hustlang Robber.mp3",
    "title": "Vacheron Louie V",
    "feat": "Hustlang Robber",
    "order": 6
  },
  {
    "src": "assets/artists/hieuthuhai/audio/7 - Đáng Lý Anh Nên Yêu Em Hơn ft HURRYKNG.mp3",
    "title": "Đáng Lý Anh Nên Yêu Em Hơn",
    "feat": "HURRYKNG",
    "order": 7
  },
  {
    "src": "assets/artists/hieuthuhai/audio/8 - Đâu Có Ai Nhìn.mp3",
    "title": "Đâu Có Ai Nhìn",
    "feat": "",
    "order": 8
  },
  {
    "src": "assets/artists/hieuthuhai/audio/9 - Đâu Cần Gì Hơn.mp3",
    "title": "Đâu Cần Gì Hơn",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/hieuthuhai/audio/10 - Dạo Gần Đây Anh Thấy Anh Không Bằng Ai Hết.mp3",
    "title": "Dạo Gần Đây Anh Thấy Anh Không Bằng Ai Hết",
    "feat": "",
    "order": 10
  },
  {
    "src": "assets/artists/hieuthuhai/audio/11 - Chờ Tới Khi Anh Về ft Hoàng Tôn.mp3",
    "title": "Chờ Tới Khi Anh Về",
    "feat": "Hoàng Tôn",
    "order": 11
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

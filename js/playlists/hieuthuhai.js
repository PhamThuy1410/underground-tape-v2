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
  },
  {
    "src": "assets/artists/hieuthuhai/audio/12 - Ai Cũng Phải Bắt Đầu Từ Đâu Đó.mp3",
    "title": "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
    "feat": "",
    "order": 12
  },
  {
    "src": "assets/artists/hieuthuhai/audio/13 - Giờ Thì Ai Cười.mp3",
    "title": "Giờ Thì Ai Cười",
    "feat": "",
    "order": 13
  },
  {
    "src": "assets/artists/hieuthuhai/audio/14 - 237°C ft LOWNA.mp3",
    "title": "237°C",
    "feat": "LOWNA",
    "order": 14
  },
  {
    "src": "assets/artists/hieuthuhai/audio/15 - Không Phải Gu ft. B Ray & Tage.mp3",
    "title": "Không Phải Gu",
    "feat": "B Ray & Tage",
    "order": 15
  },
  {
    "src": "assets/artists/hieuthuhai/audio/16 - Siêu Sao.mp3",
    "title": "Siêu Sao",
    "feat": "",
    "order": 16
  },
  {
    "src": "assets/artists/hieuthuhai/audio/17 - Đi Họp Lớp.mp3",
    "title": "Đi Họp Lớp",
    "feat": "",
    "order": 17
  },
  {
    "src": "assets/artists/hieuthuhai/audio/18 - Không Thể Say.mp3",
    "title": "Không Thể Say",
    "feat": "",
    "order": 18
  },
  {
    "src": "assets/artists/hieuthuhai/audio/19 - Exit Sign ft. marzuz.mp3",
    "title": "Exit Sign",
    "feat": "marzuz",
    "order": 19
  },
  {
    "src": "assets/artists/hieuthuhai/audio/20 - Sắp Nổi Tiếng.mp3",
    "title": "Sắp Nổi Tiếng",
    "feat": "",
    "order": 20
  },
  {
    "src": "assets/artists/hieuthuhai/audio/21 - Everything Will Be Okay.mp3",
    "title": "Everything Will Be Okay",
    "feat": "",
    "order": 21
  },
  {
    "src": "assets/artists/hieuthuhai/audio/22 - Cho Em An Toàn.mp3",
    "title": "Cho Em An Toàn",
    "feat": "",
    "order": 22
  },
  {
    "src": "assets/artists/hieuthuhai/audio/23 - NOLOVENOLIFE.mp3",
    "title": "NOLOVENOLIFE",
    "feat": "",
    "order": 23
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

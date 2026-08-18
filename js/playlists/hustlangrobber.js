/* =========================================================
   PLAYLIST: HUSTLANG ROBBER
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_HUSTLANGROBBER = [
  {
    "src": "assets/artists/hustlangrobber/audio/1 - 1TINHYEU ft Young Puppy.mp3",
    "title": "1TINHYEU",
    "feat": "Young Puppy",
    "order": 1
  },
  {
    "src": "assets/artists/hustlangrobber/audio/2 - Cartier Rings.mp3",
    "title": "Cartier Rings",
    "feat": "",
    "order": 2
  },
  {
    "src": "assets/artists/hustlangrobber/audio/3 - Có Nhiều Đêm Anh Buồn.mp3",
    "title": "Có Nhiều Đêm Anh Buồn",
    "feat": "",
    "order": 3
  },
  {
    "src": "assets/artists/hustlangrobber/audio/4 - Dear Love.mp3",
    "title": "Dear Love",
    "feat": "",
    "order": 4
  },
  {
    "src": "assets/artists/hustlangrobber/audio/5 - His Story.mp3",
    "title": "His Story",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/hustlangrobber/audio/6 - IKIGAI.mp3",
    "title": "IKIGAI",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/hustlangrobber/audio/7 - King Vamp.mp3",
    "title": "King Vamp",
    "feat": "",
    "order": 7
  },
  {
    "src": "assets/artists/hustlangrobber/audio/8 - Muốn Anh Đau ft WINNO.mp3",
    "title": "Muốn Anh Đau",
    "feat": "WINNO",
    "order": 8
  },
  {
    "src": "assets/artists/hustlangrobber/audio/9 - MỘT TÂM HỒN BÌNH THẢN.mp3",
    "title": "MỘT TÂM HỒN BÌNH THẢN",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/hustlangrobber/audio/10 - QUA TỪNG KHUNG HÌNH ft Ngắn.mp3",
    "title": "QUA TỪNG KHUNG HÌNH",
    "feat": "Ngắn",
    "order": 10
  },
  {
    "src": "assets/artists/hustlangrobber/audio/11 - Rapper Lè Nhè.mp3",
    "title": "Rapper Lè Nhè",
    "feat": "",
    "order": 11
  },
  {
    "src": "assets/artists/hustlangrobber/audio/12 - Slatt ON.mp3",
    "title": "Slatt ON",
    "feat": "",
    "order": 12
  },
  {
    "src": "assets/artists/hustlangrobber/audio/13 - Take It Off.mp3",
    "title": "Take It Off",
    "feat": "",
    "order": 13
  },
  {
    "src": "assets/artists/hustlangrobber/audio/14 - Xuôi Chèo Mát Mái.mp3",
    "title": "Xuôi Chèo Mát Mái",
    "feat": "",
    "order": 14
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "HUSTLANG ROBBER ft. " + t.feat : "HUSTLANG ROBBER",
  cover: t.cover || "",
}));

window.VIDEOS_HUSTLANGROBBER = [].map((v) => ({
  ...v,
  artist: "HUSTLANG ROBBER",
  poster: v.poster || "",
}));

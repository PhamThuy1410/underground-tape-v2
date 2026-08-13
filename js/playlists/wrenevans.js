/* =========================================================
   PLAYLIST: WREN EVANS
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_WRENEVANS = [
  {
    "src": "assets/artists/wrenevans/audio/1 - Từng Quen.mp3",
    "title": "Từng Quen",
    "feat": "",
    "order": 1
  },
  {
    "src": "assets/artists/wrenevans/audio/2 - Tình Yêu Vĩ Mô.mp3",
    "title": "Tình Yêu Vĩ Mô",
    "feat": "",
    "order": 2
  },
  {
    "src": "assets/artists/wrenevans/audio/3 - Quyền Anh.mp3",
    "title": "Quyền Anh",
    "feat": "",
    "order": 3
  },
  {
    "src": "assets/artists/wrenevans/audio/4 - Lối Chơi (Interlude).mp3",
    "title": "Lối Chơi (Interlude)",
    "feat": "",
    "order": 4
  },
  {
    "src": "assets/artists/wrenevans/audio/5 - Tò Te Tí.mp3",
    "title": "Tò Te Tí",
    "feat": "",
    "order": 5
  },
  {
    "src": "assets/artists/wrenevans/audio/6 - Vừa Tìm Thấy Đã Đánh Mất.mp3",
    "title": "Vừa Tìm Thấy Đã Đánh Mất",
    "feat": "",
    "order": 6
  },
  {
    "src": "assets/artists/wrenevans/audio/7 - Gió Đưa Tình.mp3",
    "title": "Gió Đưa Tình",
    "feat": "",
    "order": 7
  },
  {
    "src": "assets/artists/wrenevans/audio/8 - bé ơi từ từ.mp3",
    "title": "bé ơi từ từ",
    "feat": "",
    "order": 8
  },
  {
    "src": "assets/artists/wrenevans/audio/9 - Call Me.mp3",
    "title": "Call Me",
    "feat": "",
    "order": 9
  },
  {
    "src": "assets/artists/wrenevans/audio/10 - Cứu Lấy Âm Nhạc.mp3",
    "title": "Cứu Lấy Âm Nhạc",
    "feat": "",
    "order": 10
  },
  {
    "src": "assets/artists/wrenevans/audio/11 - Phóng Đổ Tim Em.mp3",
    "title": "Phóng Đổ Tim Em",
    "feat": "",
    "order": 11
  },
  {
    "src": "assets/artists/wrenevans/audio/12 - ĐĐĐ.mp3",
    "title": "ĐĐĐ",
    "feat": "",
    "order": 12
  },
  {
    "src": "assets/artists/wrenevans/audio/13 - Để Ý.mp3",
    "title": "Để Ý",
    "feat": "",
    "order": 13
  },
  {
    "src": "assets/artists/wrenevans/audio/14 - Cầu Vĩnh Tuy.mp3",
    "title": "Cầu Vĩnh Tuy",
    "feat": "",
    "order": 14
  },
  {
    "src": "assets/artists/wrenevans/audio/15 - mưa chưa tạnh (interlude).mp3",
    "title": "mưa chưa tạnh (interlude)",
    "feat": "",
    "order": 15
  },
  {
    "src": "assets/artists/wrenevans/audio/16 - Thu Đợi.mp3",
    "title": "Thu Đợi",
    "feat": "",
    "order": 16
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "WREN EVANS ft. " + t.feat : "WREN EVANS",
  cover: t.cover || "",
}));

window.VIDEOS_WRENEVANS = [].map((v) => ({
  ...v,
  artist: "WREN EVANS",
  poster: v.poster || "",
}));

/* =========================================================
   PLAYLIST: TINH HÀ SAY HI
   Sinh tự động từ generate-playlist.js — KHÔNG SỬA TAY
   ========================================================= */

window.TRACKS_TINHHASAYHI = [
  {
    "src": "assets/artists/tinhhasayhi/audio/1 - THẾ GIỚI CỦA ANH ft Dương Domic & buitruonglinh & CONGB & WEAN & Vận Toàn.mp3",
    "title": "THẾ GIỚI CỦA ANH",
    "feat": "Dương Domic & buitruonglinh & CONGB & WEAN & Vận Toàn",
    "order": 1
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/2 - CÔ ĐƠN ANH CŨNG VUI ft WEAN & DILLAN & KIMLONG & Xuân Định KY.mp3",
    "title": "CÔ ĐƠN ANH CŨNG VUI",
    "feat": "WEAN & DILLAN & KIMLONG & Xuân Định KY",
    "order": 2
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/3 - CÓ GÌ ĐÂU MÀ CAY ft CAPTAIN BOY & CoolKid & IVAN & XUÂN ĐỊNH KY & LEONSASH.mp3",
    "title": "CÓ GÌ ĐÂU MÀ CAY",
    "feat": "CAPTAIN BOY & CoolKid & IVAN & XUÂN ĐỊNH KY & LEONSASH",
    "order": 3
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/4 - MẤT LA BÀN ft Pháp Kiều & Thể Thiên & VƯƠNG BÌNH & DANG HONG HAI & TORYSAX.mp3",
    "title": "MẤT LA BÀN",
    "feat": "Pháp Kiều & Thể Thiên & VƯƠNG BÌNH & DANG HONG HAI & TORYSAX",
    "order": 4
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/5 - MƯA VỘI PHÓNG ft Wren Evans & Ali Hoàng Dương & Cody Nam Võ & HYO & 2PILLZ.mp3",
    "title": "MƯA VỘI PHÓNG",
    "feat": "Wren Evans & Ali Hoàng Dương & Cody Nam Võ & HYO & 2PILLZ",
    "order": 5
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/6 - 50 CUỘC GỌI NHỠ ft CoolKid & Quang Hùng MasterD & Cody Nam Võ & Jaysonlei.mp3",
    "title": "50 CUỘC GỌI NHỠ",
    "feat": "CoolKid & Quang Hùng MasterD & Cody Nam Võ & Jaysonlei",
    "order": 6
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/7 - IM ĐỢI NGƯỜI ANH THƯƠNG ft Wren Evans & CAPTAIN BOY & IVAN & Thể Thiên.mp3",
    "title": "IM ĐỢI NGƯỜI ANH THƯƠNG",
    "feat": "Wren Evans & CAPTAIN BOY & IVAN & Thể Thiên",
    "order": 7
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/8 - XOAY VÒNG ft HURRYKNG & JSOL & VƯƠNG BÌNH & CONGB.mp3",
    "title": "XOAY VÒNG",
    "feat": "HURRYKNG & JSOL & VƯƠNG BÌNH & CONGB",
    "order": 8
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/9 - MRT ft XUÂN ĐỊNH KY & buitruonglinh & CAPTAIN BOY & HYO.mp3",
    "title": "MRT",
    "feat": "XUÂN ĐỊNH KY & buitruonglinh & CAPTAIN BOY & HYO",
    "order": 9
  },
  {
    "src": "assets/artists/tinhhasayhi/audio/10 - SECRET ft Quang Hùng MasterD & Cody Nam Võ & CongB & Wren Evans.mp3",
    "title": "SECRET",
    "feat": "Quang Hùng MasterD & Cody Nam Võ & CongB & Wren Evans",
    "order": 10
  }
].map((t) => ({
  ...t,
  artist: t.feat ? "TINH HÀ SAY HI ft. " + t.feat : "TINH HÀ SAY HI",
  cover: t.cover || "",
}));

window.VIDEOS_TINHHASAYHI = [].map((v) => ({
  ...v,
  artist: "TINH HÀ SAY HI",
  poster: v.poster || "",
}));

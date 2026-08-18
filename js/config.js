// ============================================
// MULTI-ARTIST CONFIG
// ============================================
// Được dùng bởi generate-playlist.js để load artists từ artists.json

// Default artist khi load trang (hoặc từ URL param ?artist=xxx)
const DEFAULT_ARTIST = "mck";

// Current artist — thay đổi qua artistSelector
let CURRENT_ARTIST = DEFAULT_ARTIST;
let CURRENT_ARTIST_DATA = null;

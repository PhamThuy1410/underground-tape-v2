// ========== SERVICE WORKER ==========
const CACHE_NAME = "music-app-v1.1"; // ← Thay đổi số này mỗi lần update CSS/JS
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/js/config.js",
  "/js/lyrics.js",
  "/artists.json"
];

// ... rest of code (không thay đổi)

// Install event - cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE).catch(() => {
        // Nếu cache thất bại, không lỗi, SW vẫn install
        console.log("Cache some files failed, but SW installed");
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Chỉ handle GET requests
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        // Không cache nếu không phải 200 hoặc là chrome-extension
        if (!response || response.status !== 200 || response.type === "error") {
          return response;
        }

        // Cache thành công
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Network failed, try cache
        return caches.match(event.request);
      });
    })
  );
});

// Message handler - để main app gửi message tới SW
self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
const CACHE_NAME = 'Duck-Hunt-v1';
const ASSETS = [
  './master.html',
  './viewer.html',
  './tool-team.html',
  './tool-group-hunt.html',
  './tool-name-picker.html',
  './bg_field.gif', 
  './src/sniper.png',
  './tool-wheel.html',
  // Make sure this filename is exact
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  'https://cdn.tailwindcss.com'
];

// Install Service Worker and Cache Files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve files from Cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
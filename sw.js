const CACHE_NAME = 'finance-v27-cache'; // Cambiamos a v27 para forzar la actualización
const urlsToCache = [
  './', 
  './index.html', 
  './manifest.json', 
  './logo.jpg', 
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
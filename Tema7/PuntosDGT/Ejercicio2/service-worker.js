// service-worker.js

const cacheName = 'consulta-saldo-v1';
const filesToCache = [
  './',
  './index.html',
  './modules/jquery-3.4.1.js',
  './styles/index.css',
  './js/index.js',
  './offline.html', // Agrega la página offline al caché
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Si la solicitud falla (offline), redirige a la página offline
        return caches.match('./offline.html');
      });
    })
  );
});

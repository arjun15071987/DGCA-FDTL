self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fdtl-cache').then(cache => {
      return cache.addAll([
        '/',
        '/FDTL_Calculator_v2.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        'https://cdn.tailwindcss.com',
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
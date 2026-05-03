const CACHE = 'kyr-v1';

// Cache resources as they are fetched (cache-as-you-go strategy).
// On first visit all pages are cached automatically.
// Subsequent visits served from cache when offline.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const networkFetch = fetch(e.request)
          .then(res => {
            if (res.ok) cache.put(e.request, res.clone());
            return res;
          })
          .catch(() => cached || new Response('Offline — please reload when connected.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' },
          }));
        // Serve cache immediately if available, update in background
        return cached || networkFetch;
      })
    )
  );
});

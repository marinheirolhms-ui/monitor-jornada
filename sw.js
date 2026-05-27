// ── Monitor de Jornada — Service Worker ──────────────────────────────────────
// Versão do cache — incremente ao atualizar o app
const CACHE_VERSION = 'mjornada-v5';
const CACHE_NAME    = CACHE_VERSION;

// Arquivos para cachear (disponíveis offline)
const PRECACHE_URLS = [
  './monitor_jornada_v5.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  // CDN libs — cacheadas na primeira visita
  'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Epilogue:wght@300;400;600;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
];

// ── Install: pre-cachear recursos essenciais ──────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-cacheando recursos...');
        // Cache silencioso — não falha se CDN não responder
        return Promise.allSettled(
          PRECACHE_URLS.map(url =>
            cache.add(url).catch(err => console.warn('[SW] Não cacheou:', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ── Activate: limpar caches antigos ──────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Removendo cache antigo:', key);
            return caches.delete(key);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: Cache First para assets, Network First para HTML ──────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Ignora requisições não-GET e extensões de browser
  if (event.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // HTML principal: Network First (garante versão mais recente)
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Demais recursos: Cache First (fonts, libs CDN, ícones)
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200) return response;
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
          })
          .catch(() => {
            // Fallback offline para ícones
            if (event.request.url.includes('icon')) {
              return caches.match('./icons/icon-192.png');
            }
          });
      })
  );
});

// ── Push Notifications (futuro) ───────────────────────────────────────────────
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Monitor de Jornada', {
      body: data.body || '',
      icon: './icons/icon-192.png',
      badge: './icons/icon-72.png',
      requireInteraction: data.requireInteraction || false,
      tag: data.tag || 'jornada',
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      if (clientList.length > 0) return clientList[0].focus();
      return clients.openWindow('./monitor_jornada_v5.html');
    })
  );
});

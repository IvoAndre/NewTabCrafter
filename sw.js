const CACHE_VERSION = "ntc-v2";
const APP_SHELL_CACHE = `${CACHE_VERSION}-app-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const UNSPLASH_IMAGE_CACHE = `${CACHE_VERSION}-unsplash-images`;
const UNSPLASH_IMAGE_CACHE_MAX_ENTRIES = 80;

const APP_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_SHELL_CACHE);
    await cache.addAll(APP_SHELL_ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => !name.startsWith(CACHE_VERSION))
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);
  if (isUnsplashImageRequest(url, event.request)) {
    event.respondWith(cacheFirstUnsplashImage(event.request));
    return;
  }

  if (url.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(staleWhileRevalidate(event.request));
});

function isUnsplashImageRequest(url, request) {
  const host = url.hostname.toLowerCase();
  const isUnsplashHost = host === "images.unsplash.com" || host.endsWith(".images.unsplash.com");
  if (!isUnsplashHost) {
    return false;
  }

  return request.destination === "image" || url.pathname.toLowerCase().includes("/photo-");
}

async function networkFirst(request) {
  const cache = await caches.open(APP_SHELL_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put("./index.html", response.clone()).catch(() => {});
    }
    return response;
  } catch {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) {
      return cached;
    }
    return cache.match("./index.html");
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request, { ignoreSearch: true });

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    return cached;
  }

  const fresh = await fetchPromise;
  if (fresh) {
    return fresh;
  }

  return caches.match("./index.html");
}

async function cacheFirstUnsplashImage(request) {
  const cache = await caches.open(UNSPLASH_IMAGE_CACHE);
  const cached = await cache.match(request, { ignoreSearch: false });
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      await cache.put(request, response.clone());
      await trimCacheEntries(UNSPLASH_IMAGE_CACHE, UNSPLASH_IMAGE_CACHE_MAX_ENTRIES);
    }
    return response;
  } catch {
    return cached || Response.error();
  }
}

async function trimCacheEntries(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const requests = await cache.keys();
  const overflow = requests.length - maxEntries;
  if (overflow <= 0) {
    return;
  }

  for (let index = 0; index < overflow; index += 1) {
    await cache.delete(requests[index]);
  }
}

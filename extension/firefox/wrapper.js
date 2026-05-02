/**
 * Firefox extension wrapper.
 *
 * The shared app.js also runs on the public site, where registering sw.js is
 * valid. In the packaged extension, keep app.js unchanged, no-op that page
 * service-worker registration, and provide the same Unsplash cache-first
 * behavior from this extension-only layer.
 */
(function () {
  const CACHE_VERSION = "ntc-v2";
  const UNSPLASH_IMAGE_CACHE = `${CACHE_VERSION}-unsplash-images`;
  const UNSPLASH_IMAGE_CACHE_MAX_ENTRIES = 80;

  const proto = window.location.protocol;
  const isExtensionPage = proto === "moz-extension:" || proto === "chrome-extension:";
  if (!isExtensionPage) {
    return;
  }

  patchServiceWorkerRegistration();
  installUnsplashBackgroundCache();

  function patchServiceWorkerRegistration() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const serviceWorker = navigator.serviceWorker;
    if (typeof serviceWorker.register !== "function") {
      return;
    }

    const originalRegister = serviceWorker.register.bind(serviceWorker);
    const registerExtensionServiceWorker = function registerExtensionServiceWorker(scriptURL, options) {
      const url = String(scriptURL || "");
      if (url === "sw.js" || url === "./sw.js" || url.endsWith("/sw.js")) {
        return Promise.resolve(undefined);
      }

      return originalRegister(scriptURL, options);
    };

    try {
      serviceWorker.register = registerExtensionServiceWorker;
    } catch {
      try {
        Object.defineProperty(serviceWorker, "register", {
          configurable: true,
          value: registerExtensionServiceWorker
        });
      } catch {
        // Leave Firefox to reject the page-level registration if the API is sealed.
      }
    }
  }

  function installUnsplashBackgroundCache() {
    if (!("caches" in window) || typeof fetch !== "function" || typeof URL.createObjectURL !== "function") {
      return;
    }

    deleteOldCaches().catch(() => {});

    const backgroundImageDescriptor = findStylePropertyDescriptor("backgroundImage");
    const setPropertyDescriptor = findStylePropertyDescriptor("setProperty");
    if (!backgroundImageDescriptor?.set || !setPropertyDescriptor?.value) {
      return;
    }

    const originalBackgroundImageSetter = backgroundImageDescriptor.set;
    const originalSetProperty = setPropertyDescriptor.value;
    const stateByStyle = new WeakMap();

    const setBackgroundImage = (style, value) => {
      originalBackgroundImageSetter.call(style, value);
    };

    const releaseStyleObjectUrl = (style) => {
      const state = stateByStyle.get(style);
      if (state?.objectUrl) {
        URL.revokeObjectURL(state.objectUrl);
        state.objectUrl = "";
      }
    };

    const queueCachedBackground = (style, cssValue) => {
      const sourceUrl = extractCssImageUrl(cssValue);
      if (!sourceUrl || !isUnsplashImageRequest(sourceUrl)) {
        releaseStyleObjectUrl(style);
        setBackgroundImage(style, cssValue);
        return;
      }

      let state = stateByStyle.get(style);
      if (!state) {
        state = { id: 0, objectUrl: "" };
        stateByStyle.set(style, state);
      }

      state.id += 1;
      const runId = state.id;
      setBackgroundImage(style, "none");

      getCachedUnsplashObjectUrl(sourceUrl)
        .then((objectUrl) => {
          if (!objectUrl || state.id !== runId) {
            if (objectUrl) {
              URL.revokeObjectURL(objectUrl);
            }
            return;
          }

          releaseStyleObjectUrl(style);
          state.objectUrl = objectUrl;
          setBackgroundImage(style, `url("${objectUrl}")`);
        })
        .catch(() => {
          if (state.id === runId) {
            releaseStyleObjectUrl(style);
            setBackgroundImage(style, cssValue);
          }
        });
    };

    Object.defineProperty(CSSStyleDeclaration.prototype, "backgroundImage", {
      configurable: true,
      enumerable: backgroundImageDescriptor.enumerable,
      get: backgroundImageDescriptor.get,
      set(value) {
        queueCachedBackground(this, String(value || ""));
      }
    });

    CSSStyleDeclaration.prototype.setProperty = function setProperty(name, value, priority) {
      if (String(name || "").toLowerCase() === "background-image") {
        queueCachedBackground(this, String(value || ""));
        return undefined;
      }

      if (String(name || "").toLowerCase() === "background") {
        const cssValue = String(value || "");
        if (isSingleUnsplashBackground(cssValue)) {
          queueCachedBackground(this, cssValue);
          return undefined;
        }
      }

      return originalSetProperty.call(this, name, value, priority);
    };

    window.addEventListener("pagehide", () => {
      const backgroundLayer = document.getElementById("backgroundLayer");
      if (backgroundLayer) {
        releaseStyleObjectUrl(backgroundLayer.style);
      }
    }, { once: true });
  }

  function extractCssImageUrl(value) {
    const match = String(value || "").match(/^url\((['"]?)(.*)\1\)$/);
    return match ? match[2] : "";
  }

  function isSingleUnsplashBackground(value) {
    return isUnsplashImageRequest(extractCssImageUrl(value));
  }

  function isUnsplashImageRequest(value) {
    try {
      const parsed = new URL(value);
      const host = parsed.hostname.toLowerCase();
      return host === "images.unsplash.com" || host.endsWith(".images.unsplash.com");
    } catch {
      return false;
    }
  }

  function findStylePropertyDescriptor(propertyName) {
    let proto = CSSStyleDeclaration.prototype;
    while (proto) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
      if (descriptor) {
        return descriptor;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return null;
  }

  async function getCachedUnsplashObjectUrl(url) {
    const response = await cacheFirstUnsplashImage(url);
    if (!response || response.type === "opaque") {
      return "";
    }

    const blob = await response.blob();
    if (!blob.size) {
      return "";
    }
    return URL.createObjectURL(blob);
  }

  async function cacheFirstUnsplashImage(url) {
    const cache = await caches.open(UNSPLASH_IMAGE_CACHE);
    const cached = await cache.match(url, { ignoreSearch: false });
    if (cached) {
      return cached;
    }

    const response = await fetch(url, {
      cache: "default",
      credentials: "omit",
      mode: "cors"
    });
    if (response && response.ok) {
      await cache.put(url, response.clone());
      await trimCacheEntries(UNSPLASH_IMAGE_CACHE, UNSPLASH_IMAGE_CACHE_MAX_ENTRIES);
    }
    return response;
  }

  async function deleteOldCaches() {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => !name.startsWith(CACHE_VERSION))
      .map((name) => caches.delete(name)));
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
})();

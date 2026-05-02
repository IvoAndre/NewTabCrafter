/**
 * Background script: search suggestions proxy (avoids page-origin CORS) and first-run setup tab.
 */

/** Prefer `browser` (Firefox); fall back to `chrome`. */
const ext = typeof browser !== "undefined" ? browser : chrome;

const SUGGEST_FETCH_ORIGINS = new Set([
  "https://suggestqueries.google.com",
  "https://duckduckgo.com",
  "https://api.bing.com"
]);

function isAllowedSuggestFetchUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && SUGGEST_FETCH_ORIGINS.has(parsed.origin);
  } catch {
    return false;
  }
}

ext.runtime.onInstalled.addListener((details) => {
  if (details && details.reason === "install") {
    try {
      const url = ext.runtime.getURL("setup.html");
      ext.tabs.create({ url });
    } catch (e) {
      console.warn("[NTC] Could not open setup.html:", e);
    }
  }
});

ext.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === "fetchSuggest" && request.url && isAllowedSuggestFetchUrl(request.url)) {
    fetch(request.url, { credentials: "omit", cache: "no-store" })
      .then(async (res) => {
        const text = await res.text();
        sendResponse({ ok: res.ok, status: res.status, text });
      })
      .catch(() => {
        sendResponse({ ok: false, status: 0, text: "" });
      });
    return true;
  }
  return undefined;
});

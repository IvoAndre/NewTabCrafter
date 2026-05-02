/**
 * First-run import: same localStorage key as app.js (moz-extension origin).
 * UI strings for en-US / pt-PT; persists language into config for new tab.
 */
const STORAGE_KEY = "newtab.config";

const STRINGS = {
  "en-US": {
    docTitle: "NewTabCrafter — First run",
    setupTitle: "Import settings",
    setupIntroBeforeLink: "On ",
    setupIntroAfterLink: ", open ",
    setupIntroAction: "Settings → Export",
    setupIntroAfterAction: " and save the JSON file. Then choose it below.",
    setupStep1: "Export from the website (JSON).",
    setupStep2: "Click «Choose file» below.",
    setupStep3: "Open a new tab to see your personalized new tab page.",
    setupChooseFile: "Choose file…",
    setupContinueSkip: "Continue without importing",
    setupOpenNewtab: "Open new tab page",
    languageLabel: "Language",
    setupStatusOk: "Settings imported. Open a new tab to apply.",
    setupStatusErr: "Invalid file — use the JSON from Export."
  },
  "pt-PT": {
    docTitle: "NewTabCrafter — Primeira execução",
    setupTitle: "Importar definições",
    setupIntroBeforeLink: "Em ",
    setupIntroAfterLink: ", abre ",
    setupIntroAction: "Definições → Export",
    setupIntroAfterAction: " e guarda o ficheiro JSON. Depois escolhe-o aqui.",
    setupStep1: "Exportar do site (JSON).",
    setupStep2: "Clicar em «Escolher ficheiro» abaixo.",
    setupStep3: "Abrir um novo separador para ver a página personalizada.",
    setupChooseFile: "Escolher ficheiro…",
    setupContinueSkip: "Continuar sem importar",
    setupOpenNewtab: "Abrir página de novo separador",
    languageLabel: "Idioma",
    setupStatusOk: "Definições importadas. Abre um novo separador para aplicar.",
    setupStatusErr: "Ficheiro inválido — usa o JSON exportado em Definições → Export."
  }
};

function getStoredLanguage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const data = JSON.parse(raw);
    if (data && typeof data.language === "string") {
      return data.language;
    }
  } catch {
    // ignore
  }
  return null;
}

function detectDefaultLanguage() {
  const stored = getStoredLanguage();
  if (stored === "pt-PT" || stored === "en-US") {
    return stored;
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("pt")) {
    return "pt-PT";
  }
  return "en-US";
}

function persistLanguage(lang) {
  if (lang !== "pt-PT" && lang !== "en-US") {
    return;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let cfg = raw ? JSON.parse(raw) : {};
    if (!cfg || typeof cfg !== "object" || Array.isArray(cfg)) {
      cfg = {};
    }
    cfg.language = lang;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
  } catch {
    // ignore
  }
}

function t(lang, key) {
  const dict = STRINGS[lang] || STRINGS["en-US"];
  return dict[key] ?? STRINGS["en-US"][key] ?? key;
}

function applyLanguage(lang) {
  const L = lang === "pt-PT" ? "pt-PT" : "en-US";
  document.documentElement.lang = L;
  document.title = t(L, "docTitle");

  const titleEl = document.getElementById("setupTitle");
  if (titleEl) {
    titleEl.textContent = t(L, "setupTitle");
  }

  const introEl = document.getElementById("setupIntro");
  if (introEl) {
    renderSetupIntro(introEl, L);
  }

  const stepsEl = document.getElementById("setupSteps");
  if (stepsEl) {
    stepsEl.innerHTML = "";
    [t(L, "setupStep1"), t(L, "setupStep2"), t(L, "setupStep3")].forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      stepsEl.appendChild(li);
    });
  }

  const chooseLbl = document.getElementById("setupChooseFileLabel");
  if (chooseLbl) {
    chooseLbl.textContent = t(L, "setupChooseFile");
  }

  const skipBtn = document.getElementById("skipBtn");
  if (skipBtn) {
    skipBtn.textContent = t(L, "setupContinueSkip");
  }

  const openBtn = document.getElementById("openNewtabBtn");
  if (openBtn) {
    openBtn.textContent = t(L, "setupOpenNewtab");
  }

  const langText = document.getElementById("setupLangText");
  if (langText) {
    langText.textContent = t(L, "languageLabel");
  }

  const sel = document.getElementById("setupLanguage");
  if (sel) {
    sel.value = L;
  }
}

function renderSetupIntro(container, lang) {
  container.textContent = "";

  const siteLink = document.createElement("a");
  siteLink.className = "setupSiteLink";
  siteLink.href = "https://newtab.rivodani.com";
  siteLink.target = "_blank";
  siteLink.rel = "noopener noreferrer";
  siteLink.textContent = "newtab.rivodani.com";

  const action = document.createElement("strong");
  action.textContent = t(lang, "setupIntroAction");

  container.append(
    t(lang, "setupIntroBeforeLink"),
    siteLink,
    t(lang, "setupIntroAfterLink"),
    action,
    t(lang, "setupIntroAfterAction")
  );
}

function setStatus(text, isError) {
  const el = document.getElementById("setupStatus");
  if (!el) {
    return;
  }
  el.textContent = text;
  el.classList.toggle("err", Boolean(isError));
}

const initialLang = detectDefaultLanguage();
applyLanguage(initialLang);
persistLanguage(initialLang);

document.getElementById("setupLanguage")?.addEventListener("change", (e) => {
  const v = e.target && e.target.value;
  if (v !== "pt-PT" && v !== "en-US") {
    return;
  }
  applyLanguage(v);
  persistLanguage(v);
});

document.getElementById("importFile")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  const lang = document.getElementById("setupLanguage")?.value === "pt-PT" ? "pt-PT" : "en-US";
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("Invalid settings object");
    }
    data.language = lang;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setStatus(t(lang, "setupStatusOk"), false);
  } catch {
    setStatus(t(lang, "setupStatusErr"), true);
  } finally {
    event.target.value = "";
  }
});

document.getElementById("skipBtn")?.addEventListener("click", () => {
  window.close();
});

document.getElementById("openNewtabBtn")?.addEventListener("click", () => {
  const url =
    typeof chrome !== "undefined" && chrome.runtime?.getURL
      ? chrome.runtime.getURL("newtab.html")
      : "newtab.html";
  if (typeof chrome !== "undefined" && chrome.tabs?.create) {
    chrome.tabs.create({ url });
  } else {
    window.location.href = url;
  }
});

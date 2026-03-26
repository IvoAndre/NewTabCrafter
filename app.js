const STORAGE_KEY = "newtab.config";

const CORNERS = ["top-left", "top-right", "bottom-left", "bottom-right"];
const CORNER_ICONS = {
  "top-left": "north_west",
  "top-right": "north_east",
  "bottom-left": "south_west",
  "bottom-right": "south_east"
};

const ENGINE_PRESETS = {
  duckduckgo: { name: "DuckDuckGo", searchUrl: "https://duckduckgo.com/?q={query}", svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23de5833'/%3E%3Ccircle cx='32' cy='32' r='17' fill='%23fff'/%3E%3Ccircle cx='32' cy='32' r='9' fill='%23ffb347'/%3E%3C/svg%3E" },
  google: { name: "Google", searchUrl: "https://www.google.com/search?q={query}", svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%234285f4' d='M59 32c0-2-.2-3.9-.5-5.7H32v10.8h15.2c-.7 3.5-2.7 6.4-5.8 8.4v7h9.4C56.2 47.8 59 40.5 59 32z'/%3E%3Cpath fill='%2334a853' d='M32 60c7.8 0 14.3-2.6 19-7.1l-9.4-7c-2.6 1.8-6 2.9-9.6 2.9-7.4 0-13.8-5-16-11.8H6.2v7.4A28 28 0 0 0 32 60z'/%3E%3Cpath fill='%23fbbc05' d='M16 37c-.6-1.8-1-3.6-1-5.5s.4-3.7 1-5.5v-7.4H6.2A28 28 0 0 0 4 31.5C4 36 5 40.2 6.2 44.4L16 37z'/%3E%3Cpath fill='%23ea4335' d='M32 14.2c4.2 0 7.9 1.4 10.9 4.3l8.1-8.1C46.3 6.1 39.8 3.6 32 3.6A28 28 0 0 0 6.2 18.6l9.8 7.4c2.2-6.8 8.6-11.8 16-11.8z'/%3E%3C/svg%3E" },
  bing: { name: "Bing", searchUrl: "https://www.bing.com/search?q={query}", svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23008aef' d='M18 6v42l16 10 12-7-12-7V20z'/%3E%3C/svg%3E" },
  brave: { name: "Brave", searchUrl: "https://search.brave.com/search?q={query}", svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23ff5e00' d='M32 4l18 7 4 15-8 24-14 10-14-10-8-24 4-15z'/%3E%3Ccircle cx='32' cy='33' r='10' fill='%23fff'/%3E%3C/svg%3E" },
  startpage: { name: "Startpage", searchUrl: "https://www.startpage.com/do/search?query={query}", svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%230066ff'/%3E%3Cpath fill='%23fff' d='M20 20h24v6H26v8h16v6H26v8h18v6H20z'/%3E%3C/svg%3E" }
};

const UNSPLASH_APP_ID = "906064";
const UNSPLASH_ACCESS_KEY = "DXc4wqPdvqunuCE-7gdQ3DXMavlmCF3jucuwEv86DSo";
const UNSPLASH_REFERRAL = "newtab-page";
const RANDOM_STOCK_TERMS = {
  nature: "nature landscape",
  city: "city skyline night",
  tech: "technology abstract",
  minimal: "minimal clean background",
  space: "space galaxy stars"
};

const I18N = {
  "en-US": {
    settingsTitle: "Settings",
    features: "Features",
    addingMode: "Adding mode",
    enableSearch: "Enable search",
    enableApps: "Enable apps menu",
    enableMainShortcuts: "Enable main shortcuts",
    enableLogo: "Enable logo",
    language: "Language",
    font: "Font",
    fontMode: "Mode",
    systemFont: "System font stack",
    googleFontUrl: "Google font URL",
    googleFontFamily: "CSS font-family name",
    fontUiSize: "UI size (px)",
    fontUiWeight: "UI weight",
    fontSearchSize: "Search size (px)",
    fontSearchWeight: "Search weight",
    fontShortcutSize: "Shortcut text size (px)",
    fontShortcutWeight: "Shortcut text weight",
    fontSettingsWeight: "Settings text weight",
    searchFontFamily: "Search font family",
    shortcutFontFamily: "Shortcut font family",
    settingsFontFamily: "Settings font family",
    theme: "Theme",
    themeMode: "Mode",
    componentBg: "Component color",
    componentOpacity: "Component transparency (%)",
    componentText: "Text color",
    componentBorder: "Border color",
    background: "Background",
    backgroundType: "Type",
    backgroundColor: "Color",
    gradientDegree: "Degrees",
    gradientColors: "Colors (comma separated)",
    gradientBlur: "Gradient blur (px)",
    uploadBackground: "Upload image",
    randomCategory: "Random category",
    playlistUpload: "Upload list images",
    playlistSelect: "List image",
    playlistShuffle: "Pick random now",
    playlistRemove: "Remove selected image",
    imagePosX: "Image X",
    imagePosY: "Image Y",
    imageScale: "Image zoom",
    logo: "Logo",
    showLogo: "Show logo",
    uploadLogo: "Upload logo",
    logoSize: "Logo size",
    logoPosY: "Logo vertical offset",
    searchLayout: "Search layout",
    searchOffsetY: "Search offset Y",
    searchEngine: "Search",
    enginePreset: "Engine",
    engineName: "Name",
    searchUrl: "Search URL",
    engineIconMode: "Icon",
    uploadEngineIcon: "Upload icon",
    layout: "Layout",
    appsCorner: "Apps corner",
    settingsCorner: "Settings corner",
    appsColumns: "Apps columns",
    mainColumns: "Main shortcuts per row",
    shortcutTileSize: "Shortcut tile size (px)",
    mainRows: "Main rows (x10)",
    shortcutStyle: "Shortcuts",
    appsShowText: "Apps text",
    mainShowText: "Main text",
    profile: "Settings button",
    settingsButtonStyle: "Style",
    uploadProfile: "Upload profile",
    customFavicon: "Favicon",
    tabName: "Tab name",
    data: "Data",
    exportSettings: "Export",
    importSettings: "Import",
    resetSettings: "Reset to defaults",
    searchPlaceholder: "Search with {engine}",
    edit: "Edit",
    remove: "Remove",
    addShortcut: "Add shortcut"
  },
  "pt-PT": {
    settingsTitle: "Definições",
    features: "Funcionalidades",
    addingMode: "Modo de adição",
    enableSearch: "Ativar pesquisa",
    enableApps: "Ativar menu Apps",
    enableMainShortcuts: "Ativar atalhos principais",
    enableLogo: "Ativar logótipo",
    language: "Idioma",
    font: "Tipo de letra",
    fontMode: "Modo",
    systemFont: "Pilha de fonte do sistema",
    googleFontUrl: "URL Google Fonts",
    googleFontFamily: "Nome font-family CSS",
    fontUiSize: "Tamanho UI (px)",
    fontUiWeight: "Peso UI",
    fontSearchSize: "Tamanho pesquisa (px)",
    fontSearchWeight: "Peso da pesquisa",
    fontShortcutSize: "Tamanho texto atalhos (px)",
    fontShortcutWeight: "Peso do texto dos atalhos",
    fontSettingsWeight: "Peso do texto das definições",
    searchFontFamily: "Fonte da pesquisa",
    shortcutFontFamily: "Fonte dos atalhos",
    settingsFontFamily: "Fonte das definições",
    theme: "Tema",
    themeMode: "Modo",
    componentBg: "Cor dos componentes",
    componentOpacity: "Transparencia dos componentes (%)",
    componentText: "Cor do texto",
    componentBorder: "Cor da borda",
    background: "Fundo",
    backgroundType: "Tipo",
    backgroundColor: "Cor",
    gradientDegree: "Graus",
    gradientColors: "Cores (separadas por vírgula)",
    gradientBlur: "Desfoque do gradiente (px)",
    uploadBackground: "Carregar imagem",
    randomCategory: "Categoria aleatória",
    playlistUpload: "Carregar imagens da lista",
    playlistSelect: "Imagem da lista",
    playlistShuffle: "Escolher aleatória agora",
    playlistRemove: "Remover imagem selecionada",
    imagePosX: "Imagem X",
    imagePosY: "Imagem Y",
    imageScale: "Zoom da imagem",
    logo: "Logótipo",
    showLogo: "Mostrar logótipo",
    uploadLogo: "Carregar logótipo",
    logoSize: "Tamanho do logótipo",
    logoPosY: "Deslocamento vertical",
    searchLayout: "Layout da pesquisa",
    searchOffsetY: "Deslocamento Y da pesquisa",
    searchEngine: "Pesquisa",
    enginePreset: "Motor",
    engineName: "Nome",
    searchUrl: "URL de pesquisa",
    engineIconMode: "Ícone",
    uploadEngineIcon: "Carregar ícone",
    layout: "Disposição",
    appsCorner: "Canto Apps",
    settingsCorner: "Canto definições",
    appsColumns: "Colunas Apps",
    mainColumns: "Atalhos principais por linha",
    shortcutTileSize: "Tamanho do atalho (px)",
    mainRows: "Linhas principais (x10)",
    shortcutStyle: "Atalhos",
    appsShowText: "Texto Apps",
    mainShowText: "Texto principal",
    profile: "Botão de definições",
    settingsButtonStyle: "Estilo",
    uploadProfile: "Carregar perfil",
    customFavicon: "Favicon",
    tabName: "Nome do separador",
    data: "Dados",
    exportSettings: "Exportar",
    importSettings: "Importar",
    resetSettings: "Repor predefinições",
    searchPlaceholder: "Pesquisar com {engine}",
    edit: "Editar",
    remove: "Remover",
    addShortcut: "Adicionar atalho"
  }
};

const defaultConfig = {
  language: "en-US",
  tabTitle: "New Tab",
  customFaviconData: "",
  features: {
    search: true,
    appsMenu: true,
    mainShortcuts: true,
    logo: true
  },
  font: {
    mode: "system",
    systemFamily: "Segoe UI, sans-serif",
    googleCssUrl: "",
    googleFamily: "",
    uiSize: 14,
    uiWeight: 500,
    searchSize: 17,
    searchWeight: 500,
    shortcutSize: 14,
    shortcutWeight: 500,
    settingsWeight: 500,
    searchFamily: "",
    shortcutFamily: "",
    settingsFamily: ""
  },
  theme: {
    mode: "system",
    componentAlpha: 56,
    presets: {
      light: { component: "#f3f7ff", text: "#1a2a44", border: "#95a8cb" },
      dark: { component: "#24344f", text: "#f3f6ff", border: "#7e91bb" }
    },
    custom: { component: "#24344f", text: "#f3f6ff", border: "#7e91bb" }
  },
  background: {
    type: "gradient",
    color: "#0f1b2f",
    gradientDegree: 135,
    gradientColors: ["#365b9f", "#0f1b2f"],
    gradientBlur: 0,
    imageData: "",
    positionMode: "offset",
    posX: 0,
    posY: 0,
    scale: 100,
    randomCategory: "nature",
    randomCache: {},
    randomCurrentPhoto: null,
    randomSeed: Date.now(),
    playlist: [],
    playlistSelectedId: ""
  },
  logo: {
    enabled: false,
    imageData: "",
    width: 180,
    topOffset: 0
  },
  searchLayout: {
    offsetY: 0
  },
  searchEngine: {
    preset: "duckduckgo",
    customName: "",
    customUrl: "https://example.com/search?q={query}",
    iconMode: "preset",
    customIconData: "",
    iconScale: 100
  },
  layout: {
    appsCorner: "top-left",
    settingsCorner: "top-right",
    appsColumns: 4,
    mainColumns: 10,
    shortcutTileSize: 112,
    addingMode: false
  },
  shortcutStyle: {
    appsShowText: true,
    mainShowText: true
  },
  settingsButton: {
    style: "gear",
    profileImageData: "",
    profileScale: 100
  },
  shortcuts: {
    main: [],
    apps: []
  },
  settingsPane: {
    width: 420
  }
};

function shortcutFactory(name, url) {
  return {
    id: crypto.randomUUID(),
    name,
    url,
    iconMode: "favicon",
    faviconUrl: "",
    customIconData: "",
    iconScale: 100,
    openIn: "current",
    faClass: "",
    faColor1: "#74b1ff",
    faColor2: "",
    badgeText: "",
    badgeColor1: "#4f7cff",
    badgeColor2: ""
  };
}

const modalState = {
  mode: "add",
  listName: "main",
  shortcutId: "",
  pendingIconData: ""
};

let config = loadConfig();
let dragState = { listName: "", id: "" };
let didWire = false;
let didAutoFocusSearch = false;
let didWarnStorageQuota = false;
let randomFetchPromise = null;
let lastUnsplashDownloadId = "";
let suggestionsDebounceTimer = 0;
let suggestionsRequestToken = 0;
let suggestionsAbortController = null;
let suggestionsJsonpCleanup = null;
let suggestionsBlurTimer = 0;
let searchSuggestionItems = [];
let searchSuggestionActiveIndex = -1;
const faviconCache = new Map();

const els = {
  body: document.body,
  customFavicon: document.getElementById("customFavicon"),
  userGoogleFont: document.getElementById("userGoogleFont"),
  backgroundLayer: document.getElementById("backgroundLayer"),
  appsToggle: document.getElementById("appsToggle"),
  settingsToggle: document.getElementById("settingsToggle"),
  settingsGear: document.getElementById("settingsGear"),
  profileImage: document.getElementById("profileImage"),
  logoSection: document.getElementById("logoSection"),
  logoImage: document.getElementById("logoImage"),
  searchSection: document.getElementById("searchSection"),
  searchForm: document.getElementById("searchForm"),
  searchInput: document.getElementById("searchInput"),
  searchSuggestions: document.getElementById("searchSuggestions"),
  searchIcon: document.getElementById("searchIcon"),
  mainShortcutsSection: document.getElementById("mainShortcutsSection"),
  mainShortcutsGrid: document.getElementById("mainShortcutsGrid"),
  shortcutStyleSection: document.getElementById("shortcutStyleSection"),
  appsMenu: document.getElementById("appsMenu"),
  unsplashAttribution: document.getElementById("unsplashAttribution"),
  unsplashAttributionText: document.getElementById("unsplashAttributionText"),
  appsGrid: document.getElementById("appsGrid"),
  settingsPane: document.getElementById("settingsPane"),
  settingsResizeHandle: document.getElementById("settingsResizeHandle"),
  closeSettings: document.getElementById("closeSettings"),

  languageSelect: document.getElementById("languageSelect"),
  addingMode: document.getElementById("addingMode"),
  enableSearch: document.getElementById("enableSearch"),
  enableApps: document.getElementById("enableApps"),
  enableMainShortcuts: document.getElementById("enableMainShortcuts"),
  enableLogo: document.getElementById("enableLogo"),

  fontMode: document.getElementById("fontMode"),
  systemFont: document.getElementById("systemFont"),
  googleFontUrl: document.getElementById("googleFontUrl"),
  googleFontFamily: document.getElementById("googleFontFamily"),
  fontUiSize: document.getElementById("fontUiSize"),
  fontUiWeight: document.getElementById("fontUiWeight"),
  fontSearchSize: document.getElementById("fontSearchSize"),
  fontSearchWeight: document.getElementById("fontSearchWeight"),
  fontShortcutSize: document.getElementById("fontShortcutSize"),
  fontShortcutWeight: document.getElementById("fontShortcutWeight"),
  fontSettingsWeight: document.getElementById("fontSettingsWeight"),
  searchFontFamily: document.getElementById("searchFontFamily"),
  shortcutFontFamily: document.getElementById("shortcutFontFamily"),
  settingsFontFamily: document.getElementById("settingsFontFamily"),

  themeMode: document.getElementById("themeMode"),
  componentColor: document.getElementById("componentColor"),
  componentColorHex: document.getElementById("componentColorHex"),
  componentOpacity: document.getElementById("componentOpacity"),
  componentOpacityValue: document.getElementById("componentOpacityValue"),
  componentTextColor: document.getElementById("componentTextColor"),
  componentTextColorHex: document.getElementById("componentTextColorHex"),
  componentBorderColor: document.getElementById("componentBorderColor"),
  componentBorderColorHex: document.getElementById("componentBorderColorHex"),

  backgroundType: document.getElementById("backgroundType"),
  backgroundColor: document.getElementById("backgroundColor"),
  backgroundColorHex: document.getElementById("backgroundColorHex"),
  gradientDegree: document.getElementById("gradientDegree"),
  gradientDegreeValue: document.getElementById("gradientDegreeValue"),
  gradientColors: document.getElementById("gradientColors"),
  gradientPreview: document.getElementById("gradientPreview"),
  gradientBlur: document.getElementById("gradientBlur"),
  gradientBlurValue: document.getElementById("gradientBlurValue"),
  backgroundImageUpload: document.getElementById("backgroundImageUpload"),
  randomCategory: document.getElementById("randomCategory"),
  backgroundPosX: document.getElementById("backgroundPosX"),
  backgroundPosXValue: document.getElementById("backgroundPosXValue"),
  backgroundPosY: document.getElementById("backgroundPosY"),
  backgroundPosYValue: document.getElementById("backgroundPosYValue"),
  backgroundScale: document.getElementById("backgroundScale"),
  backgroundScaleValue: document.getElementById("backgroundScaleValue"),

  playlistUpload: document.getElementById("playlistUpload"),
  playlistSelect: document.getElementById("playlistSelect"),
  playlistShuffle: document.getElementById("playlistShuffle"),
  playlistRemove: document.getElementById("playlistRemove"),
  playlistPosX: document.getElementById("playlistPosX"),
  playlistPosXValue: document.getElementById("playlistPosXValue"),
  playlistPosY: document.getElementById("playlistPosY"),
  playlistPosYValue: document.getElementById("playlistPosYValue"),
  playlistScale: document.getElementById("playlistScale"),
  playlistScaleValue: document.getElementById("playlistScaleValue"),

  showLogo: document.getElementById("showLogo"),
  logoUpload: document.getElementById("logoUpload"),
  logoSize: document.getElementById("logoSize"),
  logoSizeValue: document.getElementById("logoSizeValue"),
  logoPosY: document.getElementById("logoPosY"),
  logoPosYValue: document.getElementById("logoPosYValue"),
  searchOffsetY: document.getElementById("searchOffsetY"),
  searchOffsetYValue: document.getElementById("searchOffsetYValue"),

  enginePreset: document.getElementById("enginePreset"),
  customEngineFields: document.getElementById("customEngineFields"),
  customEngineName: document.getElementById("customEngineName"),
  customEngineUrl: document.getElementById("customEngineUrl"),
  engineIconMode: document.getElementById("engineIconMode"),
  engineIconUploadWrap: document.getElementById("engineIconUploadWrap"),
  engineIconUpload: document.getElementById("engineIconUpload"),
  engineIconScaleWrap: document.getElementById("engineIconScaleWrap"),
  engineIconScale: document.getElementById("engineIconScale"),
  engineIconScaleValue: document.getElementById("engineIconScaleValue"),

  appsCornerPicker: document.getElementById("appsCornerPicker"),
  settingsCornerPicker: document.getElementById("settingsCornerPicker"),
  appsColumns: document.getElementById("appsColumns"),
  mainColumns: document.getElementById("mainColumns"),
  shortcutTileSize: document.getElementById("shortcutTileSize"),

  appsShowText: document.getElementById("appsShowText"),
  mainShowText: document.getElementById("mainShowText"),

  settingsButtonStyle: document.getElementById("settingsButtonStyle"),
  profileUploadWrap: document.getElementById("profileUploadWrap"),
  profileUpload: document.getElementById("profileUpload"),
  profileScaleWrap: document.getElementById("profileScaleWrap"),
  profileScale: document.getElementById("profileScale"),
  profileScaleValue: document.getElementById("profileScaleValue"),

  exportSettings: document.getElementById("exportSettings"),
  resetSettings: document.getElementById("resetSettings"),
  importSettings: document.getElementById("importSettings"),
  faviconUpload: document.getElementById("faviconUpload"),
  tabName: document.getElementById("tabName"),

  shortcutModalBackdrop: document.getElementById("shortcutModalBackdrop"),
  modalTitle: document.getElementById("modalTitle"),
  shortcutModalForm: document.getElementById("shortcutModalForm"),
  modalShortcutName: document.getElementById("modalShortcutName"),
  modalShortcutUrl: document.getElementById("modalShortcutUrl"),
  modalShortcutOpenIn: document.getElementById("modalShortcutOpenIn"),
  modalShortcutIconMode: document.getElementById("modalShortcutIconMode"),
  modalShortcutIconUploadWrap: document.getElementById("modalShortcutIconUploadWrap"),
  modalShortcutIconUpload: document.getElementById("modalShortcutIconUpload"),
  modalShortcutFaviconUrlWrap: document.getElementById("modalShortcutFaviconUrlWrap"),
  modalShortcutFaviconUrl: document.getElementById("modalShortcutFaviconUrl"),
  modalShortcutIconScaleWrap: document.getElementById("modalShortcutIconScaleWrap"),
  modalShortcutIconScale: document.getElementById("modalShortcutIconScale"),
  modalShortcutIconScaleValue: document.getElementById("modalShortcutIconScaleValue"),
  modalShortcutFaClassWrap: document.getElementById("modalShortcutFaClassWrap"),
  modalShortcutFaColor1Wrap: document.getElementById("modalShortcutFaColor1Wrap"),
  modalShortcutFaColor2Wrap: document.getElementById("modalShortcutFaColor2Wrap"),
  modalShortcutFaClass: document.getElementById("modalShortcutFaClass"),
  modalShortcutFaColor1: document.getElementById("modalShortcutFaColor1"),
  modalShortcutFaColor2: document.getElementById("modalShortcutFaColor2"),
  modalShortcutBadgeTextWrap: document.getElementById("modalShortcutBadgeTextWrap"),
  modalShortcutBadgeColor1Wrap: document.getElementById("modalShortcutBadgeColor1Wrap"),
  modalShortcutBadgeColor2Wrap: document.getElementById("modalShortcutBadgeColor2Wrap"),
  modalShortcutBadgeText: document.getElementById("modalShortcutBadgeText"),
  modalShortcutBadgeColor1: document.getElementById("modalShortcutBadgeColor1"),
  modalShortcutBadgeColor2: document.getElementById("modalShortcutBadgeColor2"),
  modalCancel: document.getElementById("modalCancel")
};

if (document.readyState === "complete") {
  boot();
} else {
  window.addEventListener("load", boot, { once: true });
}

function boot() {
  sanitizeConfig();
  rotatePlaylistSelectionOnBoot();
  enforceAddingModeForEmptyShortcuts();
  applyTabTitle();
  applyLanguage();
  renderCornerPickers();
  applyFont();
  applyThemeAndColors();
  renderPlaylistSelect();
  renderBackground();
  renderLogo();
  renderSearch();
  renderFeatureVisibility();
  renderAllShortcuts();
  renderSettingsButton();
  applyFavicon();
  syncForm();
  positionFloatingButtons();
  applySettingsPaneWidth();
  initCollapsibleSections();
  ensureRandomStockPhoto();
  els.body.classList.remove("preload");
  focusSearchOnBoot();
  if (!didWire) {
    wireEvents();
    didWire = true;
  }
  saveConfig();
}

function focusSearchOnBoot() {
  if (!config.features.search || !els.searchInput || els.searchInput.disabled || didAutoFocusSearch) {
    return;
  }

  const tryFocus = () => {
    const active = document.activeElement;
    const canStealFocus = active === null || active === document.body || active === document.documentElement;
    if (!canStealFocus) {
      return;
    }
    els.searchInput.focus({ preventScroll: true });
    if (document.activeElement === els.searchInput) {
      els.searchInput.select();
      didAutoFocusSearch = true;
    }
  };

  requestAnimationFrame(tryFocus);
  setTimeout(tryFocus, 80);
  setTimeout(tryFocus, 220);
}

function rotatePlaylistSelectionOnBoot() {
  if (config.background.type !== "playlist") {
    return;
  }

  const items = config.background.playlist;
  if (!Array.isArray(items) || items.length === 0) {
    config.background.playlistSelectedId = "";
    return;
  }

  const currentId = config.background.playlistSelectedId;
  const validCurrent = items.some((item) => item.id === currentId);

  if (items.length === 1) {
    config.background.playlistSelectedId = items[0].id;
    return;
  }

  const candidates = validCurrent
    ? items.filter((item) => item.id !== currentId)
    : items;
  const pick = candidates[Math.floor(Math.random() * candidates.length)] || items[0];
  config.background.playlistSelectedId = pick.id;
}

function sanitizeConfig() {
  const hadBackgroundPositionMode = Boolean(
    config
    && typeof config === "object"
    && config.background
    && Object.prototype.hasOwnProperty.call(config.background, "positionMode")
  );
  config = deepMerge(structuredClone(defaultConfig), config);
  config.tabTitle = String(config.tabTitle || "").trim() || defaultConfig.tabTitle;
  if (!Array.isArray(config.shortcuts.main)) {
    config.shortcuts.main = [];
  }
  if (!Array.isArray(config.shortcuts.apps)) {
    config.shortcuts.apps = [];
  }
  if (!Array.isArray(config.background.gradientColors) || config.background.gradientColors.length < 2) {
    config.background.gradientColors = ["#365b9f", "#0f1b2f"];
  }
  if (!Array.isArray(config.background.playlist)) {
    config.background.playlist = [];
  }
  if (typeof config.background.randomCache !== "object" || config.background.randomCache === null) {
    config.background.randomCache = {};
  }
  if (!config.background.randomCurrentPhoto || typeof config.background.randomCurrentPhoto !== "object") {
    config.background.randomCurrentPhoto = null;
  }
  migrateBackgroundPositionModel(hadBackgroundPositionMode);
  config.background.randomCategory = normalizeRandomCategory(config.background.randomCategory);
  if (typeof config.features.logo !== "boolean") {
    config.features.logo = true;
  }
  config.theme.componentAlpha = clamp(config.theme.componentAlpha, 0, 100);
  config.layout.appsColumns = clamp(config.layout.appsColumns, 2, 8);
  config.layout.mainColumns = clamp(config.layout.mainColumns, 1, 12);
  config.layout.shortcutTileSize = clamp(config.layout.shortcutTileSize, 72, 180);
  config.shortcuts.main = config.shortcuts.main.map((shortcut) => sanitizeShortcut(shortcut));
  config.shortcuts.apps = config.shortcuts.apps.map((shortcut) => sanitizeShortcut(shortcut));
}

function migrateBackgroundPositionModel(hadBackgroundPositionMode) {
  if (hadBackgroundPositionMode) {
    return;
  }

  config.background.posX = Number(config.background.posX || 50) - 50;
  config.background.posY = Number(config.background.posY || 50) - 50;

  if (Array.isArray(config.background.playlist)) {
    config.background.playlist = config.background.playlist.map((item) => ({
      ...item,
      posX: Number(item?.posX || 50) - 50,
      posY: Number(item?.posY || 50) - 50
    }));
  }

  config.background.positionMode = "offset";
}

function sanitizeShortcut(shortcut) {
  const merged = deepMerge(shortcutFactory("", ""), shortcut || {});
  const allowedModes = new Set(["favicon", "custom", "badge", "fontawesome", "none"]);
  if (!allowedModes.has(merged.iconMode)) {
    merged.iconMode = "favicon";
  }
  merged.faClass = String(merged.faClass || "").trim();
  merged.faColor1 = normalizeHexColor(merged.faColor1, "#74b1ff");
  merged.faColor2 = String(merged.faColor2 || "").trim();
  return merged;
}

function enforceAddingModeForEmptyShortcuts() {
  if (config.shortcuts.main.length === 0 && config.shortcuts.apps.length === 0) {
    config.layout.addingMode = true;
  }
}

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : structuredClone(defaultConfig);
  } catch {
    return structuredClone(defaultConfig);
  }
}

function saveConfig() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    return true;
  } catch {
    console.error("Failed to save settings. Stored data may exceed browser localStorage quota.");
    if (!didWarnStorageQuota) {
      didWarnStorageQuota = true;
      alert("Storage limit reached. Large uploaded images may not persist. Try smaller/compressed images or remove some saved media.");
    }
    return false;
  }
}

function deepMerge(base, extra) {
  if (Array.isArray(base)) {
    return Array.isArray(extra) ? extra : base;
  }
  if (typeof base !== "object" || base === null) {
    return extra ?? base;
  }
  const out = { ...base };
  for (const key of Object.keys(base)) {
    out[key] = deepMerge(base[key], extra?.[key]);
  }
  for (const key of Object.keys(extra || {})) {
    if (!(key in out)) {
      out[key] = extra[key];
    }
  }
  return out;
}

function t(key) {
  const dict = I18N[config.language] || I18N["en-US"];
  return dict[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = config.language;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

function applyTabTitle() {
  document.title = String(config.tabTitle || "").trim() || defaultConfig.tabTitle;
}

function applyFont() {
  if (config.font.mode === "google" && config.font.googleCssUrl && config.font.googleFamily) {
    els.userGoogleFont.href = config.font.googleCssUrl;
    els.userGoogleFont.disabled = false;
    setCssVar("--font", `"${config.font.googleFamily}", ${config.font.systemFamily || "sans-serif"}`);
  } else {
    els.userGoogleFont.disabled = true;
    setCssVar("--font", config.font.systemFamily || "Segoe UI, sans-serif");
  }
  setCssVar("--font-ui-size", `${clamp(config.font.uiSize, 10, 24)}px`);
  setCssVar("--font-ui-weight", String(clamp(config.font.uiWeight, 300, 800)));
  setCssVar("--font-search-size", `${clamp(config.font.searchSize, 12, 34)}px`);
  setCssVar("--font-search-weight", String(clamp(config.font.searchWeight, 300, 900)));
  setCssVar("--font-shortcut-size", `${clamp(config.font.shortcutSize, 10, 24)}px`);
  setCssVar("--font-shortcut-weight", String(clamp(config.font.shortcutWeight, 300, 900)));
  setCssVar("--font-settings-weight", String(clamp(config.font.settingsWeight, 300, 900)));
  setCssVar("--font-search", config.font.searchFamily || "var(--font)");
  setCssVar("--font-shortcut", config.font.shortcutFamily || "var(--font)");
  setCssVar("--font-settings", config.font.settingsFamily || "var(--font)");
}

function resolveThemePalette() {
  const systemIsLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (config.theme.mode === "custom") {
    return config.theme.custom;
  }
  if (config.theme.mode === "system") {
    return systemIsLight ? config.theme.presets.light : config.theme.presets.dark;
  }
  return config.theme.mode === "light" ? config.theme.presets.light : config.theme.presets.dark;
}

function applyThemeAndColors() {
  const palette = resolveThemePalette();
  const isLightSurface = isHexColorLight(palette.component);
  const alpha = clamp(config.theme.componentAlpha, 0, 100) / 100;
  const strongAlpha = Math.min(alpha + 0.22, 0.95);
  setCssVar("--surface", hexToRgba(palette.component, alpha));
  setCssVar("--surface-strong", hexToRgba(palette.component, strongAlpha));
  setCssVar("--surface-border", hexToRgba(palette.border, 0.65));
  setCssVar("--surface-text", palette.text);
  setCssVar("--surface-muted", hexToRgba(palette.text, 0.64));
  setCssVar("--select-option-bg", isLightSurface ? "#f3f7ff" : "#101a2b");
  setCssVar("--select-option-text", isLightSurface ? "#1a2a44" : "#eef3ff");
  setCssVar("--select-option-selected-bg", isLightSurface ? "#2a63cd" : "#2f6ee5");
  setCssVar("--select-option-selected-text", "#ffffff");
  setCssVar("--select-option-hover-bg", isLightSurface ? "#1f4ca6" : "#1f4ca6");
  setCssVar("--select-chevron", isLightSurface ? "#294164" : "#d9e4ff");
}

function renderBackground() {
  const bg = config.background;
  updateGradientPreview();
  els.body.classList.toggle("solid-background", bg.type === "color");
  els.body.classList.toggle("gradient-background", bg.type === "gradient");

  if (bg.type === "color") {
    els.backgroundLayer.style.backgroundColor = bg.color;
    els.backgroundLayer.style.backgroundImage = "none";
    els.backgroundLayer.style.backgroundSize = "cover";
    els.backgroundLayer.style.backgroundPosition = "50% 50%";
    els.backgroundLayer.style.backgroundRepeat = "no-repeat";
    els.backgroundLayer.style.filter = "none";
    els.backgroundLayer.style.transform = "none";
    renderUnsplashAttribution(null);
    return;
  }

  if (bg.type === "gradient") {
    const stops = bg.gradientColors.map((c) => c.trim()).filter(Boolean);
    els.backgroundLayer.style.backgroundColor = "#0f1b2f";
    els.backgroundLayer.style.backgroundImage = `linear-gradient(${bg.gradientDegree}deg, ${stops.join(", ")})`;
    els.backgroundLayer.style.backgroundSize = "cover";
    els.backgroundLayer.style.backgroundPosition = "50% 50%";
    els.backgroundLayer.style.backgroundRepeat = "no-repeat";
    els.backgroundLayer.style.filter = `blur(${bg.gradientBlur || 0}px)`;
    els.backgroundLayer.style.transform = (bg.gradientBlur || 0) > 0 ? `scale(${1 + (bg.gradientBlur || 0) / 120})` : "none";
    renderUnsplashAttribution(null);
    return;
  }

  if (bg.type === "image") {
    const scale = Number(bg.scale) || 100;
    const tileSize = Math.max(Math.abs(scale), 1);
    els.backgroundLayer.style.backgroundColor = "#0f1b2f";
    els.backgroundLayer.style.backgroundImage = bg.imageData ? `url('${escapeSingleQuote(bg.imageData)}')` : "none";
    els.backgroundLayer.style.backgroundSize = `${tileSize}% auto`;
    els.backgroundLayer.style.backgroundPosition = `${50 + Number(bg.posX || 0)}% ${50 + Number(bg.posY || 0)}%`;
    els.backgroundLayer.style.backgroundRepeat = "repeat";
    els.backgroundLayer.style.filter = "none";
    els.backgroundLayer.style.transform = "none";
    renderUnsplashAttribution(null);
    return;
  }

  if (bg.type === "playlist") {
    const item = getSelectedPlaylistItem();
    const itemScale = item?.scale ?? 100;
    const itemPosX = item?.posX ?? 0;
    const itemPosY = item?.posY ?? 0;
    els.backgroundLayer.style.backgroundColor = "#0f1b2f";
    els.backgroundLayer.style.backgroundImage = item ? `url('${escapeSingleQuote(item.data)}')` : "none";
    const tileSize = Math.max(Math.abs(Number(itemScale) || 100), 1);
    els.backgroundLayer.style.backgroundSize = `${tileSize}% auto`;
    els.backgroundLayer.style.backgroundPosition = `${50 + Number(itemPosX)}% ${50 + Number(itemPosY)}%`;
    els.backgroundLayer.style.backgroundRepeat = "repeat";
    els.backgroundLayer.style.filter = "none";
    els.backgroundLayer.style.transform = "none";
    renderUnsplashAttribution(null);
    return;
  }

  const randomUrl = bg.randomCurrentPhoto?.imageUrl || "";
  els.backgroundLayer.style.backgroundColor = "#0f1b2f";
  els.backgroundLayer.style.backgroundImage = randomUrl ? `url('${escapeSingleQuote(randomUrl)}')` : "none";
  els.backgroundLayer.style.backgroundSize = "cover";
  els.backgroundLayer.style.backgroundPosition = "50% 50%";
  els.backgroundLayer.style.backgroundRepeat = "no-repeat";
  els.backgroundLayer.style.filter = "none";
  els.backgroundLayer.style.transform = "none";
  renderUnsplashAttribution(bg.randomCurrentPhoto);
}

function renderLogo() {
  const show = config.features.logo && config.logo.enabled && Boolean(config.logo.imageData);
  els.logoSection.classList.toggle("hidden", !show);
  if (!show) {
    return;
  }
  els.logoImage.src = config.logo.imageData;
  els.logoImage.style.width = `${config.logo.width}px`;
  els.logoSection.style.marginTop = `${config.logo.topOffset}px`;
}

function getActiveEngine() {
  if (config.searchEngine.preset === "custom") {
    return {
      name: config.searchEngine.customName || "Custom",
      searchUrl: config.searchEngine.customUrl || "https://example.com/search?q={query}",
      presetKey: "custom"
    };
  }
  const preset = ENGINE_PRESETS[config.searchEngine.preset] || ENGINE_PRESETS.duckduckgo;
  return { name: preset.name, searchUrl: preset.searchUrl, presetKey: config.searchEngine.preset };
}

function renderSearch() {
  const engine = getActiveEngine();
  els.searchInput.placeholder = t("searchPlaceholder").replace("{engine}", engine.name);
  const iconSrc = resolveSearchIcon(engine);
  const hideIcon = !iconSrc || config.searchEngine.iconMode === "none";
  els.searchIcon.classList.toggle("hidden", hideIcon);
  els.searchForm.classList.toggle("no-icon", hideIcon);
  if (!hideIcon) {
    els.searchIcon.src = iconSrc;
    els.searchIcon.style.transform = `scale(${config.searchEngine.iconScale / 100})`;
  }
  els.customEngineFields.classList.toggle("hidden", config.searchEngine.preset !== "custom");
  els.engineIconUploadWrap.classList.toggle("hidden", config.searchEngine.iconMode !== "custom");
  els.engineIconScaleWrap.classList.toggle("hidden", config.searchEngine.iconMode !== "custom");
  clearSearchSuggestions();
}

function normalizeSuggestionText(value) {
  const normalized = String(value || "").normalize("NFKC").replace(/\s+/g, " ").trim();
  return normalized.replace(/^[`´'"\u0300-\u036f]+/u, "").trim();
}

function cleanSuggestionList(values) {
  return (values || []).map((value) => normalizeSuggestionText(value)).filter(Boolean);
}

function getSearchSuggestRequest(engineKey, query) {
  const q = encodeURIComponent(query);
  if (engineKey === "duckduckgo") {
    return {
      url: `https://duckduckgo.com/ac/?q=${q}&type=list`,
      parse: (payload) => cleanSuggestionList(Array.isArray(payload) ? payload.map((item) => String(item?.phrase || "").trim()) : [])
    };
  }
  if (engineKey === "google") {
    return {
      url: `https://suggestqueries.google.com/complete/search?client=firefox&q=${q}`,
      parse: (payload) => cleanSuggestionList(Array.isArray(payload?.[1]) ? payload[1].map((item) => String(item || "").trim()) : [])
    };
  }
  if (engineKey === "bing") {
    return {
      url: `https://api.bing.com/osjson.aspx?query=${q}`,
      parse: (payload) => cleanSuggestionList(Array.isArray(payload?.[1]) ? payload[1].map((item) => String(item || "").trim()) : [])
    };
  }

  return null;
}

function clearSearchSuggestions() {
  if (suggestionsDebounceTimer) {
    clearTimeout(suggestionsDebounceTimer);
    suggestionsDebounceTimer = 0;
  }
  if (suggestionsBlurTimer) {
    clearTimeout(suggestionsBlurTimer);
    suggestionsBlurTimer = 0;
  }
  if (suggestionsAbortController) {
    suggestionsAbortController.abort();
    suggestionsAbortController = null;
  }
  if (suggestionsJsonpCleanup) {
    suggestionsJsonpCleanup();
    suggestionsJsonpCleanup = null;
  }
  if (els.searchSuggestions) {
    els.searchSuggestions.innerHTML = "";
    els.searchSuggestions.classList.add("hidden");
    els.searchSuggestions.setAttribute("aria-hidden", "true");
  }
  searchSuggestionItems = [];
  searchSuggestionActiveIndex = -1;
}

function renderSearchSuggestions(suggestions) {
  if (!els.searchSuggestions) {
    return;
  }
  const unique = Array.from(new Set((suggestions || []).filter(Boolean))).slice(0, 8);
  if (unique.length === 0) {
    els.searchSuggestions.innerHTML = "";
    els.searchSuggestions.classList.add("hidden");
    els.searchSuggestions.setAttribute("aria-hidden", "true");
    searchSuggestionItems = [];
    searchSuggestionActiveIndex = -1;
    return;
  }

  els.searchSuggestions.innerHTML = unique.map((item, index) => `<button class="searchSuggestionItem" type="button" role="option" data-index="${index}" data-value="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("");
  els.searchSuggestions.classList.remove("hidden");
  els.searchSuggestions.setAttribute("aria-hidden", "false");
  searchSuggestionItems = Array.from(els.searchSuggestions.querySelectorAll(".searchSuggestionItem"));
  searchSuggestionActiveIndex = -1;
}

function setActiveSearchSuggestion(index) {
  if (!searchSuggestionItems.length) {
    searchSuggestionActiveIndex = -1;
    return;
  }

  const next = ((index % searchSuggestionItems.length) + searchSuggestionItems.length) % searchSuggestionItems.length;
  searchSuggestionActiveIndex = next;

  searchSuggestionItems.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === next);
  });

  const activeItem = searchSuggestionItems[next];
  if (activeItem) {
    els.searchInput.value = String(activeItem.dataset.value || "");
    activeItem.scrollIntoView({ block: "nearest" });
  }
}

function isSearchSuggestionsOpen() {
  return !els.searchSuggestions.classList.contains("hidden") && searchSuggestionItems.length > 0;
}

function applySearchSuggestion(value, submitNow) {
  const clean = String(value || "").trim();
  if (!clean) {
    return;
  }

  els.searchInput.value = clean;
  clearSearchSuggestions();
  if (submitNow) {
    els.searchForm.requestSubmit();
  }
}

async function fetchSearchSuggestions(query) {
  const clean = String(query || "").trim();
  if (clean.length < 2) {
    clearSearchSuggestions();
    return;
  }

  const engine = getActiveEngine();
  const request = getSearchSuggestRequest(engine.presetKey, clean);
  const token = ++suggestionsRequestToken;

  if (suggestionsAbortController) {
    suggestionsAbortController.abort();
  }

  if (request) {
    suggestionsAbortController = new AbortController();
    try {
      const response = await fetch(request.url, {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        signal: suggestionsAbortController.signal
      });
      if (!response.ok) {
        throw new Error(`Suggest failed (${response.status})`);
      }
      const payload = await response.json();
      if (token !== suggestionsRequestToken) {
        return;
      }
      const parsed = request.parse(payload);
      if (parsed.length > 0) {
        renderSearchSuggestions(parsed);
        return;
      }
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  const fallback = await fetchGoogleSuggestionsJsonp(clean);
  if (token !== suggestionsRequestToken) {
    return;
  }
  renderSearchSuggestions(fallback);
}

function fetchGoogleSuggestionsJsonp(query) {
  const q = encodeURIComponent(query);
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${q}`;
  return fetchJsonp(url, (payload) => cleanSuggestionList(Array.isArray(payload?.[1]) ? payload[1].map((item) => String(item || "").trim()) : []));
}

function fetchJsonp(url, parsePayload) {
  return new Promise((resolve) => {
    if (suggestionsJsonpCleanup) {
      suggestionsJsonpCleanup();
      suggestionsJsonpCleanup = null;
    }

    const callbackName = `__ntcSuggestCb_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const script = document.createElement("script");
    let done = false;
    const timeoutId = window.setTimeout(() => {
      finish([]);
    }, 4000);

    function cleanup() {
      window.clearTimeout(timeoutId);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      try {
        delete window[callbackName];
      } catch {
        window[callbackName] = undefined;
      }
      suggestionsJsonpCleanup = null;
    }

    function finish(data) {
      if (done) {
        return;
      }
      done = true;
      cleanup();
      resolve(Array.isArray(data) ? data : []);
    }

    window[callbackName] = (payload) => {
      try {
        finish(parsePayload(payload));
      } catch {
        finish([]);
      }
    };

    script.async = true;
    script.onerror = () => finish([]);
    script.src = `${url}&callback=${encodeURIComponent(callbackName)}`;
    suggestionsJsonpCleanup = () => finish([]);
    document.head.appendChild(script);
  });
}

function scheduleSearchSuggestions() {
  if (suggestionsDebounceTimer) {
    clearTimeout(suggestionsDebounceTimer);
  }
  suggestionsDebounceTimer = window.setTimeout(() => {
    suggestionsDebounceTimer = 0;
    fetchSearchSuggestions(els.searchInput.value);
  }, 160);
}

function resolveSearchIcon(engine) {
  if (config.searchEngine.iconMode === "none") {
    return "";
  }
  if (config.searchEngine.iconMode === "custom") {
    return config.searchEngine.customIconData || fallbackIcon();
  }
  if (config.searchEngine.iconMode === "favicon") {
    return getFavicon(engine.searchUrl) || fallbackIcon();
  }
  if (engine.presetKey === "custom") {
    return getFavicon(engine.searchUrl) || fallbackIcon();
  }
  return ENGINE_PRESETS[engine.presetKey]?.svg || fallbackIcon();
}

function renderFeatureVisibility() {
  els.searchSection.classList.toggle("hidden", !config.features.search);
  els.mainShortcutsSection.classList.toggle("hidden", !config.features.mainShortcuts);
  els.appsToggle.classList.toggle("hidden", !config.features.appsMenu);
  els.logoSection.classList.toggle("hidden", !config.features.logo || !config.logo.enabled || !config.logo.imageData);
  const showShortcutsSection = config.features.mainShortcuts || config.features.appsMenu;
  if (els.shortcutStyleSection) {
    els.shortcutStyleSection.classList.toggle("hidden", !showShortcutsSection);
  }

  document.querySelectorAll("[data-setting-for]").forEach((node) => {
    const feature = node.getAttribute("data-setting-for");
    node.classList.toggle("hidden", config.features[feature] === false);
  });

  if (!config.features.appsMenu) {
    closeAppsMenu();
  }
}

function renderMainShortcuts() {
  els.mainShortcutsGrid.innerHTML = "";
  const visibleShortcuts = config.shortcuts.main;
  const showAddTile = config.layout.addingMode;
  const visibleTilesCount = visibleShortcuts.length + (showAddTile ? 1 : 0);
  const effectiveColumns = Math.max(1, Math.min(config.layout.mainColumns, visibleTilesCount || config.layout.mainColumns));
  els.mainShortcutsGrid.style.setProperty("--main-shortcut-columns", String(effectiveColumns));
  els.mainShortcutsGrid.style.setProperty("--main-shortcut-size", `${config.layout.shortcutTileSize}px`);
  els.appsGrid.style.setProperty("--main-shortcut-size", `${config.layout.shortcutTileSize}px`);
  for (const shortcut of visibleShortcuts) {
    els.mainShortcutsGrid.appendChild(buildShortcutTile(shortcut, "main", config.shortcutStyle.mainShowText));
  }
  if (showAddTile) {
    els.mainShortcutsGrid.appendChild(buildAddTile("main"));
  }
}

function renderAppsShortcuts() {
  els.appsGrid.innerHTML = "";
  els.appsGrid.style.setProperty("--apps-columns", String(config.layout.appsColumns));
  els.appsGrid.style.setProperty("--main-shortcut-size", `${config.layout.shortcutTileSize}px`);
  for (const shortcut of config.shortcuts.apps) {
    els.appsGrid.appendChild(buildShortcutTile(shortcut, "apps", config.shortcutStyle.appsShowText));
  }
  if (config.layout.addingMode) {
    els.appsGrid.appendChild(buildAddTile("apps"));
  }
}

function renderAllShortcuts() {
  renderMainShortcuts();
  renderAppsShortcuts();
}

function buildShortcutTile(shortcut, listName, showTextSetting) {
  const tile = document.createElement("div");
  tile.className = "shortcutTile";
  tile.draggable = true;
  tile.dataset.id = shortcut.id;
  tile.dataset.list = listName;
  tile.title = shortcut.name;

  const iconSrc = resolveShortcutIcon(shortcut);
  if (shortcut.iconMode === "badge") {
    const badge = document.createElement("div");
    badge.className = "shortcutBadge";
    badge.textContent = String(shortcut.badgeText || shortcut.name.slice(0, 2)).slice(0, 2).toUpperCase();
    const c1 = shortcut.badgeColor1 || "#4f7cff";
    const c2 = shortcut.badgeColor2 || "";
    badge.style.background = c2 ? `linear-gradient(135deg, ${c1}, ${c2})` : c1;
    tile.appendChild(badge);
  } else if (shortcut.iconMode === "fontawesome") {
    const faIcon = document.createElement("i");
    const safeClass = buildFaClassList(shortcut.faClass);
    faIcon.className = `faShortcutIcon ${safeClass}`;
    const c1 = normalizeHexColor(shortcut.faColor1, "#74b1ff");
    const c2Raw = String(shortcut.faColor2 || "").trim();
    if (c2Raw) {
      const c2 = normalizeHexColor(c2Raw, c1);
      faIcon.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
      faIcon.style.webkitBackgroundClip = "text";
      faIcon.style.backgroundClip = "text";
      faIcon.style.color = "transparent";
      faIcon.style.webkitTextFillColor = "transparent";
    } else {
      faIcon.style.color = c1;
    }
    faIcon.style.transform = `scale(${(shortcut.iconScale ?? 100) / 100})`;
    tile.appendChild(faIcon);
  } else {
    const icon = document.createElement("img");
    if (!iconSrc) {
      icon.classList.add("hidden");
    } else {
      icon.src = iconSrc;
      icon.style.transform = `scale(${(shortcut.iconScale ?? 100) / 100})`;
    }
    tile.appendChild(icon);
  }

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = shortcut.name;
  const hasVisualIcon = shortcut.iconMode === "badge" || shortcut.iconMode === "fontawesome" || Boolean(iconSrc);
  if (!showTextSetting && hasVisualIcon) {
    title.classList.add("hidden");
  }
  tile.appendChild(title);

  const menuWrap = document.createElement("div");
  menuWrap.className = "tileMenuWrap";
  const menuButton = document.createElement("button");
  menuButton.className = "tileMenuButton material-symbols-outlined";
  menuButton.type = "button";
  menuButton.textContent = "more_vert";

  const menu = document.createElement("div");
  menu.className = "tileMenu";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = t("edit");
  editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeAllTileMenus();
    openShortcutModal("edit", listName, shortcut.id);
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = t("remove");
  removeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    removeShortcut(listName, shortcut.id);
  });

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("open");
  });

  menu.appendChild(editButton);
  menu.appendChild(removeButton);
  menuWrap.appendChild(menuButton);
  menuWrap.appendChild(menu);
  tile.appendChild(menuWrap);

  tile.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      return;
    }
    openShortcutUrl(shortcut);
  });

  addDragHandlers(tile, listName);
  return tile;
}

function buildAddTile(listName) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "shortcutTile plusTile";
  tile.title = t("addShortcut");
  tile.textContent = "+";
  tile.addEventListener("click", () => openShortcutModal("add", listName, ""));
  return tile;
}

function resolveShortcutIcon(shortcut) {
  if (shortcut.iconMode === "none" || shortcut.iconMode === "badge" || shortcut.iconMode === "fontawesome") {
    return "";
  }
  if (shortcut.iconMode === "custom") {
    return shortcut.customIconData || getFavicon(shortcut.url, shortcut.faviconUrl);
  }
  return getFavicon(shortcut.url, shortcut.faviconUrl);
}

function renderSettingsButton() {
  const isProfile = config.settingsButton.style === "profile";
  els.profileImage.classList.toggle("hidden", !isProfile);
  els.settingsGear.classList.toggle("hidden", isProfile);
  els.profileUploadWrap.classList.toggle("hidden", !isProfile);
  els.profileScaleWrap.classList.toggle("hidden", !isProfile);

  if (isProfile) {
    els.profileImage.src = config.settingsButton.profileImageData || fallbackIcon();
    els.profileImage.style.transform = `scale(${config.settingsButton.profileScale / 100})`;
  }
}

function renderCornerPickers() {
  renderCornerPicker(els.appsCornerPicker, "appsCorner", config.layout.appsCorner);
  renderCornerPicker(els.settingsCornerPicker, "settingsCorner", config.layout.settingsCorner);
}

function renderCornerPicker(container, key, selected) {
  container.innerHTML = "";
  for (const corner of CORNERS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cornerBtn";
    btn.innerHTML = `<span class="material-symbols-outlined">${CORNER_ICONS[corner]}</span>`;
    btn.classList.toggle("active", corner === selected);
    btn.addEventListener("click", () => {
      config.layout[key] = corner;
      renderCornerPickers();
      positionFloatingButtons();
      saveConfig();
    });
    container.appendChild(btn);
  }
}

function renderPlaylistSelect() {
  const items = config.background.playlist;
  els.playlistSelect.innerHTML = "";
  if (!items.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "-";
    els.playlistSelect.appendChild(option);
    config.background.playlistSelectedId = "";
    return;
  }

  if (!items.some((x) => x.id === config.background.playlistSelectedId)) {
    config.background.playlistSelectedId = items[0].id;
  }

  for (const item of items) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    els.playlistSelect.appendChild(option);
  }
  els.playlistSelect.value = config.background.playlistSelectedId;
}

function getSelectedPlaylistItem() {
  return config.background.playlist.find((x) => x.id === config.background.playlistSelectedId) || null;
}

function syncForm() {
  els.languageSelect.value = config.language;
  if (els.tabName) {
    els.tabName.value = String(config.tabTitle || "");
  }
  els.addingMode.checked = config.layout.addingMode;
  els.enableSearch.checked = config.features.search;
  els.enableApps.checked = config.features.appsMenu;
  els.enableMainShortcuts.checked = config.features.mainShortcuts;
  els.enableLogo.checked = config.features.logo;

  els.fontMode.value = config.font.mode;
  els.systemFont.value = config.font.systemFamily;
  els.googleFontUrl.value = config.font.googleCssUrl;
  els.googleFontFamily.value = config.font.googleFamily;
  els.fontUiSize.value = String(config.font.uiSize);
  els.fontUiWeight.value = String(config.font.uiWeight);
  els.fontSearchSize.value = String(config.font.searchSize);
  els.fontSearchWeight.value = String(config.font.searchWeight);
  els.fontShortcutSize.value = String(config.font.shortcutSize);
  els.fontShortcutWeight.value = String(config.font.shortcutWeight);
  els.fontSettingsWeight.value = String(config.font.settingsWeight);
  els.searchFontFamily.value = config.font.searchFamily;
  els.shortcutFontFamily.value = config.font.shortcutFamily;
  els.settingsFontFamily.value = config.font.settingsFamily;

  els.themeMode.value = config.theme.mode;
  els.componentColor.value = config.theme.custom.component;
  if (els.componentColorHex) {
    els.componentColorHex.value = config.theme.custom.component;
  }
  setPairValue(els.componentOpacity, els.componentOpacityValue, config.theme.componentAlpha);
  els.componentTextColor.value = config.theme.custom.text;
  if (els.componentTextColorHex) {
    els.componentTextColorHex.value = config.theme.custom.text;
  }
  els.componentBorderColor.value = config.theme.custom.border;
  if (els.componentBorderColorHex) {
    els.componentBorderColorHex.value = config.theme.custom.border;
  }

  els.backgroundType.value = config.background.type;
  els.backgroundColor.value = config.background.color;
  if (els.backgroundColorHex) {
    els.backgroundColorHex.value = config.background.color;
  }
  els.gradientDegree.value = String(config.background.gradientDegree);
  els.gradientDegreeValue.value = String(config.background.gradientDegree);
  els.gradientColors.value = config.background.gradientColors.join(", ");
  updateGradientPreview();
  setPairValue(els.gradientBlur, els.gradientBlurValue, config.background.gradientBlur || 0);

  setPairValue(els.backgroundPosX, els.backgroundPosXValue, config.background.posX);
  setPairValue(els.backgroundPosY, els.backgroundPosYValue, config.background.posY);
  setPairValue(els.backgroundScale, els.backgroundScaleValue, config.background.scale);

  els.randomCategory.value = config.background.randomCategory;
  renderPlaylistSelect();
  const selected = getSelectedPlaylistItem();
  setPairValue(els.playlistPosX, els.playlistPosXValue, selected?.posX ?? 0);
  setPairValue(els.playlistPosY, els.playlistPosYValue, selected?.posY ?? 0);
  setPairValue(els.playlistScale, els.playlistScaleValue, selected?.scale ?? 100);

  els.showLogo.checked = config.logo.enabled;
  setPairValue(els.logoSize, els.logoSizeValue, config.logo.width);
  setPairValue(els.logoPosY, els.logoPosYValue, config.logo.topOffset);
  setPairValue(els.searchOffsetY, els.searchOffsetYValue, config.searchLayout.offsetY || 0);

  els.enginePreset.value = config.searchEngine.preset;
  els.customEngineName.value = config.searchEngine.customName;
  els.customEngineUrl.value = config.searchEngine.customUrl;
  els.engineIconMode.value = config.searchEngine.iconMode;
  setPairValue(els.engineIconScale, els.engineIconScaleValue, config.searchEngine.iconScale);

  els.appsColumns.value = String(config.layout.appsColumns);
  els.mainColumns.value = String(config.layout.mainColumns);
  els.shortcutTileSize.value = String(config.layout.shortcutTileSize);

  els.appsShowText.checked = config.shortcutStyle.appsShowText;
  els.mainShowText.checked = config.shortcutStyle.mainShowText;

  els.settingsButtonStyle.value = config.settingsButton.style;
  setPairValue(els.profileScale, els.profileScaleValue, config.settingsButton.profileScale);

  setCssVar("--search-offset-y", `${config.searchLayout.offsetY || 0}px`);

  updateBackgroundFieldVisibility();
  renderSearch();
  renderSettingsButton();
}

function setPairValue(range, number, value) {
  if (range) {
    range.value = String(value);
  }
  if (number) {
    number.value = String(value);
  }
}

function parseGradientStops(text, fallbackStops) {
  const parsed = String(text || "").split(",").map((x) => x.trim()).filter(Boolean);
  return parsed.length >= 2 ? parsed : fallbackStops;
}

function updateGradientPreview(rawColors) {
  if (!els.gradientPreview) {
    return;
  }
  const degree = Number(config.background.gradientDegree) || 0;
  const fallback = Array.isArray(config.background.gradientColors) && config.background.gradientColors.length >= 2
    ? config.background.gradientColors
    : ["#365b9f", "#0f1b2f"];
  const stops = parseGradientStops(rawColors ?? "", fallback);
  els.gradientPreview.style.background = `linear-gradient(${degree}deg, ${stops.join(", ")})`;
}

function bindRangePair(range, number, onChange) {
  const apply = (source) => {
    const value = Number(source.value);
    range.value = String(value);
    number.value = String(value);
    onChange(value, true);
  };
  range.addEventListener("input", () => apply(range));
  number.addEventListener("input", () => apply(number));
  range.addEventListener("change", () => onChange(Number(range.value), false));
  number.addEventListener("change", () => onChange(Number(number.value), false));
}

function bindColorHexPair(colorInput, hexInput, onChange) {
  if (!colorInput || !hexInput) {
    return;
  }

  const apply = (value) => {
    const normalized = normalizeHexColor(value, colorInput.value || "#000000");
    colorInput.value = normalized;
    hexInput.value = normalized;
    onChange(normalized);
  };

  colorInput.addEventListener("input", () => {
    hexInput.value = colorInput.value;
  });

  colorInput.addEventListener("change", () => {
    apply(colorInput.value);
  });

  hexInput.addEventListener("change", () => {
    apply(hexInput.value);
  });

  hexInput.addEventListener("blur", () => {
    apply(hexInput.value);
  });
}

function normalizeHexColor(value, fallback) {
  const clean = String(value || "").trim();
  const full = clean.match(/^#([0-9a-fA-F]{6})$/);
  if (full) {
    return `#${full[1]}`;
  }

  const short = clean.match(/^#([0-9a-fA-F]{3})$/);
  if (short) {
    const raw = short[1];
    return `#${raw[0]}${raw[0]}${raw[1]}${raw[1]}${raw[2]}${raw[2]}`;
  }

  return String(fallback || "#000000");
}

function updateBackgroundFieldVisibility() {
  const type = config.background.type;
  document.querySelectorAll("[data-bg-field]").forEach((field) => {
    const k = field.getAttribute("data-bg-field");
    const show = (type === "color" && k === "color")
      || (type === "gradient" && (k === "gradientDegree" || k === "gradientColors" || k === "gradientBlur"))
      || (type === "image" && (k === "imageData" || k === "imagePositionX" || k === "imagePositionY" || k === "imageScale"))
      || (type === "random" && k === "randomCategory")
      || (type === "playlist" && ["playlistUpload", "playlistSelect", "playlistShuffle", "playlistRemove", "playlistPosX", "playlistPosY", "playlistScale"].includes(k));
    field.classList.toggle("hidden", !show);
  });
}

function initCollapsibleSections() {
  const sections = document.querySelectorAll(".settingsBody > section");
  sections.forEach((section) => {
    if (section.dataset.collapsibleReady === "1") {
      return;
    }
    const heading = section.querySelector("h3");
    if (!heading) {
      return;
    }

    section.classList.add("collapsibleSection");
    section.classList.add("collapsed");
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "sectionToggle";
    toggle.setAttribute("aria-expanded", "false");

    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.textContent = "expand_more";

    section.insertBefore(toggle, heading);
    toggle.appendChild(heading);
    toggle.appendChild(icon);

    const content = document.createElement("div");
    content.className = "sectionContent";
    while (toggle.nextSibling) {
      content.appendChild(toggle.nextSibling);
    }
    section.appendChild(content);

    toggle.addEventListener("click", () => {
      const collapsed = section.classList.toggle("collapsed");
      toggle.setAttribute("aria-expanded", String(!collapsed));
    });

    section.dataset.collapsibleReady = "1";
  });
}

function normalizeRandomCategory(category) {
  const value = String(category || "").toLowerCase();
  if (value === "urban") {
    return "city";
  }
  if (value === "technology") {
    return "tech";
  }
  if (value === "animals") {
    return "nature";
  }
  return RANDOM_STOCK_TERMS[value] ? value : "nature";
}

async function ensureRandomStockPhoto(options = {}) {
  if (config.background.type !== "random") {
    renderUnsplashAttribution(null);
    return;
  }
  if (randomFetchPromise) {
    await randomFetchPromise;
    return;
  }

  randomFetchPromise = (async () => {
    const category = normalizeRandomCategory(config.background.randomCategory);
    config.background.randomCategory = category;
    const cacheEntry = config.background.randomCache[category];
    const cachedPhotos = Array.isArray(cacheEntry?.photos) ? cacheEntry.photos : [];
    const stale = !cacheEntry || cachedPhotos.length < 20;

    let photos = cachedPhotos;
    if (stale || options.forceRefresh) {
      const fetched = await fetchUnsplashCategory(category);
      if (fetched.length) {
        photos = fetched;
        config.background.randomCache[category] = {
          fetchedAt: Date.now(),
          photos
        };
        saveConfig();
      }
    }

    if (!photos.length) {
      config.background.randomCurrentPhoto = null;
      renderBackground();
      return;
    }

    const currentId = config.background.randomCurrentPhoto?.id || "";
    const candidates = photos.filter((photo) => photo.id !== currentId);
    const pickFrom = candidates.length ? candidates : photos;
    const pick = pickFrom[Math.floor(Math.random() * pickFrom.length)] || photos[0];

    if (!pick) {
      return;
    }

    if (options.forcePick || config.background.randomCurrentPhoto?.id !== pick.id) {
      config.background.randomCurrentPhoto = pick;
      triggerUnsplashDownload(pick);
      renderBackground();
      saveConfig();
    }
  })();

  try {
    await randomFetchPromise;
  } finally {
    randomFetchPromise = null;
  }
}

async function fetchUnsplashCategory(category) {
  const search = encodeURIComponent(RANDOM_STOCK_TERMS[category] || RANDOM_STOCK_TERMS.nature);
  const url = `https://api.unsplash.com/search/photos?page=1&per_page=30&orientation=landscape&query=${search}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        "Accept-Version": "v1"
      }
    });
    if (!response.ok) {
      return [];
    }
    const payload = await response.json();
    const list = Array.isArray(payload?.results) ? payload.results : [];
    return list.slice(0, 30).map((photo) => {
      const userName = photo?.user?.name || "Unknown";
      const userLink = `${photo?.user?.links?.html || "https://unsplash.com"}?utm_source=${UNSPLASH_REFERRAL}&utm_medium=referral`;
      const photoLink = `${photo?.links?.html || "https://unsplash.com"}?utm_source=${UNSPLASH_REFERRAL}&utm_medium=referral`;
      return {
        id: String(photo.id || crypto.randomUUID()),
        imageUrl: `${photo?.urls?.regular || photo?.urls?.full || ""}`,
        photographerName: userName,
        photographerUrl: userLink,
        photoUrl: photoLink,
        downloadLocation: String(photo?.links?.download_location || "")
      };
    }).filter((photo) => Boolean(photo.imageUrl));
  } catch {
    return [];
  }
}

function triggerUnsplashDownload(photo) {
  if (!photo?.downloadLocation || !photo?.id) {
    return;
  }
  if (lastUnsplashDownloadId === photo.id) {
    return;
  }
  lastUnsplashDownloadId = photo.id;
  const sep = photo.downloadLocation.includes("?") ? "&" : "?";
  const url = `${photo.downloadLocation}${sep}client_id=${encodeURIComponent(UNSPLASH_ACCESS_KEY)}`;
  fetch(url).catch(() => {});
}

function renderUnsplashAttribution(photo) {
  if (config.background.type !== "random" || !photo || !els.unsplashAttribution || !els.unsplashAttributionText) {
    if (els.unsplashAttribution) {
      els.unsplashAttribution.classList.add("hidden");
    }
    return;
  }

  const name = escapeHtml(photo.photographerName || "Unknown");
  const photographerUrl = escapeHtml(photo.photographerUrl || "https://unsplash.com");
  const photoUrl = escapeHtml(photo.photoUrl || "https://unsplash.com");
  els.unsplashAttributionText.innerHTML = `Photo by <a href="${photographerUrl}" target="_blank" rel="noopener noreferrer">${name}</a> on <a href="${photoUrl}" target="_blank" rel="noopener noreferrer">Unsplash</a>`;
  els.unsplashAttribution.classList.remove("hidden");
}

function positionFloatingButtons() {
  const apps = config.layout.appsCorner;
  const settings = config.layout.settingsCorner;
  const overlap = apps === settings;
  placeCorner(els.settingsToggle, settings, 16);
  if (overlap) {
    placeCornerSideBySide(els.appsToggle, apps, 16, 56);
  } else {
    placeCorner(els.appsToggle, apps, 16);
  }
  placeCorner(els.appsMenu, apps, apps.startsWith("top") ? 72 : 16);
}

function placeCornerSideBySide(el, corner, offset, spread) {
  const [vertical, horizontal] = corner.split("-");
  el.style.top = "";
  el.style.right = "";
  el.style.bottom = "";
  el.style.left = "";
  el.style[vertical] = `${offset}px`;
  if (horizontal === "right") {
    el.style.right = `${16 + spread}px`;
  } else {
    el.style.left = `${16 + spread}px`;
  }
}

function placeCorner(el, corner, offset) {
  const [vertical, horizontal] = corner.split("-");
  el.style.top = "";
  el.style.right = "";
  el.style.bottom = "";
  el.style.left = "";
  el.style[vertical] = `${offset}px`;
  el.style[horizontal] = "16px";
}

function applySettingsPaneWidth() {
  const maxAllowed = Math.min(760, window.innerWidth - 8);
  config.settingsPane.width = clamp(config.settingsPane.width, 280, maxAllowed);
  els.settingsPane.style.width = `${config.settingsPane.width}px`;
}

function applyFavicon() {
  if (config.customFaviconData) {
    els.customFavicon.href = config.customFaviconData;
    return;
  }
  els.customFavicon.href = "data:,";
}

function wireEvents() {
  els.settingsToggle.addEventListener("click", () => {
    els.settingsPane.classList.toggle("hidden");
    els.settingsPane.setAttribute("aria-hidden", String(els.settingsPane.classList.contains("hidden")));
  });
  els.closeSettings.addEventListener("click", () => {
    els.settingsPane.classList.add("hidden");
    els.settingsPane.setAttribute("aria-hidden", "true");
  });

  els.appsToggle.addEventListener("click", () => {
    if (!config.features.appsMenu) {
      return;
    }
    els.appsMenu.classList.toggle("hidden");
    els.appsMenu.setAttribute("aria-hidden", String(els.appsMenu.classList.contains("hidden")));
  });

  document.addEventListener("click", (event) => {
    closeAllTileMenus();
    if (!els.appsMenu.contains(event.target) && !els.appsToggle.contains(event.target)) {
      closeAppsMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAppsMenu();
      closeSettingsPane();
      closeShortcutModal();
    }
  });

  els.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = els.searchInput.value.trim();
    if (!value) {
      return;
    }
    if (isDirectAddress(value)) {
      window.location.href = normalizeUrl(value);
      return;
    }
    const engine = getActiveEngine();
    const url = engine.searchUrl.includes("{query}") ? engine.searchUrl.replace("{query}", encodeURIComponent(value)) : `${engine.searchUrl}${encodeURIComponent(value)}`;
    window.location.href = url;
  });

  els.searchInput.addEventListener("input", () => {
    searchSuggestionActiveIndex = -1;
    scheduleSearchSuggestions();
  });

  els.searchInput.addEventListener("focus", () => {
    if (suggestionsBlurTimer) {
      clearTimeout(suggestionsBlurTimer);
      suggestionsBlurTimer = 0;
    }
    if (els.searchInput.value.trim().length >= 2) {
      scheduleSearchSuggestions();
    }
  });

  els.searchInput.addEventListener("blur", () => {
    suggestionsBlurTimer = window.setTimeout(() => {
      clearSearchSuggestions();
    }, 130);
  });

  els.searchInput.addEventListener("keydown", (event) => {
    if (!isSearchSuggestionsOpen()) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveSearchSuggestion(searchSuggestionActiveIndex + 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveSearchSuggestion(searchSuggestionActiveIndex - 1);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      clearSearchSuggestions();
      return;
    }

    if (event.key === "Enter" && searchSuggestionActiveIndex >= 0 && searchSuggestionItems[searchSuggestionActiveIndex]) {
      const value = String(searchSuggestionItems[searchSuggestionActiveIndex].dataset.value || "");
      applySearchSuggestion(value, false);
    }
  });

  els.searchSuggestions.addEventListener("mousedown", (event) => {
    const button = event.target.closest(".searchSuggestionItem");
    if (!button) {
      return;
    }
    event.preventDefault();
    const value = String(button.dataset.value || "");
    applySearchSuggestion(value, true);
  });

  els.languageSelect.addEventListener("change", () => {
    config.language = els.languageSelect.value;
    applyLanguage();
    applyTabTitle();
    renderSearch();
    renderAllShortcuts();
    saveConfig();
  });

  if (els.tabName) {
    els.tabName.addEventListener("change", () => {
      config.tabTitle = String(els.tabName.value || "").trim() || defaultConfig.tabTitle;
      applyTabTitle();
      saveConfig();
    });
  }

  els.addingMode.addEventListener("change", () => {
    config.layout.addingMode = els.addingMode.checked;
    renderAllShortcuts();
    saveConfig();
  });

  els.enableSearch.addEventListener("change", () => {
    config.features.search = els.enableSearch.checked;
    renderFeatureVisibility();
    saveConfig();
  });
  els.enableApps.addEventListener("change", () => {
    config.features.appsMenu = els.enableApps.checked;
    renderFeatureVisibility();
    saveConfig();
  });
  els.enableMainShortcuts.addEventListener("change", () => {
    config.features.mainShortcuts = els.enableMainShortcuts.checked;
    renderFeatureVisibility();
    saveConfig();
  });
  els.enableLogo.addEventListener("change", () => {
    config.features.logo = els.enableLogo.checked;
    renderFeatureVisibility();
    saveConfig();
  });

  els.fontMode.addEventListener("change", () => {
    config.font.mode = els.fontMode.value;
    applyFont();
    saveConfig();
  });

  [els.systemFont, els.googleFontUrl, els.googleFontFamily, els.fontUiSize, els.fontUiWeight, els.fontSearchSize, els.fontSearchWeight, els.fontShortcutSize, els.fontShortcutWeight, els.fontSettingsWeight, els.searchFontFamily, els.shortcutFontFamily, els.settingsFontFamily].forEach((el) => {
    el.addEventListener("change", () => {
      config.font.systemFamily = els.systemFont.value.trim() || "Segoe UI, sans-serif";
      config.font.googleCssUrl = els.googleFontUrl.value.trim();
      config.font.googleFamily = els.googleFontFamily.value.trim();
      config.font.uiSize = clamp(els.fontUiSize.value, 10, 24);
      config.font.uiWeight = clamp(els.fontUiWeight.value, 300, 800);
      config.font.searchSize = clamp(els.fontSearchSize.value, 12, 34);
      config.font.searchWeight = clamp(els.fontSearchWeight.value, 300, 900);
      config.font.shortcutSize = clamp(els.fontShortcutSize.value, 10, 24);
      config.font.shortcutWeight = clamp(els.fontShortcutWeight.value, 300, 900);
      config.font.settingsWeight = clamp(els.fontSettingsWeight.value, 300, 900);
      config.font.searchFamily = els.searchFontFamily.value.trim();
      config.font.shortcutFamily = els.shortcutFontFamily.value.trim();
      config.font.settingsFamily = els.settingsFontFamily.value.trim();
      applyFont();
      saveConfig();
    });
  });

  els.themeMode.addEventListener("change", () => {
    config.theme.mode = els.themeMode.value;
    applyThemeAndColors();
    saveConfig();
  });

  bindColorHexPair(els.componentColor, els.componentColorHex, (value) => {
    config.theme.custom.component = value;
    applyThemeAndColors();
    saveConfig();
  });

  bindColorHexPair(els.componentTextColor, els.componentTextColorHex, (value) => {
    config.theme.custom.text = value;
    applyThemeAndColors();
    saveConfig();
  });

  bindColorHexPair(els.componentBorderColor, els.componentBorderColorHex, (value) => {
    config.theme.custom.border = value;
    applyThemeAndColors();
    saveConfig();
  });

  bindRangePair(els.componentOpacity, els.componentOpacityValue, (value, realtime) => {
    config.theme.componentAlpha = clamp(value, 0, 100);
    applyThemeAndColors();
    if (!realtime) {
      saveConfig();
    }
  });

  els.backgroundType.addEventListener("change", () => {
    config.background.type = els.backgroundType.value;
    if (config.background.type === "random") {
      ensureRandomStockPhoto({ forcePick: true });
    } else {
      renderUnsplashAttribution(null);
    }
    updateBackgroundFieldVisibility();
    renderBackground();
    saveConfig();
  });

  bindColorHexPair(els.backgroundColor, els.backgroundColorHex, (value) => {
    config.background.color = value;
    renderBackground();
    saveConfig();
  });

  bindRangePair(els.gradientDegree, els.gradientDegreeValue, (value, realtime) => {
    config.background.gradientDegree = Number(value);
    updateGradientPreview();
    renderBackground();
    if (!realtime) {
      saveConfig();
    }
  });

  bindRangePair(els.gradientBlur, els.gradientBlurValue, (value, realtime) => {
    config.background.gradientBlur = Number(value);
    renderBackground();
    if (!realtime) {
      saveConfig();
    }
  });

  els.gradientColors.addEventListener("change", () => {
    config.background.gradientColors = parseGradientStops(els.gradientColors.value, ["#365b9f", "#0f1b2f"]);
    updateGradientPreview();
    renderBackground();
    saveConfig();
  });

  els.gradientColors.addEventListener("input", () => {
    updateGradientPreview(els.gradientColors.value);
  });

  els.backgroundImageUpload.addEventListener("change", async () => {
    const file = els.backgroundImageUpload.files?.[0];
    if (!file) {
      return;
    }
    config.background.imageData = await fileToDataUrl(file, { maxWidth: 2560, maxHeight: 1440, quality: 0.9, mimeType: "image/jpeg" });
    config.background.type = "image";
    syncForm();
    renderBackground();
    saveConfig();
  });

  els.randomCategory.addEventListener("change", () => {
    config.background.randomCategory = normalizeRandomCategory(els.randomCategory.value);
    if (config.background.type === "random") {
      ensureRandomStockPhoto({ forcePick: true });
    }
    saveConfig();
  });

  bindRangePair(els.backgroundPosX, els.backgroundPosXValue, (value, realtime) => {
    config.background.posX = Number(value);
    if (config.background.type === "image") {
      renderBackground();
    }
    if (!realtime) {
      saveConfig();
    }
  });
  bindRangePair(els.backgroundPosY, els.backgroundPosYValue, (value, realtime) => {
    config.background.posY = Number(value);
    if (config.background.type === "image") {
      renderBackground();
    }
    if (!realtime) {
      saveConfig();
    }
  });
  bindRangePair(els.backgroundScale, els.backgroundScaleValue, (value, realtime) => {
    config.background.scale = Number(value);
    if (config.background.type === "image") {
      renderBackground();
    }
    if (!realtime) {
      saveConfig();
    }
  });

  els.playlistUpload.addEventListener("change", async () => {
    const files = Array.from(els.playlistUpload.files || []);
    if (!files.length) {
      return;
    }

    let addedCount = 0;
    let hitQuota = false;
    for (const file of files) {
      const data = await fileToDataUrl(file, { maxWidth: 1920, maxHeight: 1080, quality: 0.82, mimeType: "image/jpeg" });
      const item = {
        id: crypto.randomUUID(),
        name: file.name,
        data,
        posX: 0,
        posY: 0,
        scale: 100
      };
      config.background.playlist.push(item);
      if (!saveConfig()) {
        config.background.playlist.pop();
        hitQuota = true;
        break;
      }
      addedCount += 1;
    }

    if (addedCount === 0) {
      syncForm();
      renderBackground();
      return;
    }

    if (!config.background.playlistSelectedId) {
      config.background.playlistSelectedId = config.background.playlist[0]?.id || "";
    }
    config.background.type = "playlist";
    syncForm();
    renderPlaylistSelect();
    syncPlaylistControls();
    renderBackground();
    saveConfig();

    if (hitQuota) {
      alert(`Only ${addedCount} image(s) were added before hitting browser storage limits.`);
    }
  });

  els.playlistSelect.addEventListener("change", () => {
    config.background.playlistSelectedId = els.playlistSelect.value;
    syncPlaylistControls();
    if (config.background.type === "playlist") {
      renderBackground();
    }
    saveConfig();
  });

  els.playlistShuffle.addEventListener("click", () => {
    if (!config.background.playlist.length) {
      return;
    }
    const idx = Math.floor(Math.random() * config.background.playlist.length);
    config.background.playlistSelectedId = config.background.playlist[idx].id;
    renderPlaylistSelect();
    syncPlaylistControls();
    if (config.background.type === "playlist") {
      renderBackground();
    }
    saveConfig();
  });

  els.playlistRemove.addEventListener("click", () => {
    const selectedId = config.background.playlistSelectedId;
    if (!selectedId) {
      return;
    }
    config.background.playlist = config.background.playlist.filter((item) => item.id !== selectedId);
    if (config.background.playlist.length > 0) {
      config.background.playlistSelectedId = config.background.playlist[0].id;
    } else {
      config.background.playlistSelectedId = "";
    }
    renderPlaylistSelect();
    syncPlaylistControls();
    if (config.background.type === "playlist") {
      renderBackground();
    }
    saveConfig();
  });

  bindRangePair(els.playlistPosX, els.playlistPosXValue, (value, realtime) => {
    const item = getSelectedPlaylistItem();
    if (!item) {
      return;
    }
    item.posX = Number(value);
    if (config.background.type === "playlist") {
      renderBackground();
    }
    if (!realtime) {
      saveConfig();
    }
  });
  bindRangePair(els.playlistPosY, els.playlistPosYValue, (value, realtime) => {
    const item = getSelectedPlaylistItem();
    if (!item) {
      return;
    }
    item.posY = Number(value);
    if (config.background.type === "playlist") {
      renderBackground();
    }
    if (!realtime) {
      saveConfig();
    }
  });
  bindRangePair(els.playlistScale, els.playlistScaleValue, (value, realtime) => {
    const item = getSelectedPlaylistItem();
    if (!item) {
      return;
    }
    item.scale = Number(value);
    if (config.background.type === "playlist") {
      renderBackground();
    }
    if (!realtime) {
      saveConfig();
    }
  });

  els.showLogo.addEventListener("change", () => {
    config.logo.enabled = els.showLogo.checked;
    renderFeatureVisibility();
    renderLogo();
    saveConfig();
  });
  bindRangePair(els.logoSize, els.logoSizeValue, (value, realtime) => {
    config.logo.width = clamp(value, 80, 420);
    renderLogo();
    if (!realtime) {
      saveConfig();
    }
  });
  bindRangePair(els.logoPosY, els.logoPosYValue, (value, realtime) => {
    config.logo.topOffset = clamp(value, -80, 120);
    renderLogo();
    if (!realtime) {
      saveConfig();
    }
  });

  bindRangePair(els.searchOffsetY, els.searchOffsetYValue, (value, realtime) => {
    config.searchLayout.offsetY = Number(value);
    setCssVar("--search-offset-y", `${config.searchLayout.offsetY}px`);
    if (!realtime) {
      saveConfig();
    }
  });

  els.logoUpload.addEventListener("change", async () => {
    const file = els.logoUpload.files?.[0];
    if (!file) {
      return;
    }
    config.logo.imageData = await fileToDataUrl(file);
    config.logo.enabled = true;
    config.features.logo = true;
    syncForm();
    renderFeatureVisibility();
    renderLogo();
    saveConfig();
  });

  els.enginePreset.addEventListener("change", () => {
    config.searchEngine.preset = els.enginePreset.value;
    if (config.searchEngine.preset === "custom" && config.searchEngine.iconMode === "preset") {
      config.searchEngine.iconMode = "favicon";
    }
    renderSearch();
    syncForm();
    saveConfig();
  });

  [els.customEngineName, els.customEngineUrl].forEach((el) => {
    el.addEventListener("change", () => {
      config.searchEngine.customName = els.customEngineName.value.trim();
      config.searchEngine.customUrl = els.customEngineUrl.value.trim() || defaultConfig.searchEngine.customUrl;
      renderSearch();
      saveConfig();
    });
  });

  els.engineIconMode.addEventListener("change", () => {
    config.searchEngine.iconMode = els.engineIconMode.value;
    renderSearch();
    saveConfig();
  });

  bindRangePair(els.engineIconScale, els.engineIconScaleValue, (value, realtime) => {
    config.searchEngine.iconScale = clamp(value, 80, 220);
    renderSearch();
    if (!realtime) {
      saveConfig();
    }
  });

  els.engineIconUpload.addEventListener("change", async () => {
    const file = els.engineIconUpload.files?.[0];
    if (!file) {
      return;
    }
    config.searchEngine.customIconData = await fileToDataUrl(file);
    config.searchEngine.iconMode = "custom";
    syncForm();
    renderSearch();
    saveConfig();
  });

  els.appsColumns.addEventListener("change", () => {
    config.layout.appsColumns = clamp(els.appsColumns.value, 2, 8);
    renderAppsShortcuts();
    saveConfig();
  });
  els.mainColumns.addEventListener("change", () => {
    config.layout.mainColumns = clamp(els.mainColumns.value, 1, 12);
    renderMainShortcuts();
    saveConfig();
  });
  els.shortcutTileSize.addEventListener("change", () => {
    config.layout.shortcutTileSize = clamp(els.shortcutTileSize.value, 72, 180);
    renderAllShortcuts();
    saveConfig();
  });

  els.appsShowText.addEventListener("change", () => {
    config.shortcutStyle.appsShowText = els.appsShowText.checked;
    renderAppsShortcuts();
    saveConfig();
  });
  els.mainShowText.addEventListener("change", () => {
    config.shortcutStyle.mainShowText = els.mainShowText.checked;
    renderMainShortcuts();
    saveConfig();
  });

  els.settingsButtonStyle.addEventListener("change", () => {
    config.settingsButton.style = els.settingsButtonStyle.value;
    renderSettingsButton();
    saveConfig();
  });

  bindRangePair(els.profileScale, els.profileScaleValue, (value, realtime) => {
    config.settingsButton.profileScale = clamp(value, 80, 220);
    renderSettingsButton();
    if (!realtime) {
      saveConfig();
    }
  });

  els.profileUpload.addEventListener("change", async () => {
    const file = els.profileUpload.files?.[0];
    if (!file) {
      return;
    }
    config.settingsButton.profileImageData = await fileToDataUrl(file);
    config.settingsButton.style = "profile";
    syncForm();
    renderSettingsButton();
    saveConfig();
  });

  els.faviconUpload.addEventListener("change", async () => {
    const file = els.faviconUpload.files?.[0];
    if (!file) {
      return;
    }
    config.customFaviconData = await fileToDataUrl(file);
    applyFavicon();
    saveConfig();
  });

  els.exportSettings.addEventListener("click", exportSettings);
  els.resetSettings.addEventListener("click", () => {
    config = structuredClone(defaultConfig);
    boot();
  });
  els.importSettings.addEventListener("change", importSettings);

  els.shortcutModalBackdrop.addEventListener("click", (event) => {
    if (event.target === els.shortcutModalBackdrop) {
      closeShortcutModal();
    }
  });
  els.modalCancel.addEventListener("click", closeShortcutModal);
  els.shortcutModalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveShortcutFromModal();
  });

  els.modalShortcutIconMode.addEventListener("change", () => {
    updateModalIconModeVisibility();
  });

  bindRangePair(els.modalShortcutIconScale, els.modalShortcutIconScaleValue, () => {});

  els.modalShortcutOpenIn.addEventListener("change", () => {});

  els.modalShortcutIconUpload.addEventListener("change", async () => {
    const file = els.modalShortcutIconUpload.files?.[0];
    if (!file) {
      return;
    }
    modalState.pendingIconData = await fileToDataUrl(file);
  });

  wireResizeHandle();
  wireBackgroundDrag();

  const media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;
  if (media) {
    media.addEventListener("change", () => {
      if (config.theme.mode === "system") {
        applyThemeAndColors();
      }
    });
  }

  window.addEventListener("pageshow", () => {
    focusSearchOnBoot();
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      focusSearchOnBoot();
    }
  });
}

function syncPlaylistControls() {
  const item = getSelectedPlaylistItem();
  setPairValue(els.playlistPosX, els.playlistPosXValue, item?.posX ?? 0);
  setPairValue(els.playlistPosY, els.playlistPosYValue, item?.posY ?? 0);
  setPairValue(els.playlistScale, els.playlistScaleValue, item?.scale ?? 100);
}

function wireResizeHandle() {
  let resizing = false;
  els.settingsResizeHandle.addEventListener("mousedown", (event) => {
    resizing = true;
    event.preventDefault();
  });
  window.addEventListener("mousemove", (event) => {
    if (!resizing) {
      return;
    }
    const width = window.innerWidth - event.clientX;
    config.settingsPane.width = clamp(width, 280, Math.min(760, window.innerWidth - 8));
    applySettingsPaneWidth();
  });
  window.addEventListener("mouseup", () => {
    if (!resizing) {
      return;
    }
    resizing = false;
    saveConfig();
  });
  window.addEventListener("resize", applySettingsPaneWidth);
}

function wireBackgroundDrag() {
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;

  els.backgroundLayer.addEventListener("mousedown", (event) => {
    const draggable = config.background.type === "image" || config.background.type === "playlist";
    if (!draggable) {
      return;
    }
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;

    if (config.background.type === "playlist") {
      const item = getSelectedPlaylistItem();
      originX = item?.posX ?? 0;
      originY = item?.posY ?? 0;
    } else {
      originX = config.background.posX;
      originY = config.background.posY;
    }

    event.preventDefault();
  });

  window.addEventListener("mousemove", (event) => {
    if (!dragging) {
      return;
    }
    const dx = ((event.clientX - startX) / window.innerWidth) * 100;
    const dy = ((event.clientY - startY) / window.innerHeight) * 100;

    if (config.background.type === "playlist") {
      const item = getSelectedPlaylistItem();
      if (!item) {
        return;
      }
      item.posX = originX + dx;
      item.posY = originY + dy;
      syncPlaylistControls();
    } else {
      config.background.posX = originX + dx;
      config.background.posY = originY + dy;
      setPairValue(els.backgroundPosX, els.backgroundPosXValue, config.background.posX);
      setPairValue(els.backgroundPosY, els.backgroundPosYValue, config.background.posY);
    }

    renderBackground();
  });

  window.addEventListener("mouseup", () => {
    if (!dragging) {
      return;
    }
    dragging = false;
    saveConfig();
  });
}

function addDragHandlers(tile, listName) {
  tile.addEventListener("dragstart", () => {
    dragState = { listName, id: tile.dataset.id };
    tile.classList.add("dragging");
  });
  tile.addEventListener("dragend", () => {
    tile.classList.remove("dragging");
    dragState = { listName: "", id: "" };
  });
  tile.addEventListener("dragover", (event) => event.preventDefault());
  tile.addEventListener("drop", () => {
    const targetId = tile.dataset.id;
    if (!dragState.id || !targetId || dragState.id === targetId || dragState.listName !== listName) {
      return;
    }
    const list = config.shortcuts[listName];
    const from = list.findIndex((x) => x.id === dragState.id);
    const to = list.findIndex((x) => x.id === targetId);
    if (from < 0 || to < 0) {
      return;
    }
    const [moved] = list.splice(from, 1);
    list.splice(to, 0, moved);
    renderAllShortcuts();
    saveConfig();
  });
}

function closeAllTileMenus() {
  document.querySelectorAll(".tileMenu.open").forEach((x) => x.classList.remove("open"));
}

function removeShortcut(listName, shortcutId) {
  config.shortcuts[listName] = config.shortcuts[listName].filter((x) => x.id !== shortcutId);
  enforceAddingModeForEmptyShortcuts();
  renderAllShortcuts();
  syncForm();
  saveConfig();
}

function openShortcutModal(mode, listName, shortcutId) {
  modalState.mode = mode;
  modalState.listName = listName;
  modalState.shortcutId = shortcutId;
  modalState.pendingIconData = "";
  els.modalShortcutIconUpload.value = "";

  if (mode === "edit") {
    const shortcut = config.shortcuts[listName].find((x) => x.id === shortcutId);
    if (!shortcut) {
      return;
    }
    els.modalTitle.textContent = `${t("edit")}: ${shortcut.name}`;
    els.modalShortcutName.value = shortcut.name;
    els.modalShortcutUrl.value = shortcut.url;
    els.modalShortcutIconMode.value = shortcut.iconMode || "favicon";
    els.modalShortcutFaviconUrl.value = shortcut.faviconUrl || "";
    setPairValue(els.modalShortcutIconScale, els.modalShortcutIconScaleValue, shortcut.iconScale ?? 100);
    els.modalShortcutOpenIn.value = shortcut.openIn || "current";
    els.modalShortcutFaClass.value = shortcut.faClass || "";
    els.modalShortcutFaColor1.value = shortcut.faColor1 || "#74b1ff";
    els.modalShortcutFaColor2.value = shortcut.faColor2 || "";
    els.modalShortcutBadgeText.value = shortcut.badgeText || "";
    els.modalShortcutBadgeColor1.value = shortcut.badgeColor1 || "#4f7cff";
    els.modalShortcutBadgeColor2.value = shortcut.badgeColor2 || "";
  } else {
    els.modalTitle.textContent = t("addShortcut");
    els.modalShortcutName.value = "";
    els.modalShortcutUrl.value = "";
    els.modalShortcutIconMode.value = "favicon";
    els.modalShortcutFaviconUrl.value = "";
    setPairValue(els.modalShortcutIconScale, els.modalShortcutIconScaleValue, 100);
    els.modalShortcutOpenIn.value = "current";
    els.modalShortcutFaClass.value = "";
    els.modalShortcutFaColor1.value = "#74b1ff";
    els.modalShortcutFaColor2.value = "";
    els.modalShortcutBadgeText.value = "";
    els.modalShortcutBadgeColor1.value = "#4f7cff";
    els.modalShortcutBadgeColor2.value = "";
  }

  updateModalIconModeVisibility();
  els.shortcutModalBackdrop.classList.remove("hidden");
  els.shortcutModalBackdrop.setAttribute("aria-hidden", "false");
}

function updateModalIconModeVisibility() {
  const mode = els.modalShortcutIconMode.value;
  const custom = mode === "custom";
  const favicon = mode === "favicon";
  const badge = mode === "badge";
  const fontAwesome = mode === "fontawesome";
  els.modalShortcutIconUploadWrap.classList.toggle("hidden", !custom);
  els.modalShortcutFaviconUrlWrap.classList.toggle("hidden", !favicon);
  els.modalShortcutIconScaleWrap.classList.toggle("hidden", !(custom || fontAwesome));
  els.modalShortcutFaClassWrap.classList.toggle("hidden", !fontAwesome);
  els.modalShortcutFaColor1Wrap.classList.toggle("hidden", !fontAwesome);
  els.modalShortcutFaColor2Wrap.classList.toggle("hidden", !fontAwesome);
  els.modalShortcutBadgeTextWrap.classList.toggle("hidden", !badge);
  els.modalShortcutBadgeColor1Wrap.classList.toggle("hidden", !badge);
  els.modalShortcutBadgeColor2Wrap.classList.toggle("hidden", !badge);
}

function closeShortcutModal() {
  els.shortcutModalBackdrop.classList.add("hidden");
  els.shortcutModalBackdrop.setAttribute("aria-hidden", "true");
}

function saveShortcutFromModal() {
  const name = els.modalShortcutName.value.trim();
  const url = normalizeUrl(els.modalShortcutUrl.value.trim());
  const iconMode = els.modalShortcutIconMode.value;
  const faviconUrl = String(els.modalShortcutFaviconUrl.value || "").trim();
  const iconScale = clamp(els.modalShortcutIconScale.value, 80, 220);
  const openIn = els.modalShortcutOpenIn.value;
  const faClass = String(els.modalShortcutFaClass.value || "").trim();
  const faColor1 = normalizeHexColor(els.modalShortcutFaColor1.value, "#74b1ff");
  const faColor2 = String(els.modalShortcutFaColor2.value || "").trim();
  const badgeText = String(els.modalShortcutBadgeText.value || "").trim().slice(0, 2);
  const badgeColor1 = String(els.modalShortcutBadgeColor1.value || "").trim() || "#4f7cff";
  const badgeColor2 = String(els.modalShortcutBadgeColor2.value || "").trim();

  if (!name || !url) {
    return;
  }

  if (modalState.mode === "add") {
    config.shortcuts[modalState.listName].push({
      id: crypto.randomUUID(),
      name,
      url,
      iconMode,
      faviconUrl,
      customIconData: iconMode === "custom" ? modalState.pendingIconData : "",
      iconScale,
      openIn,
      faClass,
      faColor1,
      faColor2,
      badgeText,
      badgeColor1,
      badgeColor2
    });
  } else {
    const shortcut = config.shortcuts[modalState.listName].find((x) => x.id === modalState.shortcutId);
    if (!shortcut) {
      return;
    }
    shortcut.name = name;
    shortcut.url = url;
    shortcut.iconMode = iconMode;
    shortcut.faviconUrl = faviconUrl;
    shortcut.customIconData = iconMode === "custom" ? (modalState.pendingIconData || shortcut.customIconData) : "";
    shortcut.iconScale = iconScale;
    shortcut.openIn = openIn;
    shortcut.faClass = faClass;
    shortcut.faColor1 = faColor1;
    shortcut.faColor2 = faColor2;
    shortcut.badgeText = badgeText;
    shortcut.badgeColor1 = badgeColor1;
    shortcut.badgeColor2 = badgeColor2;
  }

  enforceAddingModeForEmptyShortcuts();
  renderAllShortcuts();
  syncForm();
  saveConfig();
  closeShortcutModal();
}

function getFavicon(url, overrideUrl = "") {
  if (overrideUrl) {
    return normalizeUrl(overrideUrl);
  }
  try {
    const host = new URL(normalizeUrl(url)).hostname;
    if (!host) {
      return "";
    }
    if (faviconCache.has(host)) {
      return faviconCache.get(host);
    }
    const faviconUrl = `https://icons.duckduckgo.com/ip3/${encodeURIComponent(host)}.ico`;
    faviconCache.set(host, faviconUrl);
    return faviconUrl;
  } catch {
    return "";
  }
}

function fallbackIcon() {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='100%25' height='100%25' rx='8' fill='%239aa3c0'/%3E%3C/svg%3E";
}

function buildFaClassList(faClass) {
  const raw = String(faClass || "").trim();
  const tokens = raw.split(/\s+/).filter((token) => /^fa[a-z0-9-]*$/i.test(token));
  const hasStyle = tokens.some((token) => token === "fa-brands" || token === "fa-solid" || token === "fa-regular" || token === "fa-light" || token === "fa-duotone");
  const hasIcon = tokens.some((token) => /^fa-[a-z0-9-]+$/i.test(token) && token !== "fa-brands" && token !== "fa-solid" && token !== "fa-regular" && token !== "fa-light" && token !== "fa-duotone");
  if (!hasStyle) {
    tokens.unshift("fa-solid");
  }
  if (!hasIcon) {
    tokens.push("fa-link");
  }
  return Array.from(new Set(tokens)).join(" ");
}

function normalizeUrl(value) {
  const clean = String(value || "").trim();
  if (!clean) {
    return "";
  }
  if (/^https?:\/\//i.test(clean)) {
    return clean;
  }
  return `https://${clean}`;
}

function isInIframe() {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function openShortcutUrl(shortcut) {
  const url = normalizeUrl(shortcut?.url || "");
  if (!url) {
    return;
  }

  if (shortcut?.openIn === "new") {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  if (isInIframe()) {
    window.open(url, "_top");
    return;
  }

  window.location.href = url;
}

function isDirectAddress(value) {
  const clean = String(value || "").trim();
  if (!clean || clean.includes(" ")) {
    return false;
  }
  if (/^(https?:\/\/)/i.test(clean)) {
    return true;
  }
  if (/^localhost(?::\d+)?(\/.*)?$/i.test(clean)) {
    return true;
  }
  if (/^\d{1,3}(\.\d{1,3}){3}(?::\d+)?(\/.*)?$/.test(clean)) {
    return true;
  }
  return /^[a-z0-9-]+(\.[a-z0-9-]+)+(\/.*)?$/i.test(clean);
}

function closeAppsMenu() {
  els.appsMenu.classList.add("hidden");
  els.appsMenu.setAttribute("aria-hidden", "true");
}

function closeSettingsPane() {
  els.settingsPane.classList.add("hidden");
  els.settingsPane.setAttribute("aria-hidden", "true");
}

function setCssVar(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function hexToRgba(hex, alpha) {
  const clean = String(hex || "").replace("#", "");
  if (clean.length !== 6) {
    return `rgba(255,255,255,${alpha})`;
  }
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function isHexColorLight(hex) {
  const clean = String(hex || "").replace("#", "");
  if (clean.length !== 6) {
    return false;
  }
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness >= 150;
}

function escapeSingleQuote(value) {
  return String(value || "").replace(/'/g, "%27");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value)));
}

function exportSettings() {
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "newtab-settings.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function importSettings(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  try {
    const text = await file.text();
    config = deepMerge(structuredClone(defaultConfig), JSON.parse(text));
    boot();
  } catch {
    alert("Invalid settings file");
  } finally {
    els.importSettings.value = "";
  }
}

function fileToDataUrl(file, options = {}) {
  const hasResize = Number(options.maxWidth) > 0 || Number(options.maxHeight) > 0;
  if (!hasResize || !String(file.type || "").startsWith("image/")) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("Failed reading file"));
      reader.readAsDataURL(file);
    });
  }

  return compressImageToDataUrl(file, {
    maxWidth: Number(options.maxWidth) || 0,
    maxHeight: Number(options.maxHeight) || 0,
    quality: Number(options.quality) || 0.9,
    mimeType: String(options.mimeType || "image/jpeg")
  });
}

function compressImageToDataUrl(file, options) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const sourceW = img.naturalWidth || img.width;
        const sourceH = img.naturalHeight || img.height;
        if (!sourceW || !sourceH) {
          resolve(String(reader.result || ""));
          return;
        }

        const ratioW = options.maxWidth > 0 ? options.maxWidth / sourceW : 1;
        const ratioH = options.maxHeight > 0 ? options.maxHeight / sourceH : 1;
        const ratio = Math.min(1, ratioW, ratioH);
        const width = Math.max(1, Math.round(sourceW * ratio));
        const height = Math.max(1, Math.round(sourceH * ratio));

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(String(reader.result || ""));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        try {
          resolve(canvas.toDataURL(options.mimeType, options.quality));
        } catch {
          resolve(String(reader.result || ""));
        }
      };
      img.onerror = () => resolve(String(reader.result || ""));
      img.src = String(reader.result || "");
    };
    reader.onerror = () => reject(new Error("Failed reading file"));
    reader.readAsDataURL(file);
  });
}

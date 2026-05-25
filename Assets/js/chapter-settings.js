(function () {
  const storageKey = "bibleview-reader-settings";
  const defaults = {
    fontSize: "normal",
    fontFamily: "default",
    spacing: "normal"
  };

  const css = `
    html[data-bv-reader-font="small"] { --bv-reader-body-size: 0.95rem; --bv-reader-heading-scale: 0.96; }
    html[data-bv-reader-font="normal"] { --bv-reader-body-size: 1.05rem; --bv-reader-heading-scale: 1; }
    html[data-bv-reader-font="large"] { --bv-reader-body-size: 1.18rem; --bv-reader-heading-scale: 1.08; }
    html[data-bv-reader-font="xlarge"] { --bv-reader-body-size: 1.32rem; --bv-reader-heading-scale: 1.16; }

    body.bv-reader-page main p,
    body.bv-reader-page main li {
      font-size: var(--bv-reader-body-size) !important;
      line-height: var(--bv-reader-line-height, 1.82) !important;
    }

    body.bv-reader-page main h2 {
      font-size: calc(1.7rem * var(--bv-reader-heading-scale, 1)) !important;
      line-height: 1.25 !important;
    }

    body.bv-reader-page main h3 {
      font-size: calc(1.35rem * var(--bv-reader-heading-scale, 1)) !important;
      line-height: 1.35 !important;
    }

    body.bv-reader-page main h4,
    body.bv-reader-page main h5 {
      font-size: calc(1rem * var(--bv-reader-heading-scale, 1)) !important;
      line-height: 1.45 !important;
    }

    html[data-bv-reader-font-family="serif"] body.bv-reader-page main,
    html[data-bv-reader-font-family="serif"] body.bv-reader-page main p,
    html[data-bv-reader-font-family="serif"] body.bv-reader-page main li,
    html[data-bv-reader-font-family="serif"] body.bv-reader-page main h2,
    html[data-bv-reader-font-family="serif"] body.bv-reader-page main h3,
    html[data-bv-reader-font-family="serif"] body.bv-reader-page main h4,
    html[data-bv-reader-font-family="serif"] body.bv-reader-page main h5 {
      font-family: "Noto Serif SC", "Songti SC", "STSong", serif !important;
    }

    html[data-bv-reader-spacing="wide"] body.bv-reader-page main {
      max-width: 1180px !important;
    }

    html[data-bv-reader-spacing="wide"] body.bv-reader-page .verse-card {
      margin-bottom: 2.4rem !important;
      box-shadow: 0 18px 36px -24px rgba(15, 23, 42, 0.28) !important;
    }

    html[data-bv-reader-spacing="wide"] body.bv-reader-page .verse-card > div {
      padding: 1.65rem !important;
    }

    html[data-bv-reader-spacing="compact"] body.bv-reader-page main {
      max-width: 980px !important;
    }

    html[data-bv-reader-spacing="compact"] body.bv-reader-page .verse-card {
      margin-bottom: 1rem !important;
    }

    html[data-bv-reader-spacing="compact"] body.bv-reader-page .verse-card > div {
      padding: 1rem !important;
    }
  `;

  function readSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const next = { ...defaults, ...saved };
      if (saved.style === "serif") next.fontFamily = "serif";
      if (saved.style === "comfortable") next.spacing = "wide";
      if (saved.style === "compact") next.spacing = "compact";
      delete next.style;
      return next;
    } catch (_error) {
      return { ...defaults };
    }
  }

  function applySettings() {
    const settings = readSettings();
    document.documentElement.dataset.bvReaderFont = settings.fontSize;
    document.documentElement.dataset.bvReaderFontFamily = settings.fontFamily;
    document.documentElement.dataset.bvReaderSpacing = settings.spacing;
    if (document.body) document.body.classList.add("bv-reader-page");
  }

  function installStyle() {
    if (document.getElementById("bv-reader-settings-style")) return;
    const style = document.createElement("style");
    style.id = "bv-reader-settings-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  installStyle();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applySettings);
  } else {
    applySettings();
  }

  window.addEventListener("storage", (event) => {
    if (event.key === storageKey) applySettings();
  });

  window.BibleViewReaderSettings = {
    apply: applySettings
  };
}());

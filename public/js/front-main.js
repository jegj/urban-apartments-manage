/**
 * Main - Front Pages
 */
"use strict";

window.isDarkStyle = window.Helpers.isDarkStyle();

(function () {
  // Initialised custom options if checked
  setTimeout(function () {
    window.Helpers.initCustomOptionCheck();
  }, 1000);

  // Get style from local storage or use 'system' as default
  let storedStyle =
    localStorage.getItem("templateCustomizer-" + templateName + "--Theme") || //if no template style then use Customizer style
    (window.templateCustomizer?.settings?.defaultStyle ??
      document.documentElement.getAttribute("data-bs-theme")); //!if there is no Customizer then use default style as light

  // Run switchImage function based on the stored style
  window.Helpers.switchImage(storedStyle);

  // Update light/dark image based on current style
  window.Helpers.setTheme(window.Helpers.getPreferredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = window.Helpers.getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        window.Helpers.setTheme(window.Helpers.getPreferredTheme());
      }
    });

  function getScrollbarWidth() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.setProperty(
      "--bs-scrollbar-width",
      `${scrollbarWidth}px`,
    );
  }
  getScrollbarWidth();

  //Style Switcher (Light/Dark/System Mode)
  window.addEventListener("DOMContentLoaded", () => {
    window.Helpers.showActiveTheme(window.Helpers.getPreferredTheme());
    getScrollbarWidth();
    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        window.Helpers.setStoredTheme(templateName, theme);
        window.Helpers.setTheme(theme);
        window.Helpers.showActiveTheme(theme, true);
        window.Helpers.syncCustomOptions(theme);
        let currTheme = theme;
        if (theme === "system") {
          currTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        }
        window.Helpers.switchImage(currTheme);
      });
    });
  });
})();

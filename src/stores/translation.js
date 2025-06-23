export default function createTranslator(translations) {
  return {
    lang: localStorage.getItem("lang") || "en",

    t(key) {
      const lang = this.lang;
      if (!translations[key]) {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
      return translations[key][lang] || translations[key]["en"] || key;
    },

    setLanguage(lang) {
      console.log("===>", lang);
      this.lang = lang;
      localStorage.setItem("lang", lang);
    },
  };
}

// Translations
export const defaultTranslations = {
  welcome: {
    en: "Welcome",
    es: "Bienvenido",
  },
  button_text: {
    en: "Click me",
    es: "Haz clic",
  },
  content: {
    en: "This is a demonstration",
    es: "Esto es una demostración",
  },
};

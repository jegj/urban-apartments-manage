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
      this.lang = lang;
      localStorage.setItem("lang", lang);
    },
  };
}

// Translations
export const defaultTranslations = {
  "apartment:home:services": {
    en: "Apartment's Services",
    es: "Servicios del Departamento",
  },
  "apartment:home:accomodation": {
    en: "Accomodation",
    es: "Alojamiento",
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

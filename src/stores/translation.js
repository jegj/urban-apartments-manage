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
  "navbar:translate:english": {
    en: "English",
    es: "Ingles",
  },
  "navbar:translate:spanish": {
    en: "Spanish",
    es: "Español",
  },
  "apartment:home:services": {
    en: "Apartment's Services",
    es: "Servicios del Departamento",
  },
  "apartment:home:accomodation": {
    en: "Accomodation",
    es: "Alojamiento",
  },
  "apartment:home:tour": {
    en: "Tours and excursions",
    es: "Tours y excursiones",
  },
  "apartment:home:tourist_places": {
    en: "Tourist Places",
    es: "Sitios Turisticos",
  },
  "apartment:home:additional_services": {
    es: "Servicios Adicionales",
    en: "Additional Services",
  },
  "apartment:home:around": {
    es: "Alrededor",
    en: "Around Me",
  },
  "apartment:home:information": {
    es: "Informacion",
    en: "Information",
  },
  "apartment:home:help-title": {
    es: "¿Aún necesita ayuda?",
    en: "Still need help?",
  },
  "apartment:home:help-button": {
    es: "Contactanos",
    en: "Contact us",
  },
  "apartment:home:help-description": {
    es: "Nuestros especialistas estarán encantados de ayudarle.\nPóngase en contacto con nosotros en horario laboral o envíenos un correo electrónico las 24 horas del día, los 7 días de la semana, y nos pondremos en contacto con usted.",
    en: "Our specialists are always happy to help.\nContact us during standard business hours or email us 24/7 and we'll get back to you.",
  },
};

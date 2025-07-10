export default function createTranslator(translations) {
  return {
    lang: localStorage.getItem('lang') || 'en',

    t(key) {
      const lang = this.lang;
      if (!translations[key]) {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
      return translations[key][lang] || translations[key]['en'] || key;
    },

    setLanguage(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang);
    },
  };
}

// Translations
export const defaultTranslations = {
  'navbar:translate:english': {
    en: 'English',
    es: 'Ingles',
  },
  'navbar:translate:spanish': {
    en: 'Spanish',
    es: 'Español',
  },
  'apartment:title:services': {
    en: "Apartment's Services",
    es: 'Servicios del Departamento',
  },
  'apartment:title:accommodation': {
    en: 'Accommodation',
    es: 'Alojamiento',
  },
  'apartment:title:tour': {
    en: 'Tours and excursions',
    es: 'Tours y excursiones',
  },
  'apartment:title:tourist_places': {
    en: 'Tourist Places',
    es: 'Sitios Turisticos',
  },
  'apartment:title:additional_services': {
    es: 'Servicios Adicionales',
    en: 'Additional Services',
  },
  'apartment:title:around': {
    es: 'Alrededor',
    en: 'Around Me',
  },
  'apartment:title:information': {
    es: 'Informacion',
    en: 'Information',
  },
  'apartment:title:luggage_storage': {
    es: 'Guardado de Equipaje',
    en: 'Luggage Storage',
  },
  'apartment:title:taxi_request': {
    es: 'Solicita un Taxi',
    en: 'Request a Taxi',
  },
  'apartment:title:help-title': {
    es: '¿Aún necesita ayuda?',
    en: 'Still need help?',
  },
  'apartment:title:help-button': {
    es: 'Contactanos',
    en: 'Contact us',
  },
  'apartment:title:help-description': {
    es: 'Nuestros especialistas estarán encantados de ayudarle.\nPóngase en contacto con nosotros en horario laboral o envíenos un correo electrónico las 24 horas del día, los 7 días de la semana, y nos pondremos en contacto con usted.',
    en: "Our specialists are always happy to help.\nContact us during standard business hours or email us 24/7 and we'll get back to you.",
  },
};

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr.json';
import en from './en.json';
import es from './es.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  es: { translation: es }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', // Langue par défaut
  fallbackLng: 'fr', // Langue de secours
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

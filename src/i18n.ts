import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations from files
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: 'en', // Default language
      supportedLngs: ['en', 'cs', 'kk', 'jav', 'tlh', 'hu', 'epo', 'la', 'art-x-navi'], // Supported languages
    debug: true, // Enable debug mode in development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: './locales/{{lng}}/translation.json', // Path to translation files
    },
  });

export default i18n;

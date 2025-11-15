import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'cs', 'kk', 'jav', 'tlh', 'hu', 'epo', 'la', 'art-x-navi'],
    debug: true,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`,
    },
  });

export default i18n;

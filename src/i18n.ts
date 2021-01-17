// -> Beyond Codebase
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

// -> All config options can be found at https://www.i18next.com/overview/configuration-options
const i18nInitConfig = {
  deubg: true,
  lng: 'en',
  fallbackLng: 'en',
  whiteList: ['en', 'de'],
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};

i18n
  .use(Backend) // -> More info: https://github.com/i18next/i18next-xhr-backend
  .use(initReactI18next) // -> Connect with React
  .init({ ...i18nInitConfig });

export default i18n;

// -> Beyond Codebase
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
// -> Within Codebase
import { TRANSLATIONS_BACKEND_URL } from "./constants";

// -> Original tutorial can be found here: https://www.robinwieruch.de/react-internationalization

// -> All config options can be found at https://www.i18next.com/overview/configuration-options
const i18nInitConfig = {
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  whiteList: ['en', 'de'],
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
  // saveMissingTo: "all", // -> Commented for now because it was causing a problem, seems to be a valid config option from documentation though.
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: `${TRANSLATIONS_BACKEND_URL}/locales/add/{{lng}}/{{ns}}`,
  },
};

i18n
  .use(Backend) // -> More info: https://github.com/i18next/i18next-xhr-backend
  .use(initReactI18next) // -> Connect with React
  .init({ ...i18nInitConfig });

export default i18n;

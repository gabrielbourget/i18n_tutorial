// -> Beyond Codebase
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; // -> Tutorial I followed used i18next-xhr-backend but it has been deprecated with advice to use this one now.
// -> Within Codebase
import { TRANSLATIONS_BACKEND_URL } from "./constants";

// - TO LOOK INTO
// -> Events such as onInitialized, onLanguageChanged
// -> i18next-react-postprocessor to embed React elements inside translation strings

// - KEY QUESTIONS FOR ENTERPRISE-LEVEL PROJECTS
// -> How does the translation process work?
// -> How do the source files get to the translators and back?
// -> How do you keep track which parts are already translated and which parts not - and additional are all target languages fully translated?
// -> How you deploy new languages after release?
// -> How do you handle versioning?
// -> How you update / fix typos in translations after deployment?

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
  .use(HttpApi) // -> More info: https://github.com/i18next/i18next-xhr-backend
  .use(initReactI18next) // -> Connect with React
  .init({ ...i18nInitConfig });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./locales/tr/tr.json";
import en from "./locales/en/en.json";

const userLanguage = navigator.language.split(/[-_]/)[0];

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      translation: tr,
    },
    en: {
      translation: en,
    },
  },
  lng: userLanguage,
  fallbackLng: "en",
  initImmediate: false,
});

export default i18n;

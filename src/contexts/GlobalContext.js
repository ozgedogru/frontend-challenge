import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "../locales/tr/tr.json";
import en from "../locales/en/en.json";

export const GlobalContextObject = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("language", "en");

  i18n.use(initReactI18next).init({
    resources: {
      tr: {
        translation: tr,
      },
      en: {
        translation: en,
      },
    },
    lng: language,
    fallbackLng: "tr",
    initImmediate: false,
  });

  return (
    <GlobalContextObject.Provider
      value={{ theme, setTheme, language, setLanguage, i18n }}
    >
      {children}
    </GlobalContextObject.Provider>
  );
};

export default GlobalContextProvider;

import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContextObject = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("language", "en");

  return (
    <GlobalContextObject.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {children}
    </GlobalContextObject.Provider>
  );
};

export default GlobalContextProvider;

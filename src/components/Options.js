import { useEffect, useContext } from "react";
import { GlobalContextObject } from "../contexts/GlobalContext";
import { useTranslation } from "react-i18next";

const Options = () => {
  const { theme, setTheme, language, setLanguage } =
    useContext(GlobalContextObject);

  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-lightgrey  dark:bg-darkblack dark:text-white sm:px-32 px-4 flex flex-wrap justify-center pt-8">
      <div className="w-full flex justify-end">
        <label className="relative inline-flex cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-pink peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-grey peer-checked:bg-blue-600"></div>
          {language === "en" ? (
            <span className="text-grey text-sm font-bold pl-4 tracking-wider">
              {theme === "dark" ? "LIGHT" : "DARK"} MODE
            </span>
          ) : (
            <span className="text-grey text-sm font-bold pl-4 tracking-wider">
              {theme === "dark" ? "GÜNDÜZ" : "GECE"} MODU
            </span>
          )}
        </label>
        <div className="text-grey pl-4">|</div>
        <button
          onClick={toggleLang}
          className="text-grey font-bold pl-4 tracking-wider"
        >
          {language === "en" ? (
            <p className="text-sm">
              <span className="text-pink font-bold ">TÜRKÇE</span>
              ’YE GEÇ
            </p>
          ) : (
            <p className="text-sm">
              SWITCH TO <span className="text-pink font-bold ">ENGLISH</span>
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Options;

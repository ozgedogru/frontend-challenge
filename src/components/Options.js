import { useState, useEffect, useContext } from "react";
import { GlobalContextObject } from "../contexts/GlobalContext";

const Options = () => {
  const { theme, setTheme, language, setLanguage } =
    useContext(GlobalContextObject);

  const toggleLang = () => {
    console.log("Dil secenegi degistirildi!");
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    console.log("Tema secenegi degistirildi!", theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-lightgrey  dark:bg-darkblack dark:text-white px-32 flex flex-wrap justify-center py-8">
      <div className="w-full flex justify-end pb-16">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-pink peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-grey peer-checked:bg-blue-600"></div>
          <span className="text-grey font-bold pl-4 tracking-wider">
            {theme === "dark" ? "DARK" : "LIGHT"} MODE
          </span>
        </label>
        <div className="text-grey pl-4">|</div>
        <button
          onClick={toggleLang}
          className="text-grey font-bold pl-4 tracking-wider"
        >
          <span className="text-pink font-bold ">TÜRKÇE</span>’YE GEÇ
        </button>
      </div>
    </div>
  );
};

export default Options;

import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FetchDataContextObject } from "../contexts/FetchDataContext";

const Skills = () => {
  const { t } = useTranslation();
  const { fetchedData } = useContext(FetchDataContextObject);

  return (
    <div className="dark:bg-lightblack dark:text-logo sm:px-32 px-4 flex flex-wrap justify-center sm:py-4">
      <h2 className="title dark:text-white sm:my-12 my-4">{t("skills")}</h2>
      {fetchedData?.en.skills.map((item) => (
        <div className="p-4 w-min-4" key={item.name}>
          <img
            className="sm:w-24 sm:h-24 w-24 h-24 rounded-md m-auto"
            src={item.src}
            alt={item.alt}
          ></img>
          <p className="text-grey text-lg text-center font-small sm:font-medium leading-6 mt-4">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

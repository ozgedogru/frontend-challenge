import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FetchDataContextObject } from "../contexts/FetchDataContext";

const Skills = () => {
  const { t } = useTranslation();
  const { fetchedData } = useContext(FetchDataContextObject);

  return (
    <div className="dark:bg-lightblack dark:text-logo px-32 flex flex-wrap justify-center py-4">
      <h2 className="title dark:text-white">{t("skills")}</h2>
      {fetchedData?.en.skills.map((item) => (
        <div className="p-4 text-center" key={item.name}>
          <img
            className="w-32 h-32 mb-4 rounded-md"
            src={item.src}
            alt={item.alt}
          ></img>
          <p className="text-grey text-lg font-medium leading-6">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

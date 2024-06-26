import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FetchDataContextObject } from "../contexts/FetchDataContext";
import { GlobalContextObject } from "../contexts/GlobalContext";

const Projects = () => {
  const { t } = useTranslation();
  const { fetchedData } = useContext(FetchDataContextObject);
  const { language } = useContext(GlobalContextObject);

  return (
    <div className="dark:bg-lightblack  sm:px-32 px-4 flex flex-wrap justify-center py-4">
      <h2 className="title dark:text-white sm:my-12 my-4 ">{t("projects")}</h2>
      <div className="flex flex-wrap justify-center gap-16 ">
        {language === "en" ? (
          <>
            <div className="bg-babyblue dark:bg-project1 p-8 pb-0 max-w-[460px] rounded-lg min-h-[668px] relative">
              <h3 className="text-black dark:text-white pf text-2xl font-bold  tracking-widest mb-4">
                {fetchedData?.en.projects.project1.name}
              </h3>
              <p className="text-black dark:text-white text-base leading-6 my-6">
                {fetchedData?.en.projects.project1.text}
              </p>
              <div className="flex flex-wrap gap-[0.5rem]">
                {fetchedData?.en.projects.project1.hashtag.map((item) => (
                  <div key={item} className="hashtag dark:dark">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex justify-between py-8">
                <a
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8 "
                  href={fetchedData?.en.projects.project1.linkGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("github")}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={fetchedData?.en.projects.project1.linkApp}
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8"
                >
                  {t("app")}→
                </a>
              </div>
              <img
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-12"
                src="./pics/pc-left.png"
                alt="pc"
              ></img>
            </div>
            <div className="bg-babygreen dark:bg-project2 p-8 pb-0 max-w-[460px] rounded-lg min-h-[668px] relative ">
              <h3 className="text-black dark:text-white pf text-2xl font-bold  tracking-widest mb-4">
                {fetchedData?.en.projects.project2.name}
              </h3>
              <p className="text-black dark:text-white text-base leading-6 my-6">
                {fetchedData?.en.projects.project2.text}
              </p>
              <div className="flex flex-wrap gap-[0.5rem]">
                {fetchedData?.en.projects.project2.hashtag.map((item) => (
                  <div key={item} className="hashtag dark:dark">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex justify-between py-8">
                <a
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8 "
                  href={fetchedData?.en.projects.project2.linkGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("github")}
                </a>
                <a
                  href={fetchedData?.en.projects.project2.linkApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8"
                >
                  {t("app")}→
                </a>
              </div>
              <img
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-10"
                src="./pics/pc-right.png"
                alt="pc"
              ></img>
            </div>
          </>
        ) : (
          <>
            <div className="bg-babyblue dark:bg-project1 p-8 pb-0 max-w-[460px] rounded-lg min-h-[668px] relative ">
              <h3 className="text-black dark:text-white pf text-2xl font-bold  tracking-widest mb-4">
                {fetchedData?.tr.projects.project1.name}
              </h3>
              <p className="text-black dark:text-white text-base leading-6 my-6">
                {fetchedData?.tr.projects.project1.text}
              </p>
              <div className="flex flex-wrap gap-[0.5rem]">
                {fetchedData?.tr.projects.project1.hashtag.map((item) => (
                  <div key={item} className="hashtag dark:dark">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex justify-between py-8">
                <a
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8 "
                  href={fetchedData?.tr.projects.project1.linkGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("github")}
                </a>
                <a
                  href={fetchedData?.tr.projects.project1.linkApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8"
                >
                  {t("app")}→
                </a>
              </div>
              <img
                className="absolute left-1/2 transform -translate-x-1/2"
                src="./pics/pc-left.png"
                alt="pc"
              ></img>
            </div>
            <div className="bg-babygreen dark:bg-project2 p-8 pb-0 max-w-[460px] rounded-lg min-h-[668px] relative ">
              <h3 className="text-black dark:text-white pf text-2xl font-bold  tracking-widest mb-4">
                {fetchedData?.tr.projects.project2.name}
              </h3>
              <p className="text-black dark:text-white text-base leading-6 my-6">
                {fetchedData?.tr.projects.project2.text}
              </p>
              <div className="flex flex-wrap gap-[0.5rem]">
                {fetchedData?.tr.projects.project2.hashtag.map((item) => (
                  <div key={item} className="hashtag dark:dark">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex justify-between py-8">
                <a
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8 "
                  href={fetchedData?.tr.projects.project2.linkGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("github")}
                </a>
                <a
                  href={fetchedData?.tr.projects.project2.linkApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-4 text-black dark:text-white text-lg font-semibold leading-8"
                >
                  {t("app")}→
                </a>
              </div>
              <img
                className="absolute left-1/2 transform -translate-x-1/2"
                src="./pics/pc-right.png"
                alt="pc"
              ></img>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-wrap sm:flex-nowrap sm:p-16 py-4 w-screen justify-center">
        <p className=" text-black dark:text-white text-2xl sm:text-5xl font-medium leading-16 tracking-tight sm:w-2/3 sm:text-right text-center sm:p-8 p-4">
          {t("work together")}
        </p>
        <div className="flex sm:justify-center sm:flex-wrap sm:w-1/3 sm:p-8">
          <a
            className="text-blue sm:text-xl text-xs sm:font-medium leading-6 mx-1 font-light w-full"
            href="https://github.com/ozgedogru"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white sm:text-xl text-xs sm:font-medium leading-6 mx-1 font-light w-full flex"
          >
            {t("blog")}
          </a>
          <a
            className="text-linkblue sm:text-xl text-xs sm:font-medium leading-6 mx-1 font-light w-full"
            href="https://www.linkedin.com/in/%C3%B6zge-karademir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red sm:text-xl text-xs sm:font-medium leading-6 mx-1 font-light w-full "
          >
            {t("email")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

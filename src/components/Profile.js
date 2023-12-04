import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="px-32 py-4 bg-lightgrey dark:bg-darkblack ">
      <div className=" flex flex-wrap justify-center min-[320px] max-[600px] mb-8">
        <h2 className="title dark:text-white">{t("profile")}</h2>
        <div className="flex flex-wrap w-[500px] min-w-min bg-white dark:bg-basicinfo dark:text-white rounded-lg p-4 md:p-16">
          <h3 className="text-pink pf text-lg w-full">{t("basic info")}</h3>
          <ul>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">{t("birth date")}</p>
              <p className="w-1/2">18.06.1995</p>
            </li>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">{t("residence")}</p>
              <p className="w-1/2">St. Petersburg</p>
            </li>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">{t("education")}</p>
              <p className="w-1/2">{t("itu")}</p>
            </li>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">{t("role")}</p>
              <p className="w-1/2">Frontend, UI</p>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap w-[500px] min-w-min p-4 md:p-16">
          <h3 className="text-black dark:text-white pf text-lg w-full">
            {t("aboutme")}
          </h3>
          <p className="text-black dark:text-white leading-6 tracking-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
            <br />
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useContext } from "react";
import { GlobalContextObject } from "../contexts/GlobalContext";
import { FetchDataContextObject } from "../contexts/FetchDataContext";

const AboutMe = () => {
  const { language, theme } = useContext(GlobalContextObject);
  const { fetchedData } = useContext(FetchDataContextObject);

  return (
    <div className="bg-lightgrey dark:bg-darkblack dark:text-white sm:px-32 px-4 flex flex-wrap justify-center py-8">
      <div className="flex flex-wrap-reverse justify-center w-full">
        <div className="w-[666px] p-4">
          {language === "en" ? (
            <>
              <p className="text-3xl tracking-wider	">Hi! 👋</p>
              <p className="font-medium text-4xl leading-16 tracking-tight">
                I’m {fetchedData?.en.name}. I’m a full-stack developer. I can
                craft solid and scalable frontend products. Let’s meet!
              </p>
              <img
                className="inline-flex w-8 h-8 m-4 ml-0"
                src="/icons/linkedin.png"
                alt="LinkedIn"
              />
              <img
                className="inline-flex w-8 h-8 m-4 ml-0"
                src="/icons/github.png"
                alt="GitHub"
              />

              <p className="text-lg leading-8 tracking-tighter	">
                Currently <span className="text-red">Freelancing</span> for{" "}
                <span className="text-red">UX, UI, & Web Design</span> Project.
                <br />
                Invite me to join your team →{" "}
                <span className="text-red">ozgenurkarademir@gmail.com</span>
              </p>
            </>
          ) : (
            <>
              <p className="text-3xl tracking-wider	">Merhaba! 👋</p>
              <p className="font-medium text-4xl leading-16 tracking-tight">
                Ben {fetchedData?.en.name}. Full-stack web geliştiricisiyim.
                Kaliteli ve ölçeklenebilir ön yüz ürünleri üretebilirim.
                Tanışalım!
              </p>
              <img
                className="inline-flex w-8 h-8 m-4 ml-0"
                src={
                  theme === "dark"
                    ? "/icons/linkedin-w.png"
                    : "/icons/linkedin.png"
                }
                alt="LinkedIn"
              />
              <img
                className="inline-flex w-8 h-8 m-4 ml-0"
                src={
                  theme === "dark" ? "/icons/github-w.png" : "/icons/github.png"
                }
                alt="GitHub"
              />
              <p className="text-lg leading-8 tracking-tighter	">
                Şu anda{" "}
                <span className="text-red">
                  UX, UI ve Web Tasarım Projelerinde
                </span>{" "}
                serbest zamanlı çalışıyorum.
                <br />
                Beni ekibinize katılmaya davet edin →{" "}
                <span className="text-red">ozgenurkarademir@gmail.com</span>
              </p>
            </>
          )}
        </div>
        <div className="w-[333px]">
          <img
            className="rounded-3xl"
            src={theme === "dark" ? "/pics/pp2-shadow.jpeg" : "/pics/pp2.jpeg"}
            alt="pp"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

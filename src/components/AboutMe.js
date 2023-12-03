const AboutMe = () => {
  return (
    <div className="bg-lightgrey px-32 flex flex-wrap justify-center py-8">
      <div className="w-full flex justify-end pb-16">
        <div className="text-grey pl-4">|</div>
        <button className="text-grey font-bold pl-4 tracking-wider">
          <span className="text-pink font-bold ">TÜRKÇE</span>’YE GEÇ
        </button>
      </div>
      <div className="flex flex-wrap-reverse justify-center w-full">
        <div className="w-[666px] p-4">
          <p className="text-3xl tracking-wider	">Hi! 👋 </p>
          <p className="font-medium text-4xl leading-16 tracking-tight">
            I’m Özge. I’m a full-stack developer. I can craft solid and scalable
            frontend products. Let’s meet!
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
        </div>
        <div className="w-[333px]">
          <img className="rounded-3xl" src="/pics/foto.png" alt="pp" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

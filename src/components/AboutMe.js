const AboutMe = () => {
  return (
    <div className="bg-lightgrey px-32 flex flex-wrap justify-center py-8">
      <div className="w-full flex justify-end pb-16">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />

          <div className="w-11 h-6 bg-pink rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-yellow after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

          <span className="text-grey font-bold pl-4 tracking-wider">
            DARK MODE
          </span>
        </label>
        <div className="text-grey pl-4">|</div>
        <button className="text-grey font-bold pl-4 tracking-wider">
          <span className="text-pink font-bold ">TÜRKÇE</span>’YE GEÇ
        </button>
      </div>
      <div className="flex">
        <div className="w-2/3">
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
        <div className="w-1/3">
          <img className="rounded-3xl" src="/foto.png" alt="pp" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

const Projects = () => {
  return (
    <div className="px-32 flex flex-wrap justify-center py-4">
      <h2 className="title">Projects</h2>
      <div className="flex flex-wrap justify-center gap-16 ">
        <div className="bg-babyblue p-8 w-[460px] rounded-lg min-h-[668px] relative">
          <h3 className="text-black pf text-2xl font-bold  tracking-widest mb-4">
            Project I
          </h3>
          <p className="text-black text-base leading-6 my-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <div className="flex flex-wrap gap-[0.5rem]">
            <div className="hashtag">react</div>
            <div className="hashtag">vercel</div>
            <div className="hashtag">axios</div>
            <div className="hashtag">router</div>
          </div>
          <div className="flex justify-between py-8">
            <a
              className="my-4 text-black text-lg font-semibold leading-8 "
              href="https://github.com/ozgedogru"
              target="_blank"
            >
              View on GitHub
            </a>
            <a className="my-4 text-black text-lg font-semibold leading-8">
              Go to app{" "}
              <img className="inline" src="./icons/arrow-right.svg"></img>
            </a>
          </div>
          <img
            className="absolute left-1/2 transform -translate-x-1/2 bottom-11 w-84 h-52"
            src="./pics/screen-left.png"
          ></img>
          <img
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0"
            src="./pics/pc-left.png"
            alt="pc"
          ></img>
        </div>
        <div className="bg-babygreen p-8 w-[460px] rounded-lg min-h-[668px] relative">
          <h3 className="text-black pf text-2xl font-bold  tracking-widest mb-4">
            Project II
          </h3>
          <p className="text-black text-base leading-6 my-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
          <div className="flex flex-wrap gap-[0.5rem]">
            <div className="hashtag">react</div>
            <div className="hashtag">redux</div>
            <div className="hashtag">axios</div>
            <div className="hashtag">router</div>
            <div className="hashtag">vercel</div>
          </div>
          <div className="flex justify-between py-8">
            <a
              className="my-4 text-black text-lg font-semibold leading-8 "
              href="https://github.com/ozgedogru"
              target="_blank"
            >
              View on GitHub
            </a>
            <a className="my-4 text-black text-lg font-semibold leading-8">
              Go to app{" "}
              <img className="inline" src="./icons/arrow-right.svg"></img>
            </a>
          </div>
          <img
            className="absolute left-1/2 transform -translate-x-1/2 bottom-11 w-84 h-52"
            src="./pics/screen-right.png"
          ></img>
          <img
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0"
            src="./pics/pc-right.png"
            alt="pc"
          ></img>
        </div>
      </div>
      <div className="flex p-16">
        <p className=" text-black text-5xl font-medium leading-16 tracking-tight w-2/3 text-right p-8">
          Let’s work together on your next product.
        </p>
        <div className="flex flex-wrap w-1/3 p-8">
          <a
            className="text-blue text-xl font-medium leading-6 w-full"
            href="https://github.com/ozgedogru"
            target="_blank"
          >
            GitHub
          </a>
          <a className="text-black text-xl font-medium leading-6 w-full">
            Personal Blog
          </a>
          <a
            className="text-linkblue text-xl font-medium leading-6 w-full"
            href="https://www.linkedin.com/in/%C3%B6zge-karademir/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a className="text-red text-xl font-medium leading-6 w-full">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

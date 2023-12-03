const Skills = () => {
  return (
    <div className="dark:bg-lightblack dark:text-logo px-32 flex flex-wrap justify-center py-4">
      <h2 className="title dark:text-white">Skills</h2>
      <div className="p-4 text-center">
        <img
          className="w-32 h-32 mb-4 rounded-md"
          src="./icons/js-logo.png"
          alt="js"
        ></img>
        <p className="text-grey text-lg font-medium leading-6">JAVASCRIPT</p>
      </div>
      <div className="p-4 text-center">
        <img
          className="w-32 h-32 mb-4 rounded-md"
          src="./icons/react-logo.png"
          alt="react"
        ></img>
        <p className="text-grey text-lg font-medium leading-6">REACT</p>
      </div>
      <div className="p-4 text-center">
        <img
          className="w-32 h-32 mb-4 bg-purple rounded-md"
          src="./icons/redux-logo.png"
          alt="redux"
        ></img>
        <p className="text-grey text-lg font-medium leading-6">REDUX</p>
      </div>
      <div className="p-4 text-center">
        <img
          className="w-32 h-32 mb-4 rounded-md"
          src="./icons/node-logo.png"
          alt="js"
        ></img>
        <p className="text-grey text-lg font-medium leading-6">NODE</p>
      </div>
      <div className="p-4 text-center">
        <img
          className="w-32 h-32 mb-4 rounded-md"
          src="./icons/vscode-logo.png"
          alt="vscode"
        ></img>
        <p className="text-grey text-lg font-medium leading-6">VSCODE</p>
      </div>
      <div className="p-4 text-center">
        <img
          className="w-32 h-32 mb-4 rounded-md"
          src="./icons/figma-logo.png"
          alt="figma"
        ></img>
        <p className="text-grey text-lg font-medium leading-6">FIGMA</p>
      </div>
    </div>
  );
};

export default Skills;

import { useContext, useEffect } from "react";

import Options from "./components/Options";
import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FetchDataContextObject } from "./contexts/FetchDataContext";

import "./App.css";

function App() {
  const { fetchData } = useContext(FetchDataContextObject);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Options />
      <AboutMe />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;

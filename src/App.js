import Options from "./components/Options";
import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalContextProvider from "./contexts/GlobalContext";
import "./i18n";

import "./App.css";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Options />
        <AboutMe />
        <Skills />
        <Profile />
        <Projects />
      </GlobalContextProvider>
    </div>
  );
}

export default App;

import Main from "./Components/Main";
import About from "./Components/About";
import Cursor from "./Components/Cursor";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-[#000000] min-h-screen w-full">
      <Cursor />
      <Navbar /> 
      <Main />
      <About />
      <Work/>
      <Skills/>
      <Contact/>
    </div>
  );
};

export default App;

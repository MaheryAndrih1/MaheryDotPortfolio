import Main from "./Components/Main";
import Cursor from "./Components/Cursor";
import About from "./Components/About"
import Orbits from "./Components/Orbits"

const App = () => {
  return (
    <div className="bg-[#000000] min-h-screen w-full">
      <Cursor />
      <Main />
      <About />
      <br /><br />
    </div>
  );
};

export default App;

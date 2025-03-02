import Main from "./Components/Main";
import About from "./Components/About";
import Cursor from "./Components/Cursor";
import Work from "./Components/Work"; 

const App = () => {
  return (
    <div className="bg-[#000000] min-h-screen w-full">
      <Cursor />
      <Main />
      <About />
      <br /><br />
      <Work/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default App;

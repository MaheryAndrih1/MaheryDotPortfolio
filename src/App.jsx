import React from "react";
import Navbar from "./UI/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Cursor from "./UI/Cursor"; // Updated import path
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App bg-[#101010] min-h-screen">
      <Cursor />
      <Navbar />
      <Main />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

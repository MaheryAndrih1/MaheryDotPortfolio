import React from "react";
import Navbar from "./Navbar.jsx";
import Orbits from "./Orbits.jsx";

const Main = () => {
  return (
    <div 
    className="z-0 relative overflow-visible min-h-screen"
    style={{
      backgroundImage: 'url("/images/bg1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
      {/* Logo and Profile section */}
      <div className="w-full flex justify-between items-start pt-5 px-10">
        <h1 className="text-5xl text-white font-logo">
          M<span className="text-[#00c1a1]">.</span>
        </h1>
        
        <div className="relative">
          <div className="relative">
            <img
              src="/images/profile.jpeg"
              alt="Profile"
              className="w-15 h-15 rounded-full object-cover border-2 border-[#00c1a1]/20"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00600e] rounded-full border-2 border-[#171010]"></div>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Main Content Container */}
      <div className="h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] relative flex">
        {/* Vertical Email */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-50 hidden md:block">
          <a
            href="mailto:maheryandrianaivo1@gmail.com"
            className="block rotate-[-90deg] origin-center text-white/70 text-sm tracking-wider 
            pointer-events-auto hover:text-[#00c1a1] transition-colors translate-x-[-40%]">
          
            maheryandrianaivo1@gmail.com
          </a>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="font-typewriter text-sm text-white/90 mb-2">You can call me</p>
          <h1 className="font-header text-teal-500 text-7xl md:text-9xl mb-4 mix-blend-exclusion">Mahery</h1>
          <p className="font-typewriter text-center text-white/70 text-base md:text-xl">
            I am a full-stack developer,<br /> ready to turn your idea into reality.
          </p>
        </div>

        {/* Orbits container */}
        <div className="absolute bottom-[-20rem] right-0 md:w-1/5 hidden md:block">
          <Orbits />
        </div>
      </div>
    </div>
  );
};

export default Main;

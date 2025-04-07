import React, { useState, useEffect } from "react";
import Orbits from "../UI/Orbits";

const Main = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    // Time update
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // location detection
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data && data.country_code) {
          setCountryCode(data.country_code);
        }
      })
      

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="z-0 relative overflow-visible min-h-screen bg-[#101010]">
      {/* Logo and Time section */}
      <div className="w-full flex justify-between items-start pt-5 px-8">
        <h1 className="text-5xl text-white font-logo">
          M<span className="text-emerald-400/70">.</span>
        </h1>
        
        <div className="text-white/80 font-typewriter tracking-wider text-lg md:text-2xl translate-y-2.5">
          {formatTime(currentTime)}│{countryCode}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="h-[calc(100vh-120px)] md:h-[calc(100vh-175px)] relative flex pt-20">
        {/* Vertical Email */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-50 hidden md:block">
          <a
            href="mailto:maheryandrianaivo1@gmail.com"
            className="block rotate-[-90deg] origin-center text-white/70 text-sm tracking-wider 
            pointer-events-auto hover:text-[#37AAA4] transition-colors translate-x-[-45%] translate-y-10">
          
            maheryandrianaivo1@gmail.com
          </a>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="font-typewriter text-xl text-white/70 mb-2">You can call me</p>
          <h1 className="font-header text-emerald-500/70 text-7xl md:text-7xl mb-4">Mahery</h1>
          <p className="font-typewriter text-center text-white/70 text-base md:text-xl">
            I am a full-stack developer,<br /> ready to turn your ideas into reality.
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

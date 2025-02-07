import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-black text-white min-h-screen flex flex-col p-8"
    >
      {/* ABOUT Header */}
      <div className="text-[228px] font-black tracking-[-0.26em] flex space-x-2 ms-5">
        <span style={{ color: "#00C1A1" }}>A</span>
        <span style={{ color: "#007070" }}>B</span>
        <span style={{ color: "#B3ECE3" }}>O</span>
        <span style={{ color: "#00C1A1" }}>U</span>
        <span style={{ color: "#007070" }}>T</span>
      </div>

      <div className="mt-0 grid grid-cols-2 gap-1 px-40">
        <div className="col-span-1 row-span-1 flex items-center justify-center text-[128px] h-26 font-primary font-thin tracking-[-0.08em]">
          Who am I?
        </div>
        <div className="col-span-1 row-span-2 bg-[#007070] py-15 px-6 flex items-center justify-center text-center text-[25px] font-typewriter">
          A second-year computer science student and freelancer, always fascinated by computers since ever.
        </div>
        <div className="col-span-1 row-span-2 bg-[#00C1A1] py-15 px-6 flex items-center justify-center text-center text-[25px] font-typewriter">
          I specialize in full-stack development, crafting frontends with React.js and backends with Django.
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center text-[94px] h-20 tracking-[-0.05em] font-primary font-thin">
          What can I do?
        </div>
        <div className="col-span-2 row-span-2 text-black bg-[#B3ECE3] py-10 px-6 flex items-center justify-center text-[25px] font-typewriter text-center tracking-[-0.1em]">
          I build and design web applications, transform designs into code, solve problems, and simplify processes to enhance efficiency
        </div>
      </div>
    </div>
  );
};

export default About;

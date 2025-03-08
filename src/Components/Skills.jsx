import React from "react";
import Pc from "../UI/Pc";
import PowerButton from "../UI/PowerButton";
import { PowerProvider } from "../UI/PowerButton";

const Skills = () => {
  return (
    <PowerProvider>
      <div
        id="skills"
        className="relative min-h-screen border-regal-blue p-8 flex flex-col items-center pt-32"
        style={{ zIndex: 1 }}
      >
        <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
          <span style={{ color: "var(--color-primary)" }}>S</span>
          <span style={{ color: "var(--color-secondary)" }}>K</span>
          <span style={{ color: "var(--color-gray)" }}>I</span>
          <span style={{ color: "var(--color-teal)" }}>L</span>
          <span style={{ color: "var(--color-purple)" }}>L</span>
          <span style={{ color: "var(--color-secondary)" }}>S</span>
          <PowerButton />
        </div>
        
        <Pc />
      </div>
    </PowerProvider>
  );
};

export default Skills;

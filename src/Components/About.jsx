import React, { useState } from "react";

const About = () => {
  const colorSchemes = [
    {
      card1: { bg: '#007070', text: 'white' },
      card2: { bg: '#00C1A1', text: 'white' },
      card3: { bg: '#B3ECE3', text: 'black' }
    },
    {
      card1: { bg: '#00C1A1', text: 'white' },
      card2: { bg: '#B3ECE3', text: 'black' },
      card3: { bg: '#007070', text: 'white' }
    },
    {
      card1: { bg: '#B3ECE3', text: 'black' },
      card2: { bg: '#007070', text: 'white' },
      card3: { bg: '#00C1A1', text: 'white' }
    }
  ];

  const [currentScheme, setCurrentScheme] = useState(0);

  const rotateColors = () => {
    setCurrentScheme((prev) => (prev + 1) % colorSchemes.length);
  };

  return (
    <div id="about" className="bg-black text-white flex flex-col p-8">
      {/* ABOUT Header */}
      <div className="text-[48px] md:text-[228px] font-black tracking-[-0.26em] flex ms-5">
        <span style={{ color: "#00C1A1" }}>A</span>
        <span style={{ color: "#007070" }}>B</span>
        <span style={{ color: "#B3ECE3" }}>O</span>
        <span style={{ color: "#00C1A1" }}>U</span>
        <span style={{ color: "#007070" }}>T</span>
      </div>

      <div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-40">
        <div className="col-span-1 row-span-1 flex items-center justify-center text-[32px] sm:text-[48px] lg:text-[96px] xl:text-[128px] h-26 font-primary font-thin tracking-[-0.05em] whitespace-nowrap">
          Who am I?
        </div>
        <div className="col-span-1 row-span-2 p-2 rounded-bl-3xl" style={{ backgroundColor: colorSchemes[currentScheme].card1.bg }}>
          <div className={`py-15 px-6 flex items-center justify-center text-center text-[22px] font-typewriter rounded-bl-3xl border-b border-s border-dashed border-black tracking-[-.1em]`} 
            style={{ 
              backgroundColor: colorSchemes[currentScheme].card1.bg,
              color: colorSchemes[currentScheme].card1.text 
            }}>
            A second-year computer science student and freelancer, always
            fascinated by computers since ever.
          </div>
        </div>
        <div className="col-span-1 row-span-2 p-2 rounded-br-3xl" style={{ backgroundColor: colorSchemes[currentScheme].card2.bg }}>
          <div className={`py-12 px-6 flex items-center justify-center text-center text-[22px] font-typewriter rounded-br-3xl border-b border-e border-dashed border-black tracking-[-.1em]`} 
            style={{ 
              backgroundColor: colorSchemes[currentScheme].card2.bg,
              color: colorSchemes[currentScheme].card2.text 
            }}>
            I specialize in full-stack development, crafting frontends with
            React.js and backends with Django.
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex items-center justify-center text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[94px] h-19 tracking-[-.05em] font-primary font-thin mt-1 whitespace-nowrap">
          What can I do?
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 p-2 rounded-b-3xl" style={{ backgroundColor: colorSchemes[currentScheme].card3.bg }}>
          <div className="text-black py-10 px-6 flex items-center justify-center text-[22px] font-typewriter text-center tracking-[-.1em] rounded-b-3xl border-t border-dashed border-black" 
            style={{ 
              backgroundColor: colorSchemes[currentScheme].card3.bg,
              color: colorSchemes[currentScheme].card3.text 
            }}>
            I build and design web applications, transform designs into code,
            solve problems, and simplify processes to enhance efficiency

            <button 
              onClick={rotateColors} 
              className="rounded-full p-1 bg-teal-950 hover:bg-teal-600 transition-colors ml-4"
            >
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

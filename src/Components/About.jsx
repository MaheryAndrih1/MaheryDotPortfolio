import React from "react";

const About = () => {
  const getCardStyle = (index) => {
    const styles = {
      0: { border: 'var(--color-yellow)', bg: 'var(--color-yellow)', text: 'black' },
      1: { border: 'var(--color-secondary)', bg: 'var(--color-secondary)', text: 'black' },
      2: { border: 'var(--color-purple)', bg: 'var(--color-purple)', text: 'black' }
    };

    return {
      '--card-border': styles[index].border,
      '--card-hover-bg': styles[index].bg,
      '--card-hover-text': styles[index].text,
    };
  };

  return (
    <div id="about" className="bg-black text-white flex flex-col p-2 md:p-8">
      {/* ABOUT Header */}
      <div className="text-[128px] md:text-[175px] font-black tracking-[-0.26em] flex justify-center md:justify-start ms-0 md:ms-5 h-40 md:h-80">
        <span className="text-primary">A</span>
        <span className="text-teal-900">B</span>
        <span className="text-gray md:text-[322px] text-[235px] -translate-y-25 md:-translate-y-36">●</span>
        <span className="text-primary">U</span>
        <span className="text-secondary">T</span>
      </div>

      <div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-40">
        <div className="col-span-1 row-span-1 flex items-center justify-center text-[32px] sm:text-[48px] lg:text-[96px] xl:text-[128px] h-26 font-primary font-thin tracking-[-0.05em] whitespace-nowrap">
          Who am I?
        </div>
        <div 
          className="col-span-1 row-span-2 p-2 rounded-bl-3xl transition-all duration-300 cursor-pointer 
            border border-dashed border-[var(--card-border)] text-white bg-transparent
            hover:bg-[var(--card-hover-bg)] hover:text-[var(--card-hover-text)]" 
          style={getCardStyle(0)}
        >
          <div className="py-15 px-6 flex items-center justify-center text-center text-[22px] font-typewriter rounded-bl-3xl tracking-[-.1em]">
            A second-year computer science student and freelancer, always
            fascinated by computers since ever.
          </div>
        </div>
        <div 
          className="col-span-1 row-span-2 p-2 rounded-br-3xl transition-all duration-300 cursor-pointer
            border border-dashed border-[var(--card-border)] text-white bg-transparent
            hover:bg-[var(--card-hover-bg)] hover:text-[var(--card-hover-text)]" 
          style={getCardStyle(1)}
        >
          <div className="py-12 px-6 flex items-center justify-center text-center text-[22px] font-typewriter rounded-br-3xl tracking-[-.1em]">
            I specialize in full-stack development, crafting frontends with
            React.js and backends with Django.
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex items-center justify-center text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[94px] h-19 tracking-[-.05em] font-primary font-thin mt-1 whitespace-nowrap">
          What can I do?
        </div>
        <div 
          className="col-span-1 md:col-span-2 row-span-2 p-2 rounded-b-3xl transition-all duration-300 cursor-pointer
            border border-dashed border-[var(--card-border)] text-white bg-transparent
            hover:bg-[var(--card-hover-bg)] hover:text-[var(--card-hover-text)]" 
          style={getCardStyle(2)}
        >
          <div className="py-10 px-6 flex items-center justify-center text-[22px] font-typewriter text-center tracking-[-.1em] rounded-b-3xl">
            I build and design web applications, transform designs into code,
            solve problems, and simplify processes to enhance efficiency
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

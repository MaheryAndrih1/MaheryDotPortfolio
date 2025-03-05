import React, { useState, useEffect } from "react";
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navItems = ["About", "Work", "Skills"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

    return () => {
      
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const handleClick = (e, id) => {
    e.preventDefault();
    
    
    setIsMobileMenuOpen(false);
    
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    
    setTimeout(() => {
      const element = document.getElementById(id.toLowerCase());
      if (element) {
        
        const elementPosition = element.getBoundingClientRect().top;
        
        const offsetPosition = elementPosition + window.pageYOffset - 50;
        
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 125); // Transition duration
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="font-primary text-[#101010] pe-1 mx-auto w-fit h-10 rounded-full bg-[#ded9d9] -translate-y-14">
        <header className="h-full">
          <nav className="flex h-full items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex ps-3 items-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link px-3 text-lg"
                  onClick={(e) => handleClick(e, item)}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center">
              <Button
                id="contact-button"
                title="Contact"
                containerClass="bg-[#1d1d1d] md:flex hidden items-center justify-center gap-2 px-1 py-[4px] ml-4 rounded-3xl"
                onClick={(e) => handleClick(e, 'contact')}
              />
              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex items-center px-4"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className={`text-2xl transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}><AiOutlineMenu/></span>
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Mobile Menu Content */}
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleClick(e, item)}
              className="text-white text-3xl font-primary tracking-wide hover:text-[#00C1A1] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <Button
            id="contact-button-mobile"
            title="Contact"
            containerClass="bg-[#00C1A1] flex items-center justify-center gap-2 px-8 py-2 rounded-full mt-4 text-xl"
            onClick={(e) => handleClick(e, 'contact')}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

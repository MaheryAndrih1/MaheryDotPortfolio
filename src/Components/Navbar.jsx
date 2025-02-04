import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["About", "Work", "Skills"];

const Navbar = () => {
  const navContainerRef = React.useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  });

  return (
    <div>
      {/* Mobile Menu Background and Content */}
      <div 
        className={`fixed inset-0 bg-gradient-to-b from-black/90 to-teal-900/30 backdrop-blur-sm transition-all duration-500 md:hidden 
          ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Mobile Menu Items */}
        <div className="h-full flex flex-col items-center justify-center gap-8 p-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-header text-4xl text-white hover:text-teal-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-teal-500">
                ✦
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="font-header text-4xl text-teal-500 hover:text-white transition-colors mt-4"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Existing Navbar */}
      <div
        ref={navContainerRef}
        className="font-primary text-[#101010] fixed left-0 right-0 top-4 z-[999] mt-2 mx-auto w-fit h-10 rounded-full backdrop-blur-sm bg-[#ded9d9] transition-all duration-500 overflow-hidden"
      >
        <header className="h-full">
          <nav className="flex h-full items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex ps-3 items-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link px-3 text-lg"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center">
              <Button
                id="contact-button"
                title="Contact"
                containerClass="bg-[#1d1d1d] md:flex hidden items-center justify-center gap-2 px-1 py-[4px] ml-4"
              />
              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex items-center px-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-2xl">☰</span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;

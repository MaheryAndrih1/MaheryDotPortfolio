import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["About", "Work", "Skills"];

const Navbar = () => {
  const navContainerRef = React.useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 z-[9999] md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-white transition-colors ${
                item === "About" 
                  ? "text-4xl font-medium" 
                  : "text-2xl"
              } hover:text-[#00c1a1]`}
              onClick={(e) => handleClick(e, item)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[#00c1a1] text-2xl hover:text-white transition-colors"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div
        ref={navContainerRef}
        className="font-primary text-[#101010] fixed left-0 pe-1 right-0 top-4 z-[9999] rotate-0 mt-2 mx-auto w-fit h-10 rounded-full bg-[#ded9d9] transition-all overflow-hidden"
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
                <span className={`text-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
                  ☰
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;

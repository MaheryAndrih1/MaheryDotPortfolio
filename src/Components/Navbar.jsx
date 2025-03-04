import React, { useState } from "react";
import Button from "./Button";

const navItems = ["About", "Work", "Skills"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      {/* Navbar */}
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
                }`}>☰</span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navItems = ["About", "Work", "Skills"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      setVisible(isScrollingUp || currentScrollPos < 10);
    
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Handle mobile menu
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
    <div className="navbar-wrapper" style={{ position: 'relative', zIndex: 999999 }}>
      {/* Desktop Navbar */}
      {!isMobileMenuOpen && (
        <div 
          className="navbar-container font-primary text-[#101010] pe-1 mx-auto my-1 w-fit h-10 rounded-full bg-real-gray fixed left-1/2 transform -translate-x-1/2 transition-all duration-300"
          style={{ 
            zIndex: 999999,
            top: visible ? '20px' : '0',
            opacity: visible ? 1 : 0,
            pointerEvents: 'auto'
          }}
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
                {/* Mobile Menu Button - hide when menu is open */}
                {!isMobileMenuOpen && (
                  <button
                    className="md:hidden flex items-center px-4 rounded" 
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <span className="text-lg md:text-2xl">Menu</span>
                  </button>
                )}
              </div>
            </nav>
          </header>
        </div>
      )}

      {/* Mobile Menu Overlay - only render when open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black backdrop-blur-sm z-[9999]"
          style={{ pointerEvents: 'auto' }}
        >
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
                className="text-white text-3xl font-primary tracking-wide hover:text-[#37AAA4] transition-colors duration-300"
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
      )}
    </div>
  );
};

export default Navbar;

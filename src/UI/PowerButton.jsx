import React, { createContext, useState, useContext } from "react";

// Create a context for power state
export const PowerContext = createContext();

// Provider component to wrap around components that need power state
export const PowerProvider = ({ children }) => {
  const [isPowered, setIsPowered] = useState(true);
  const [isStarting, setIsStarting] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);

  const togglePower = () => {
    if (isPowered) {
      setIsPowered(false);
      setOpenWindows([]);
    } else {
      setIsStarting(true);
      setTimeout(() => {
        setIsPowered(true);
        setTimeout(() => {
          setIsStarting(false);
        }, 1500);
      }, 100);
    }
  };

  return (
    <PowerContext.Provider value={{ 
      isPowered, 
      setIsPowered, 
      isStarting, 
      setIsStarting, 
      openWindows, 
      setOpenWindows, 
      togglePower 
    }}>
      {children}
    </PowerContext.Provider>
  );
};

// Custom hook to use power state
export const usePower = () => useContext(PowerContext);

// PowerButton component
const PowerButton = () => {
  const { isPowered, togglePower } = usePower();

  return (
    <button
      onClick={togglePower}
      className={`w-12 h-12 rounded-full border-4 ms-10 flex items-center justify-center transition-all duration-500 ${
        isPowered
          ? "border-secondary bg-secondary/20 text-secondary"
          : "border-red-500 bg-red-500/20 text-red-500"
      }`}
    >
      <img src="/images/power-32.png" alt="Power" />
    </button>
  );
};

export default PowerButton;

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const Orbits = () => {
  const [isColliding1, setIsColliding1] = useState(false);
  const [isColliding2, setIsColliding2] = useState(false);
  const [isColliding3, setIsColliding3] = useState(false);
  
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);

  const checkCollision = (element1, element2) => {
    if (!element1 || !element2) return false;
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    
    const distance = Math.hypot(
      rect1.x + rect1.width/2 - (rect2.x + rect2.width/2),
      rect1.y + rect1.height/2 - (rect2.y + rect2.height/2)
    );
    
    return distance < (rect1.width + rect2.width) / 2;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dot1Element = dot1Ref.current;
      const dot2Element = dot2Ref.current;
      const dot3Element = dot3Ref.current;

      if (checkCollision(dot1Element, dot2Element)) {
        setIsColliding1(true);
        setIsColliding2(true);
        setTimeout(() => {
          setIsColliding1(false);
          setIsColliding2(false);
        }, 2000);
      }

      if (checkCollision(dot1Element, dot3Element)) {
        setIsColliding1(true);
        setIsColliding3(true);
        setTimeout(() => {
          setIsColliding1(false);
          setIsColliding3(false);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const [t, setT] = useState(0);
  useAnimationFrame((time) => {
    setT(time / 19); // speed
  });

  return (
    <div className="flex relative">
      <div className="relative flex items-end justify-end mb-32 mr-20">
        {/* Intersection Dot */}
        <div 
          className="absolute w-6 h-6 bg-white rounded-full mix-blend-difference z-10"
          style={{
            right: '260px',
            top: '35px',
            transform: 'translate(50%, -50%)'
          }}
        />

        {/* Large Orbit */}
        <div className="w-80 h-80 border border-dashed border-gray-600 rounded-full relative">
          {/* First dot */}
          <motion.div
            className="absolute inset-0"
            style={{ rotate: t * 1.5 }}
          >
            <div 
              ref={dot1Ref}
              className={`w-20 h-20 ${isColliding1 ? 'mix-blend-screen backdrop-blur-md' : ''} rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-500`}
              style={{ 
                backgroundColor: isColliding1 ? 'var(--color-gray-light)' : 'var(--color-secondary)'
              }}
            ></div>
          </motion.div>

          {/* Second dot */}
          <motion.div
            className="absolute inset-0"
            style={{ rotate: t * 3 }}
          >
            <div 
              ref={dot2Ref}
              className={`w-12 h-12 ${isColliding2 ? 'mix-blend-screen backdrop-blur-md' : ''} rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 transition-colors duration-500`}
              style={{ 
                backgroundColor: isColliding2 ? 'var(--color-purple-light)' : 'var(--color-purple)'
              }}
            ></div>
          </motion.div>
        </div>

        {/* Small Orbit */}
        <div className="w-72 h-72 border border-dashed border-gray-600 rounded-full absolute transform -translate-x-20">
          <motion.div
            className="absolute inset-0"
            style={{ rotate: -t * 4 }}
          >
            <div 
              ref={dot3Ref}
              className={`w-6 h-6 ${isColliding3 ? 'mix-blend-screen backdrop-blur-md' : ''} rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-500`}
              style={{ 
                backgroundColor: isColliding3 ? 'var(--color-gray-light)' : 'var(--color-teal)'
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Orbits;

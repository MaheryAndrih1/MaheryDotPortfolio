import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      setIsHovering(e.detail);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('cursorHover', handleHover);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('cursorHover', handleHover);
    };
  }, []);

  return (
    <div 
      className="cursor-dot mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isHovering && (
        <span className="cursor-text text-white">Available for work</span>
      )}
    </div>
  );
};

export const setCursorHovering = (hovering) => {
  window.dispatchEvent(new CustomEvent('cursorHover', { detail: hovering }));
};

export default Cursor;

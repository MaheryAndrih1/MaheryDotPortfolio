import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import './Skills.css';

const Skills = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [isPowered, setIsPowered] = useState(true);
  const workAreaRef = useRef(null);
  const [iconPositions, setIconPositions] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const apps = [
    {
      id: 'vscode',
      name: 'VS Code',
      icon: '/images/vscode.png',
      content: <iframe src="https://browserpad.org/" className="w-full h-full text-white" title="VS Code"/>
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: '/images/Docker.png',
      content: <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Docker</h3>
        <p>Containerization platform I use for deploying applications consistently across different environments.</p>
        <ul className="list-disc ml-4 mt-2">
          <li>Container orchestration</li>
          <li>Microservices architecture</li>
          <li>DevOps workflow</li>
        </ul>
      </div>
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: '/images/figma.png',
      content: <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Figma</h3>
        <p>Design tool for creating user interfaces and prototypes.</p>
        <ul className="list-disc ml-4 mt-2">
          <li>UI/UX Design</li>
          <li>Prototyping</li>
          <li>Design Systems</li>
        </ul>
      </div>
    },
    {
      id: 'postman',
      name: 'Postman',
      icon: '/images/postman.png',
      content: <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Postman</h3>
        <p>API development and testing tool.</p>
        <ul className="list-disc ml-4 mt-2">
          <li>API Testing</li>
          <li>API Documentation</li>
          <li>Request Collection Management</li>
        </ul>
      </div>
    },
    {
      id: 'android-studio',
      name: 'Android Studio',
      icon: '/images/Android Studio.png',
      content: <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Android Studio</h3>
        <p>IDE for Android app development.</p>
        <ul className="list-disc ml-4 mt-2">
          <li>Mobile App Development</li>
          <li>Android SDK</li>
          <li>Java/Kotlin Development</li>
        </ul>
      </div>
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Calculate initial positions in a grid layout
  const getInitialPosition = (index) => {
    const itemsPerRow = window.innerWidth < 768 ? 2 : 3; // 2 items per row on mobile
    const horizontalGap = window.innerWidth < 768 ? 100 : 150; // Smaller gap on mobile
    const verticalGap = window.innerWidth < 768 ? 80 : 120;
    const startX = window.innerWidth < 768 ? 30 : 50;
    const startY = window.innerWidth < 768 ? 30 : 50;

    const row = Math.floor(index / itemsPerRow);
    const col = index % itemsPerRow;

    return {
      x: startX + (col * horizontalGap),
      y: startY + (row * verticalGap)
    };
  };

  const openApp = (app) => {
    if (!openWindows.find(w => w.id === app.id)) {
      setOpenWindows([...openWindows, app]);
    }
  };

  const closeWindow = (appId) => {
    setOpenWindows(openWindows.filter(w => w.id !== appId));
  };

  const handleIconDrag = (appId, e, data) => {
    setIconPositions(prev => ({
      ...prev,
      [appId]: { x: data.x, y: data.y }
    }));
  };

  const togglePower = () => {
    setIsPowered(!isPowered);
    if (isPowered) {
      setOpenWindows([]); // Close all windows when turning off
    }
  };

  return (
    <div id="skills" className="min-h-screen bg-[#101010] p-8 flex flex-col items-center">
      <div className="flex items-center gap-8 mb-8">
        <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
          <span style={{ color: "#00C1A1" }}>S</span>
          <span style={{ color: "#007070" }}>K</span>
          <span style={{ color: "#B3ECE3" }}>I</span>
          <span style={{ color: "#00C1A1" }}>L</span>
          <span style={{ color: "#007070" }}>L</span>
          <span style={{ color: "#00C1A1" }}>S</span>
        </div>
        <button
          onClick={togglePower}
          className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
            isPowered 
              ? 'border-green-500 bg-green-500/20 text-green-500' 
              : 'border-red-500 bg-red-500/20 text-red-500'
          }`}
        >
          <span className="text-2xl">⏻</span>
        </button>
      </div>

      {/* Screen Container */}
      <div className={`relative w-[90vw] h-[100vh] bg-neutral-800 rounded-lg p-2 shadow-2xl transition-all duration-300 ${
        !isPowered && 'screen-off'
      }`}>
        {/* Screen Bezel */}
        <div className="absolute inset-2 border-4 border-neutral-700 rounded-lg">
          {/* Screen Content */}
          <div 
            ref={workAreaRef}
            className="relative w-full h-full overflow-hidden rounded"
            style={{
              backgroundImage: isPowered ? 'url("/images/winxp-bg.jpg")' : 'none',
              backgroundColor: isPowered ? 'transparent' : '#000',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {isPowered && (
              <>
                {/* Desktop Icons */}
                <div className="relative min-h-full">
                  {apps.map((app, index) => (
                    <Draggable
                      key={app.id}
                      bounds="parent"
                      defaultPosition={iconPositions[app.id] || getInitialPosition(index)}
                      onStop={(e, data) => handleIconDrag(app.id, e, data)}
                    >
                      <div 
                        className="flex flex-col items-center cursor-move absolute"
                        onDoubleClick={() => openApp(app)}
                      >
                        <img 
                          src={app.icon} 
                          alt={app.name} 
                          className="w-12 h-12 md:w-16 md:h-16 transition-transform hover:scale-110 pointer-events-none drop-shadow-lg"
                        />
                        <span className="text-white text-xs md:text-sm mt-2 text-center pointer-events-none text-shadow px-1 bg-black/30 rounded">
                          {app.name}
                        </span>
                      </div>
                    </Draggable>
                  ))}
                </div>

                {/* Windows */}
                {openWindows.map((app, index) => (
                  <Draggable 
                    key={app.id} 
                    handle=".window-handle"
                    bounds="parent"
                    defaultPosition={{ x: 20 + (index * 20), y: 20 + (index * 20) }}
                  >
                    <div className="absolute top-20 left-20 w-[70%] md:w-[800px] h-[200px] md:h-[500px] bg-[#1E1E1E] rounded-lg shadow-xl border border-gray-700">
                      <div className="window-handle flex items-center justify-between p-1 md:p-2 bg-[#2D2D2D] rounded-t-lg cursor-move">
                        <div className="flex items-center gap-1 md:gap-2">
                          <img src={app.icon} alt={app.name} className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-white text-[10px] md:text-sm">{app.name}</span>
                        </div>
                        <button 
                          onClick={() => closeWindow(app.id)}
                          className="text-white hover:text-red-500 text-base md:text-lg px-1 md:px-2"
                        >
                          ×
                        </button>
                      </div>
                      <div className="p-2 md:p-4 h-[calc(100%-28px)] md:h-[calc(100%-36px)] overflow-auto text-white text-xs md:text-base">
                        {app.content}
                      </div>
                    </div>
                  </Draggable>
                ))}

                {/* Windows Taskbar */}
                <div className="absolute bottom-0 left-0 right-0 h-8 md:h-10 bg-[#1E1E1E]/95 backdrop-blur-sm flex items-center justify-between border-t border-gray-700">
                  {/* Start Button */}
                  <button className="px-2 md:px-4 py-1 text-white hover:bg-white/10">
                    <img src="/images/windows.png" alt="Start" className="w-6 h-6 md:w-8 md:h-8" />
                  </button>

                  {/* Running Apps */}
                  <div className="flex-1 flex items-center px-2 md:px-4">
                    {openWindows.map(app => (
                      <div 
                        key={app.id}
                        className="flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1 bg-white/10 mr-1 md:mr-2 cursor-pointer hover:bg-white/20"
                      >
                        <img src={app.icon} alt={app.name} className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-white text-xs md:text-sm hidden sm:inline">{app.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Time and Date */}
                  <div className="flex flex-col items-end text-white text-[10px] md:text-xs px-2 py-1 hover:bg-white/10 cursor-default">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatDate(currentTime)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Power Button */}
        <div className="absolute -bottom-4 right-4 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Skills;

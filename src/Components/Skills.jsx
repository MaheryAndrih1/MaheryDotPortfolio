import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import VSCode from './VSCode';

const Skills = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [isPowered, setIsPowered] = useState(true);
  const [isStarting, setIsStarting] = useState(false);
  const workAreaRef = useRef(null);
  const [iconPositions, setIconPositions] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glowingApp, setGlowingApp] = useState(null);

  const apps = [
    {
      id: "cv",
      name: "CV.pdf",
      icon: "/images/pdf.png",
      content: (
        <iframe
          src="/CV.pdf" 
          title="CV"
          className="w-full h-full"
        />
      ),
    },
    {
      id: "vscode",
      name: "VS Code",
      icon: "/images/vscode.png",
      content: <VSCode />
    },
    {
      id: "docker",
      name: "Docker",
      icon: "/images/Docker.png",
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Docker</h3>
          <p>
            Containerization platform I use for deploying applications
            consistently across different environments.
          </p>
          <ul className="list-disc ml-4 mt-2">
            <li>Container orchestration</li>
            <li>Microservices architecture</li>
            <li>DevOps workflow</li>
          </ul>
        </div>
      ),
    },
    {
      id: "android-studio",
      name: "Android Studio",
      icon: "/images/Android Studio.png",
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Android Studio</h3>
          <p>IDE for Android app development.</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Mobile App Development</li>
            <li>Android SDK</li>
            <li>Java/Kotlin Development</li>
          </ul>
        </div>
      ),
    },
    {
      id: "figma",
      name: "Figma",
      icon: "/images/figma.png",
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Figma</h3>
          <p>Design tool for creating user interfaces and prototypes.</p>
          <ul className="list-disc ml-4 mt-2">
            <li>UI/UX Design</li>
            <li>Prototyping</li>
            <li>Design Systems</li>
          </ul>
        </div>
      ),
    },
    {
      id: "postman",
      name: "Postman",
      icon: "/images/postman.png",
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Postman</h3>
          <p>API development and testing tool.</p>
          <ul className="list-disc ml-4 mt-2">
            <li>API Testing</li>
            <li>API Documentation</li>
            <li>Request Collection Management</li>
          </ul>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  const getInitialPosition = (index) => {
    const isMobile = window.innerWidth < 700;
    const screenWidth = workAreaRef.current ? workAreaRef.current.offsetWidth : window.innerWidth;
    const screenHeight = workAreaRef.current ? workAreaRef.current.offsetHeight : window.innerHeight;
    
    // position for CV
    if (apps[index].id === "cv") {
      return {
        x: isMobile ? screenWidth - 70 : screenWidth - 90,
        y: isMobile ? screenHeight - 537 : screenHeight - 543,
      };
    }

    const adjustedIndex = index - 1;
    const itemsPerRow = isMobile ? 2 : 3;
    const horizontalGap = isMobile ? 100 : 110;
    const verticalGap = isMobile ? 100 : 110;
    const startX = isMobile ? 20 : 40;
    const startY = isMobile ? 20 : 40;

    const row = Math.floor(adjustedIndex / itemsPerRow);
    const col = adjustedIndex % itemsPerRow;

    return {
      x: startX + col * horizontalGap,
      y: startY + row * verticalGap,
    };
  };

  // update positions when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIconPositions({}); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openApp = (app) => {
    if (!openWindows.find((w) => w.id === app.id)) {
      setOpenWindows([...openWindows, app]);
    } else if (minimizedWindows.includes(app.id)) {
      // Trigger glow effect
      setGlowingApp(app.id);
      setTimeout(() => {
        setGlowingApp(null);
      }, 2000);
    }
  };

  const closeWindow = (appId) => {
    setOpenWindows(openWindows.filter((w) => w.id !== appId));
  };

  const minimizeWindow = (appId) => {
    setMinimizedWindows([...minimizedWindows, appId]);
  };

  const restoreWindow = (appId) => {
    setMinimizedWindows(minimizedWindows.filter((id) => id !== appId));
  };

  const handleIconDrag = (appId, e, data) => {
    setIconPositions((prev) => ({
      ...prev,
      [appId]: { x: data.x, y: data.y },
    }));
  };

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

  const nodeRef = useRef(null);
  const windowRefs = useRef({});

  return (
    <div
      id="skills"
      className="relative min-h-screen border-regal-blue p-8 flex flex-col items-center pt-32"
      style={{ zIndex: 1 }} // Lower the Skills section z-index
    >
      <div className="flex items-center gap-8 mb-4">
        <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
          <span style={{ color: "var(--color-primary)" }}>S</span>
          <span style={{ color: "var(--color-secondary)" }}>K</span>
          <span style={{ color: "var(--color-gray)" }}>I</span>
          <span style={{ color: "var(--color-teal)" }}>L</span>
          <span style={{ color: "var(--color-purple)" }}>L</span>
          <span style={{ color: "var(--color-secondary)" }}>S</span>
        </div>
        <button
          onClick={togglePower}
          className={`w-12 h-12 rounded-full border-4 ms-10 flex items-center justify-center transition-all duration-500 ${
            isPowered
              ? "border-secondary bg-secondary/20 text-secondary"
              : "border-red-500 bg-red-500/20 text-red-500"
          }`}
        >
          <img src="/images/power-32.png" alt="" />
        </button>
      </div>

      {/* Note Card */}
      <div className="max-w-2xl mx-auto mb-8 p-4 bg-[#101010] border border-primary/20 rounded-lg">
        <p className="text-white/80 text-center text-sm md:text-sm leading-relaxed">
          I brought here my desktop. Here are the software I often use, you can open VScode and press "Open in Chrome" to see my entire tech stack. <br />
          <span className="text-gray/70">(You can modify the html and render it in Chrome.)</span>
        </p>
      </div>

      {/* Screen Container */}
      <div
        className={`relative w-[90vw] h-[100vh] bg-neutral-800 rounded-lg p-2 shadow-2xl transition-all duration-300 
      ${!isPowered ? "screen-off" : ""} 
      ${isStarting ? "screen-on" : ""}`}
      >
        {/* Screen Bezel */}
        <div className="absolute inset-2 border-4 border-neutral-700">
          {/* Screen Content */}
          <div
            ref={workAreaRef}
            className={`relative w-full h-full ${
              isPowered && !isStarting ? "crt-flicker" : ""
            }`}
            style={{
              backgroundImage: isPowered
                ? 'url("/images/win10-bg.jpg")'
                : "none",
              backgroundColor: "#000",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 0.5s ease-in",
              overflow: "hidden"
            }}
          >
            {isPowered && (
              <>
                {/* Desktop Icons */}
                <div className="relative min-h-full">
                  {apps.map((app, index) => {
                    const position = getInitialPosition(index);
                    return (
                      <div
                        key={app.id}
                        className="flex flex-col items-center absolute"
                        style={{
                          left: position.x,
                          top: position.y
                        }}
                        onDoubleClick={() => openApp(app)}
                      >
                        <img
                          src={app.icon}
                          alt={app.name}
                          className="w-12 h-12 md:w-12 md:h-12 pointer-events-none drop-shadow-lg"
                        />
                        <span className="text-white text-xs md:text-sm mt-2 text-center pointer-events-none px-1 ">
                          {app.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Windows */}
                {openWindows.map((app, index) => {
                  if (!windowRefs.current[app.id]) {
                    windowRefs.current[app.id] = React.createRef();
                  }
                  return minimizedWindows.includes(app.id) ? null : (
                    <Draggable
                      key={app.id}
                      handle=".window-handle"
                      bounds="parent"
                      nodeRef={windowRefs.current[app.id]}
                      defaultPosition={{
                        x: 10 + index * 25,
                        y: -50 + index * 25,
                      }}
                    >
                      <div
                        ref={windowRefs.current[app.id]}
                        className="absolute top-20 left-20 w-[80%] md:w-[800px] h-[400px] md:h-[500px] bg-[#1E1E1E] shadow-xl border border-gray-700"
                      >
                        <div className="window-handle flex items-center justify-between p-0 md:p-0 bg-[#2D2D2D] cursor-move">
                          <div className="flex items-center gap-1 md:gap-2 p-2.5">
                            <img
                              src={app.icon}
                              alt={app.name}
                              className="w-5 h-5 md:w-6 md:h-6 ps-0.5 gap-1"
                            />
                            <span className="text-white text-[10px] md:text-sm">
                              {app.name}
                            </span>
                          </div>
                          <div className="flex">
                            <button
                              onClick={() => minimizeWindow(app.id)}
                              className="text-white hover:bg-neutral-700 text-base md:text-lg p-3 md:p-3"
                            >
                              <AiOutlineMinus />
                            </button>
                            <button
                              onClick={() => closeWindow(app.id)}
                              className="text-white hover:bg-red-500 text-base md:text-lg p-3 md:p-3"
                            >
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                        <div className="p-2 md:p-4 h-[calc(100%-28px)] md:h-[calc(100%-36px)] overflow-auto text-white text-xs md:text-base">
                          {app.content}
                        </div>
                      </div>
                    </Draggable>
                  );
                })}

                {/* Windows Taskbar */}
                <div className="absolute bottom-0 left-0 right-0 h-7 md:h-10 bg-[#1E1E1E]/95 backdrop-blur-sm flex items-center justify-between border-t border-gray-700">
                  {/* Start Button */}
                  <button className="px-2 md:px-4 py-1 text-white hover:bg-white/10">
                    <img
                      src="/images/windows.png"
                      alt="Start"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </button>

                  {/* Running Apps */}
                  <div className="flex-1 flex items-center px-2 md:px-4">
                    {openWindows.map((app) => (
                      <div
                        key={app.id}
                        onClick={() =>
                          minimizedWindows.includes(app.id)
                            ? restoreWindow(app.id)
                            : minimizeWindow(app.id)
                        }
                        className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 
                          ${
                            minimizedWindows.includes(app.id)
                              ? "bg-white/5"
                              : "bg-white/10"
                          }
                          ${glowingApp === app.id ? "taskbar-glow" : ""}
                          mr-1 md:mr-2 cursor-pointer hover:bg-white/20 overflow-hidden transition-colors`}
                      >
                        <img
                          src={app.icon}
                          alt={app.name}
                          className="w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-white text-xs md:text-sm hidden sm:inline">
                          {app.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Time and Date */}
                  <div className="flex flex-col items-end text-white text-[10px] md:text-xs px-2 md:py-1 hover:bg-white/10 cursor-default">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatDate(currentTime)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

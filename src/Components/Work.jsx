import React, { useState } from 'react';

const Work = () => {
    const images = [
        "/videos/Starwars Game.mp4",
        "/images/Snackhub.png",
        "/images/Vente Vision.png",
        "/images/University Fields.png"
    ];

    const [isTopPaused, setIsTopPaused] = useState(false);
    const [isBottomPaused, setIsBottomPaused] = useState(false);

    return (
        <div id="work" className="min-h-[140vh] bg-[#101010] p-8 overflow-hidden">
            <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
                <span style={{ color: "#00C1A1" }}>W</span>
                <span style={{ color: "#007070" }}>O</span>
                <span style={{ color: "#B3ECE3" }}>R</span>
                <span style={{ color: "#00C1A1" }}>K</span>
            </div>

            <div className="flex flex-col gap-2 py-20">
                {/* Top Carousel */}
                <div 
                    className="w-full rotate-6"
                    onMouseEnter={() => setIsTopPaused(true)}
                    onMouseLeave={() => setIsTopPaused(false)}
                >
                    <div className={`flex gap-2 carousel ${isTopPaused ? 'paused' : ''}`}>
                        {[...images, ...images, ...images].map((image, index) => (
                            <div key={`first-${index}`} className="flex-shrink-0">
                                {image.endsWith('.mp4') ? (
                                    <video 
                                        src={image} 
                                        alt={`Work ${index + 1}`} 
                                        className="same-size rounded transition-transform" 
                                        autoPlay 
                                        loop 
                                        muted
                                    />
                                ) : (
                                    <img 
                                        src={image} 
                                        alt={`Work ${index + 1}`} 
                                        className="same-size rounded transition-transform"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Carousel */}
                <div 
                    className="w-full rotate-6"
                    onMouseEnter={() => setIsBottomPaused(true)}
                    onMouseLeave={() => setIsBottomPaused(false)}
                >
                    <div className={`flex gap-2 carousel reverse ${isBottomPaused ? 'paused' : ''}`}>
                        {[...images, ...images, ...images].map((image, index) => (
                            <div key={`second-${index}`} className="flex-shrink-0">
                                {image.endsWith('.mp4') ? (
                                    <video 
                                        src={image} 
                                        alt={`Work ${index + 1}`} 
                                        className="same-size rounded transition-transform" 
                                        autoPlay 
                                        loop 
                                        muted
                                    />
                                ) : (
                                    <img 
                                        src={image} 
                                        alt={`Work ${index + 1}`} 
                                        className="same-size rounded transition-transform"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

import React from 'react';

const Work = () => {
    const images = [
        "/videos/Starwars Game.mp4",
        "/images/Snackhub.png",
        "/images/Vente Vision.png",
        "/images/University Fields.png"
    ];

    return (
        <div id="work" className="min-h-[118vh] bg-[#101010] p-8 overflow-hidden">
            
            <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
                <span style={{ color: "#00C1A1" }}>W</span>
                <span style={{ color: "#007070" }}>O</span>
                <span style={{ color: "#B3ECE3" }}>R</span>
                <span style={{ color: "#00C1A1" }}>K</span>
            </div>
            <br /><br /><br />
            <div className="flex flex-col">
                {/* First carousel */}
                <div className="bg-neutral-950 h-[32vh] py-0.5 overflow-hidden w-screen -ml-8 rotate-6">
                    <div className="carousel-container">
                        <div className="carousel-track">
                            {/* First set of images */}
                            {images.map((src, index) => (
                                <div key={`first-${index}`} className="w-[50vh] h-[31vh]">
                                    {src.endsWith('.mp4') ? (
                                        <video 
                                            src={src} 
                                            className="w-full h-full object-cover rounded-lg"
                                            autoPlay
                                            loop
                                            muted
                                        />
                                    ) : (
                                        <img 
                                            src={src} 
                                            alt={`Project ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}
                                </div>
                            ))}
                            
                            {images.map((src, index) => (
                                <div key={`second-${index}`} className="w-[50vh] h-[31vh]">
                                    {src.endsWith('.mp4') ? (
                                        <video 
                                            src={src} 
                                            className="w-full h-full object-cover rounded-lg"
                                            autoPlay
                                            loop
                                            muted
                                        />
                                    ) : (
                                        <img 
                                            src={src} 
                                            alt={`Project ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second carousel (reverse direction) */}
                <div className="bg-neutral-950 h-[32vh] py-0.5 overflow-hidden w-screen -ml-8 rotate-6">
                    <div className="carousel-container">
                        <div className="carousel-track reverse">
                            {images.map((src, index) => (
                                <div key={`first-${index}`} className="w-[50vh] h-[31vh]">
                                    {src.endsWith('.mp4') ? (
                                        <video 
                                            src={src} 
                                            className="w-full h-full object-cover rounded-lg"
                                            autoPlay
                                            loop
                                            muted
                                        />
                                    ) : (
                                        <img 
                                            src={src} 
                                            alt={`Project ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}
                                </div>
                            ))}
                            {images.map((src, index) => (
                                <div key={`second-${index}`} className="w-[50vh] h-[31vh]">
                                    {src.endsWith('.mp4') ? (
                                        <video 
                                            src={src} 
                                            className="w-full h-full object-cover rounded-lg"
                                            autoPlay
                                            loop
                                            muted
                                        />
                                    ) : (
                                        <img 
                                            src={src} 
                                            alt={`Project ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

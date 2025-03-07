import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
    const projects = [
        {
            media: "/videos/Starwars Game.mp4",
            isVideo: true,
            title: "Star Wars Game",
            description: "A 3D space shooter game built with Three.js",
            github: "https://github.com/MaheryAndrih1/spaceship-game",
            live: ""
        },
        {
            media: "/images/Snackhub.png",
            isVideo: false,
            title: "Snackhub",
            description: "Food delivery platform with real-time order tracking",
            github: "https://github.com/yourusername/snackhub",
            live: "https://snackhub-app.netlify.app"
        },
        {
            media: "/images/Vente Vision.png",
            isVideo: false,
            title: "Vente Vision",
            description: "E-commerce dashboard with analytics and inventory management",
            github: "https://github.com/",
            live: "http://localhost:5173"
        },
        {
            media: "/images/University Fields.png",
            isVideo: false,
            title: "University Fields",
            description: "A website hosted on AWS EC2, configured with Apache,server administration done remotely.",
            github: "https://github.com/MaheryAndrih1/university_fields",
            live: "https://ec2-13-247-174-249.af-south-1.compute.amazonaws.com/"
        }
    ];

    const ProjectItem = ({ project }) => (
        <div className="w-[50vh] h-[31vh] relative group">
            {project.isVideo ? (
                <video 
                    src={project.media} 
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                />
            ) : (
                <img 
                    src={project.media} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-lg text-white p-4">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-center mb-2">{project.description}</p>
                
                <div className="flex gap-4">
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-purple-800 hover:bg-purple-700 py-1 px-3 rounded-md text-sm transition-colors"
                    >
                        <FaGithub />
                    </a>
                    {project.live && (
                        <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 bg-[var(--color-teal)] hover:bg-[var(--color-primary)] py-1 px-3 rounded-md text-sm transition-colors"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div id="work" className="min-h- bg-[#101010] p-8 overflow-hidden">
            
            <div className="text-[128px] md:text-[86px] font-black tracking-[-0.3em] flex justify-center items-center h-10">
                <span style={{ color: "var(--color-primary)" }}>W</span>
                <span className="text-purple">O</span>
                <span style={{ color: "var(--color-gray)" }}>R</span>
                <span style={{ color: "var(--color-teal)" }}>K</span>
            </div>
            <br /><br /><br />
            <div className="flex flex-col">
                <div className="bg-neutral-950 h-[32vh] py-0.5 overflow-hidden w-screen -ml-8">
                    <div className="carousel-container">
                        <div className="carousel-track">

                            {projects.map((project, index) => (
                                <ProjectItem key={`first-${index}`} project={project} />
                            ))}
                            
                            {projects.map((project, index) => (
                                <ProjectItem key={`second-${index}`} project={project} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second carousel (reverse direction) */}
                <div className="bg-neutral-950 h-[32vh] py-0.5 overflow-hidden w-screen -ml-8">
                    <div className="carousel-container">
                        <div className="carousel-track reverse">
                            
                            {projects.map((project, index) => (
                                <ProjectItem key={`third-${index}`} project={project} />
                            ))}
                            
                            
                            {projects.map((project, index) => (
                                <ProjectItem key={`fourth-${index}`} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

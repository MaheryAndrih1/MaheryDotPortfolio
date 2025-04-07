import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
    // Featured project
    const featuredProject = {
        title: "Techshelf",
        description: "A complete e-commerce platform that streamlines the entire process from shop creation to product management and payment processing. Users can create stores without separate accounts, add products to cart without logging in (with cart saved after registration), like products, rate stores, and purchase from multiple stores in a single order. And many more features not listed here!",
        technologies: ["React.js", "Django REST Framework", "TailwindCSS"],
        images: [
            "/images/techshelf/HomePage.png", 
            "/images/techshelf/ProductListPage.png", 
            "/images/techshelf/SellerDashboard.png", 
            "/images/techshelf/StoresListPage.png"
        ],
        github: "https://github.com/MaheryAndrih1/techshelf",
        live: "https://techshelf-frontend.pages.dev"
    };

    const projects = [
        {
            media: "/videos/Starwars Game.mp4",
            isVideo: true,
            title: "Star Wars Game",
            description: "A space shooter game built with pygame",
            github: "https://github.com/MaheryAndrih1/spaceship-game",
            live: ""
        },
        {
            media: "/images/Snackhub.png",
            isVideo: false,
            title: "Snackhub",
            description: "Food delivery platform, complete e-commerce with payment handled via mobile money (outside the app)",
            github: "https://github.com/MaheryAndrih1/Snackhub"
        },
        {
            media: "/images/University Fields.png",
            isVideo: false,
            title: "University Fields",
            description: "A responsive blog website showcasing current trending university fields, helping students make informed educational decisions.",
            github: "https://github.com/MaheryAndrih1/university_fields",
        }
    ];

    const duplicatedProjects = [...projects, ...projects, ...projects];

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
                        className="flex items-center gap-1 bg-black hover:bg-neutral-800 py-1 px-3 rounded-md text-sm transition-colors border border-purple-800/40"
                    >
                        <FaGithub />
                    </a>
                    {project.live && (
                        <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 bg-black hover:bg-neutral-800 py-1 px-3 rounded-md text-sm transition-colors border border-teal-500/40"
                        >
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    const FeaturedProject = ({ project }) => (
        <div className="bg-neutral-900 rounded-xl p-6 mb-16 shadow-2xl relative">
            <h2 className="text-3xl font-bold mb-3 text-white">
                <span className="text-[var(--color-primary)]">Featured Project: </span>
                {project.title}
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
                {project.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-md cursor-pointer">
                        {project.live ? (
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <img src={image} alt={`${project.title} screenshot ${index+1}`} className="w-full h-60 object-cover" />
                            </a>
                        ) : (
                            <img src={image} alt={`${project.title} screenshot ${index+1}`} className="w-full h-60 object-cover" />
                        )}
                    </div>
                ))}
            </div>
            
            <div className="flex justify-between items-end">
                <div className="flex gap-4">
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black hover:bg-neutral-800 py-2 px-4 rounded-md text-white transition-colors border border-purple-800/40"
                    >
                        GitHub
                    </a>
                    {project.live && (
                        <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black hover:bg-neutral-800 py-2 px-4 rounded-md text-white transition-colors border border-teal-500/40"
                        >
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                </div>
                
                <div className="flex gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-black/40 px-3 py-1 rounded text-xs text-gray-300 border border-purple-800/30">
                            {tech}
                        </span>
                    ))}
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
                
                {/* Featured Project */}
                <div className="max-w-6xl mx-auto w-full px-4">
                    <FeaturedProject project={featuredProject} />
                </div>
                
                {/* Small Projects Title */}
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                    <span className="h-[1px] bg-gray-700 w-24 mr-4"></span>
                    <span>Other Projects</span>
                    <span className="h-[1px] bg-gray-700 w-24 ml-4"></span>
                </h2>
                
                {/* Carousel (reverse direction) */}
                <div className="bg-neutral-950 h-[32vh] py-0.5 overflow-hidden w-screen -ml-8">
                    <div className="carousel-container">
                        <div className="carousel-track reverse">
                            {duplicatedProjects.map((project, index) => (
                                <ProjectItem key={`project-${index}`} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal website to showcase skills and work. Built with clean code and modern design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "https://github.com/abhinandv2003"
    },
    {
        title: "Snake Game",
        description: "A classic Snake game built with Python. Features score tracking, smooth controls, and increasing difficulty.",
        tech: ["Python", "Pygame"],
        link: "#",
        github: "https://github.com/abhinandv2003"
    },
    {
        title: "Calculator App",
        description: "A fully functional calculator with a modern user interface. Handles basic arithmetic operations efficiently.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "https://github.com/abhinandv2003"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card-hover group backdrop-blur-sm overflow-hidden"
                        >
                            {/* Project Preview Placeholder */}
                            <div className="h-52 bg-[#0f0f0f] relative overflow-hidden group-hover:bg-[#0f0f0f]/80 transition-all duration-500 flex items-center justify-center border-b border-white/5">
                                <Code size={48} className="text-gray-700 group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                    <a href={project.link} className="p-3 bg-white rounded-full text-black hover:bg-cyan-400 hover:text-white transition-colors transform hover:scale-110 shadow-lg">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.github} className="p-3 bg-white rounded-full text-black hover:bg-cyan-400 hover:text-white transition-colors transform hover:scale-110 shadow-lg">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

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
        <section id="projects" className="section bg-[#0f172a]">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured Projects
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
                            className="glass rounded-2xl overflow-hidden group border border-white/5"
                        >
                            {/* Project Preview Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] relative overflow-hidden group-hover:from-blue-900/20 group-hover:to-purple-900/20 transition-all duration-500 flex items-center justify-center">
                                <Code size={48} className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.link} className="p-2 bg-white rounded-full text-black hover:bg-blue-400 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.github} className="p-2 bg-white rounded-full text-black hover:bg-blue-400 transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
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

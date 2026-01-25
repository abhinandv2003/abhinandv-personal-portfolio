import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        skills: ["Python", "Java", "C", "JavaScript"]
    },
    {
        category: "Web Development",
        skills: ["HTML5", "CSS3", "React", "Responsive Design"]
    },
    {
        category: "Tools & Libraries",
        skills: ["Pygame", "Git", "VS Code", "MySQL"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card-hover p-8 group backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-cyan-500 pl-4 group-hover:text-cyan-400 transition-colors">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-400 border border-white/5 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

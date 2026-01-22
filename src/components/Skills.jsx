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
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My Skills
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-blue-400 border-b border-white/10 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/10 hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
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

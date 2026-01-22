import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image/Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                            <img
                                src="/Abhinand-V-Image.jpeg"
                                alt="Abhinand V"
                                className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-cyan-900/20 transform transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Glow around the image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                            Crafting digital experiences with <span className="text-cyan-400">passion</span>.
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            I am a final year B.Tech student specializing in Computer Science & Engineering.
                            My passion lies in creating innovative solutions through programming and web development.
                            I believe in the power of technology to solve real-world problems and make a positive impact.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-cyan-500/10 p-4 rounded-xl text-cyan-400 h-fit group-hover:bg-cyan-500/20 transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Education</h4>
                                    <p className="text-gray-400">Bachelor of Technology in CS</p>
                                    <p className="text-sm text-cyan-500/80 font-medium mt-1">Expected Graduation: 2026</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-blue-500/10 p-4 rounded-xl text-blue-400 h-fit group-hover:bg-blue-500/20 transition-colors">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Experience</h4>
                                    <p className="text-gray-400">AI & ML Internship at ICT Academy</p>
                                    <p className="text-sm text-blue-500/80 font-medium mt-1">Gaining Industry Insights</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

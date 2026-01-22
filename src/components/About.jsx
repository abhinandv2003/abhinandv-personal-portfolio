import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section bg-[#0f172a]">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column: Image/Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <img
                                src="/Abhinand-V-Image.jpeg"
                                alt="Abhinand V"
                                className="w-full h-full object-cover rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Getting to know me
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a final year B.Tech student specializing in Computer Science & Engineering.
                            My passion lies in creating innovative solutions through programming and web development.
                            I believe in the power of technology to solve real-world problems and make a positive impact.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-blue-500/10 p-3 rounded-lg text-blue-400 h-fit">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Education</h4>
                                    <p className="text-gray-400">Bachelor of Technology in Computer Science & Engineering</p>
                                    <p className="text-sm text-gray-500">Expected Graduation: 2026</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-purple-500/10 p-3 rounded-lg text-purple-400 h-fit">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Experience</h4>
                                    <p className="text-gray-400">AI & ML Internship</p>
                                    <p className="text-sm text-gray-500">ICT Academy</p>
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

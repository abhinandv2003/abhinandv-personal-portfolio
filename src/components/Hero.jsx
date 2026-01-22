import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
                >
                    Welcome to my portfolio
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
                >
                    Hi, I'm <span className="gradient-text">Abhinand V</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl md:text-3xl font-light text-gray-300 mb-8"
                >
                    Aspiring Software Engineer & <span className="text-blue-400 font-semibold">Web Developer</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed"
                >
                    Passionate about creating innovative solutions through programming and web development.
                    Turning ideas into reality with clean code and modern design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="btn btn-primary flex items-center justify-center gap-2 group"
                    >
                        View My Work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                        href="/ABHINAND-V-RESUME.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline flex items-center justify-center gap-2"
                    >
                        Download Resume
                        <Download size={20} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;

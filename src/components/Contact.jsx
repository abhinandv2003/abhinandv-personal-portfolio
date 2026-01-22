import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section bg-[#0f172a]">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            feel free to reach out!
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/abhinand-v"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>

                            <a
                                href="https://github.com/abhinandv2003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 rounded-xl hover:bg-gray-700 hover:text-white transition-all duration-300 group"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>

                            <a
                                href="https://www.instagram.com/__abhinand__v_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300 group"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>

                            <a
                                href="mailto:contact@example.com"
                                className="p-4 bg-white/5 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 group"
                                aria-label="Email"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full btn btn-primary flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

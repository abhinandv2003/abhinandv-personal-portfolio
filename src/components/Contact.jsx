import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Instagram, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] -z-10 opacity-30"></div>

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl font-bold mb-6 text-white leading-tight">Let's work together!</h3>
                        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                            I'm currently available for freelance work or full-time opportunities.
                            If you have a project that needs some creative touch, I'd love to hear about it.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://linkedin.com/in/abhinand-v"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 group shadow-lg shadow-black/50 backdrop-blur-sm"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={28} />
                            </a>

                            <a
                                href="https://github.com/abhinandv2003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-white/20 hover:text-white transition-all duration-300 group shadow-lg shadow-black/50 backdrop-blur-sm"
                                aria-label="GitHub"
                            >
                                <Github size={28} />
                            </a>

                            <a
                                href="https://www.instagram.com/__abhinand__v_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-pink-500/50 hover:text-pink-500 transition-all duration-300 group shadow-lg shadow-black/50 backdrop-blur-sm"
                                aria-label="Instagram"
                            >
                                <Instagram size={28} />
                            </a>

                            <a
                                href="mailto:contact@example.com"
                                className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-green-500/50 hover:text-green-500 transition-all duration-300 group shadow-lg shadow-black/50 backdrop-blur-sm"
                                aria-label="Email"
                            >
                                <Mail size={28} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden backdrop-blur-sm"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

                        <iframe
                            name="hidden_iframe"
                            id="hidden_iframe"
                            style={{ display: 'none' }}
                            onLoad={() => {
                                const form = document.getElementById("google-form");
                                if (form) {
                                    form.reset();
                                }
                            }}
                        ></iframe>

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                                >
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    id="google-form"
                                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfi_9cf4EM7Ohy2X0BfAHhJX_6YWTFY0T2xlhE-FBYzwWx-_Q/formResponse"
                                    method="POST"
                                    target="hidden_iframe"
                                    className="space-y-6"
                                    onSubmit={() => {
                                        setTimeout(() => {
                                            setIsSubmitted(true);
                                        }, 1000);
                                    }}
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="entry.2088091902"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="entry.905678414"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                        <textarea
                                            name="entry.1256410121"
                                            required
                                            rows="4"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-gray-600 resize-none"
                                            placeholder="Hello, I'd like to talk about..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full btn btn-primary flex items-center justify-center gap-2 group text-lg py-4 rounded-xl"
                                    >
                                        Send Message
                                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

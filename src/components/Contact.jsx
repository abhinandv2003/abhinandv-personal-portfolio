import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Instagram, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                        className="glass p-8 rounded-2xl relative overflow-hidden"
                    >
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
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
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
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="entry.905678414"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                        <textarea
                                            name="entry.1256410121"
                                            required
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

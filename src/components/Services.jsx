import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Database } from 'lucide-react';

const services = [
    {
        icon: <Smartphone size={40} />,
        title: "Responsive Design",
        description: "Creating websites that look and work perfectly on desktops, tablets, and mobile devices."
    },
    {
        icon: <Layout size={40} />,
        title: "UI/UX Design",
        description: "Designing intuitive interfaces that provide an exceptional user experience."
    },
    {
        icon: <Database size={40} />,
        title: "Database Management",
        description: "Designing efficient database structures and ensuring data integrity and security."
    }
];

const Services = () => {
    return (
        <section id="services" className="section relative">
            {/* Background decoration */}
            <div className="absolute center top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-3xl text-center border border-white/5 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group backdrop-blur-sm"
                        >
                            <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-900/20">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

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
            <div className="absolute center top-1/2 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My Services
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-all duration-300 group"
                        >
                            <div className="mb-6 inline-block p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
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

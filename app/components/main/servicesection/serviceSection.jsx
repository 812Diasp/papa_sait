'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaPaintRoller, FaDraftingCompass } from 'react-icons/fa';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const services = [
    {
        icon: <FaTools className="text-4xl text-yellow-400 mb-6 transition-all duration-500 group-hover:text-yellow-500" />,
        title: 'Ремонт',
        description: 'Комплексный ремонт помещений: от черновых работ до чистовой отделки.',
    },
    {
        icon: <FaPaintRoller className="text-4xl text-indigo-400 mb-6 transition-all duration-500 group-hover:text-indigo-500" />,
        title: 'Отделка',
        description: 'Современные и классические отделочные решения, учитывающие стиль вашего интерьера.',
    },
    {
        icon: <FaDraftingCompass className="text-4xl text-green-400 mb-6 transition-all duration-500 group-hover:text-green-500" />,
        title: 'Дизайн‑проекты',
        description: 'Профессиональное проектирование с визуализациями, подбором мебели и материалов.',
    },
];

const ServiceSection = () => {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Заголовок и кнопка */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
                    <div>
                        <p className="text-sm text-blue-400 uppercase tracking-widest font-semibold mb-1">
                            УСЛУГИ
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold">
                            Делаем для <span className="text-blue-400 underline">вас</span>.
                        </h2>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition transform hover:-translate-y-1 hover:shadow-lg">
                            ВСЕ УСЛУГИ
                        </button>
                    </div>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="group bg-gray-800 border border-gray-700 shadow-md rounded-3xl p-8 cursor-pointer transition transform hover:scale-105 hover:shadow-xl"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                            variants={cardVariants}
                        >
                            <div className="flex flex-col items-start">
                                {service.icon}
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-base group-hover:text-gray-100 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;

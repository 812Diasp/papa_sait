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
        icon: <FaTools className="text-3xl text-gray-500 mb-8 group-hover:text-blue-500 transition-colors duration-300" />,
        title: 'Ремонт',
        description: 'Комплексный ремонт помещений: от черновых работ до чистовой отделки.',
    },
    {
        icon: <FaPaintRoller className="text-3xl text-gray-500 mb-8 group-hover:text-blue-500 transition-colors duration-300" />,
        title: 'Отделка',
        description: 'Современные и классические отделочные решения, учитывающие стиль вашего интерьера.',
    },
    {
        icon: <FaDraftingCompass className="text-3xl text-gray-500 mb-8 group-hover:text-blue-500 transition-colors duration-300" />,
        title: 'Дизайн‑проекты',
        description: 'Профессиональное проектирование с визуализациями, подбором мебели и материалов.',
    },
];

const ServiceSection = () => {
    return (
        <section className="bg-white text-black py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Заголовок и кнопка */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
                    <div>
                        <p className="text-sm text-blue-400 uppercase tracking-widest font-semibold mb-1">
                            УСЛУГИ
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Делаем для <span className="text-gray-800 underline">вас</span>.
                        </h2>
                    </div>
                    <div>
                        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                            ВСЕ УСЛУГИ
                        </button>
                    </div>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="group bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition cursor-pointer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                            variants={cardVariants}
                        >
                            <div className="flex flex-col items-start">
                                {service.icon}
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
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
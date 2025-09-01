'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedToolIcon from "@/app/components/main/priceList/AnimatedToolIcon";
import {
    FaTools, FaLayerGroup, FaBoxOpen, FaBolt, FaShower, FaPaintRoller, FaHome, FaCheckCircle
} from 'react-icons/fa';

const iconMap = {
    'Демонтажные работы': FaTools,
    'Выравнивание стен': FaLayerGroup,
    'Устройство полов': FaBoxOpen,
    'Электромонтаж': FaBolt,
    'Сантехника': FaShower,
    'Отделка стен': FaPaintRoller,
    'Отделка потолков': FaHome,
    'Гарантия': FaCheckCircle
};

const services = [
    { feature: 'Демонтажные работы', basic: 'Включено', medium: 'Включено + уборка', premium: 'Полный демонтаж с вывозом мусора' },
    { feature: 'Выравнивание стен', basic: 'Шпаклевка', medium: 'Гипсовая штукатурка', premium: 'Машинная штукатурка + финиш' },
    { feature: 'Устройство полов', basic: 'Цементная стяжка', medium: 'Наливной пол ровнитель', premium: 'Тёплый пол + финиш' },
    { feature: 'Электромонтаж', basic: 'Базовая разводка', medium: 'Точечное освещение + розетки', premium: 'Умный дом' },
    { feature: 'Сантехника', basic: 'Стандартная разводка', medium: 'Современное оборудование', premium: 'Премиальная сантехника' },
    { feature: 'Отделка стен', basic: 'Покраска', medium: 'Обои', premium: 'Декоративная штукатурка' },
    { feature: 'Отделка потолков', basic: 'Шпаклевка и покраска', medium: 'Натяжные/ГКЛ', premium: 'Многоуровневые конструкции' },
    { feature: 'Гарантия', basic: '1 год', medium: '2 года', premium: '5 лет' },
];

const prices = { basic: 'от 15 000 ₽ за м²', medium: 'от 25 000 ₽ за м²', premium: 'от 35 000 ₽ за м²' };

const columnColors = {
    basic: 'bg-gray-900 text-white',
    medium: 'bg-green-600 text-white',
    premium: 'bg-yellow-400 text-black'
};

const iconColorMap = {
    basic: '#ffffff',
    medium: '#ffffff',
    premium: '#000000'
};

const PriceListSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

    return (
        <motion.section ref={ref} className="relative py-16 bg-gray-50 text-gray-900 overflow-hidden" id="price">
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>

                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <motion.div variants={itemVariants} className="flex justify-center mb-4">
                            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                            Стоимость <span className="inline-flex items-center gap-2 text-blue-500 underline">ремонта <AnimatedToolIcon /></span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Выберите подходящий вариант ремонта для вашего дома
                        </motion.p>
                    </div>

                    {/* Мобильная сетка */}
                    <motion.div variants={itemVariants} className="md:hidden grid grid-cols-1 gap-4">
                        {["basic", "medium", "premium"].map(tab => (
                            <div
                                key={tab}
                                className={`rounded-2xl p-4 flex flex-col gap-3 ${columnColors[tab]}`}
                            >
                                <h3 className="text-center font-semibold text-lg mb-2">
                                    {tab === "basic" ? "Базовый" : tab === "medium" ? "Средний" : "Элитный"}
                                </h3>
                                {services.map(row => {
                                    const Icon = iconMap[row.feature];
                                    return (
                                        <div key={row.feature} className="flex items-center gap-2 py-1">
                                            <Icon size={20} color={iconColorMap[tab]} className="flex-shrink-0" />
                                            <span className="text-left w-full text-sm">{row[tab]}</span>
                                        </div>
                                    );
                                })}
                                <div className="mt-3 p-2 rounded-xl font-bold text-center bg-white text-black text-lg">
                                    {prices[tab]}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Десктопная версия */}
                    <motion.div variants={itemVariants} className="hidden md:grid md:grid-cols-4 md:gap-6">
                        <div className="bg-white rounded-2xl p-6 font-semibold flex flex-col gap-5 shadow-inner">
                            <h3 className="text-lg mb-2">Работы</h3>
                            {services.map(row => {
                                const Icon = iconMap[row.feature];
                                return (
                                    <div key={row.feature} className="flex items-center gap-3 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                        <Icon size={28} color="#000" className="flex-shrink-0" />
                                        <span className="text-left w-full">{row.feature}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {["basic","medium","premium"].map(tab => (
                            <div
                                key={tab}
                                className={`rounded-2xl p-6 flex flex-col gap-4 shadow-lg ${columnColors[tab]}`}
                            >
                                <h3 className="text-center font-semibold mb-2 text-lg">
                                    {tab === "basic" ? "Базовый" : tab === "medium" ? "Средний" : "Элитный"}
                                </h3>
                                {services.map(row => {
                                    const Icon = iconMap[row.feature];
                                    return (
                                        <div key={row.feature} className="flex items-center gap-2 py-2 justify-start">
                                            <Icon size={24} color={iconColorMap[tab]} className="flex-shrink-0" />
                                            <span className="text-left w-full">{row[tab]}</span>
                                        </div>
                                    );
                                })}
                                <div className="mt-auto p-3 rounded-xl font-bold text-center bg-white text-black">
                                    {prices[tab]}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </motion.section>
    );
};

export default PriceListSection;

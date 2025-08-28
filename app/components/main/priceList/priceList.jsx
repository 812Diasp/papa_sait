'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import AnimatedToolIcon from "@/app/components/main/priceList/AnimatedToolIcon";
import Image from 'next/image';

const PriceListSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const [activeTab, setActiveTab] = useState('basic');

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const services = [
        {
            feature: 'Демонтажные работы',
            basic: 'Включено',
            medium: 'Включено + уборка',
            premium: 'Полный демонтаж с вывозом мусора'
        },
        {
            feature: 'Выравнивание стен',
            basic: 'Шпаклевка (от 800 ₽/м²)',
            medium: 'Гипсовая штукатурка (от 1200 ₽/м²)',
            premium: 'Машинная штукатурка + финишное выравнивание (от 2500 ₽/м²)'
        },
        {
            feature: 'Устройство полов',
            basic: 'Цементная стяжка',
            medium: 'Наливной пол ровнитель',
            premium: 'Тёплый пол + наливной пол с финишным покрытием'
        },
        {
            feature: 'Электромонтажные работы',
            basic: 'Базовая разводка',
            medium: 'Точечное освещение + розетки',
            premium: 'Умный дом (проект + монтаж)'
        },
        {
            feature: 'Сантехнические работы',
            basic: 'Стандартная разводка',
            medium: 'Современное оборудование',
            premium: 'Премиальная сантехника (Grohe, Hansgrohe)'
        },
        {
            feature: 'Отделка стен',
            basic: 'Покраска водоэмульсионная',
            medium: 'Поклейка обоев (материал клиента)',
            premium: 'Декоративная штукатурка или обои премиум-класса'
        },
        {
            feature: 'Отделка потолков',
            basic: 'Шпаклевка и покраска',
            medium: 'Натяжные или гипсокартонные',
            premium: 'Многоуровневые конструкции с подсветкой'
        },
        {
            feature: 'Гарантия',
            basic: '1 год',
            medium: '2 года',
            premium: '5 лет'
        },
    ];

    const prices = {
        basic: 'от 11 000 ₽/м²',
        medium: 'от 20 000 ₽/м²',
        premium: 'от 30 000 ₽/м²'
    };

    return (
        <motion.section
            ref={ref}
            className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-hidden"
            id="price"
        >
            {/* Анимированные декоративные элементы */}
            <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-gray-400 opacity-10 rotate-45"
                animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Заголовок */}
                    <div className="text-center mb-16">
                        <motion.div variants={itemVariants} className="flex justify-center mb-6">
                            <div className="w-12 h-1 bg-blue-500"></div>
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                        >
                            Стоимость{" "}
                            <span className="inline-flex items-center gap-2 relative text-blue-500">
            ремонта
            <AnimatedToolIcon />
          </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600"
                        >
                            Выберите подходящий вариант ремонта для вашего дома
                        </motion.p>
                    </div>

                    {/* Мобильные табы */}
                    <motion.div
                        variants={containerVariants}
                        className="md:hidden mb-8 bg-gray-100 p-1 rounded-xl border border-gray-300"
                    >
                        <div className="flex">
                            {["basic", "medium", "premium"].map((tab) => (
                                <motion.button
                                    key={tab}
                                    variants={tabVariants}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-3 px-2 font-medium text-sm rounded-lg transition-colors ${
                                        activeTab === tab
                                            ? "bg-blue-500 text-white shadow-md"
                                            : "text-gray-700 hover:text-sky-600"
                                    }`}
                                >
                                    {tab === "basic" && "Базовый"}
                                    {tab === "medium" && "Средний"}
                                    {tab === "premium" && "Элитный"}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Десктопная таблица */}
                    <motion.div
                        variants={itemVariants}
                        className="hidden md:block overflow-hidden shadow-xl rounded-2xl border border-gray-200 bg-white"
                    >
                        <table className="w-full table-auto">
                            <thead className="border-b border-gray-200 text-sm leading-normal bg-gray-50">
                            <tr className="text-gray-800">
                                <th className="py-5 px-8 text-left font-semibold">
                                    Наименование работ
                                </th>
                                <th className="py-5 px-8 text-center font-semibold">Базовый</th>
                                <th className="py-5 px-8 text-center font-semibold">Средний</th>
                                <th className="py-5 px-8 text-center font-semibold">Элитный</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                            {services.map((row, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.05 + 0.3 }}
                                    className="hover:bg-sky-50"
                                >
                                    <td className="py-4 px-8 font-medium">{row.feature}</td>
                                    <td className="py-4 px-8 text-center">{row.basic}</td>
                                    <td className="py-4 px-8 text-center">{row.medium}</td>
                                    <td className="py-4 px-8 text-center">{row.premium}</td>
                                </motion.tr>
                            ))}
                            </tbody>
                            <tfoot className="border-t border-gray-200 text-sm font-semibold bg-gray-50">
                            <tr className="text-gray-900">
                                <td className="py-5 px-8">Цена за м²</td>
                                <td className="py-5 px-8 text-center text-blue-500">11 000 ₽</td>
                                <td className="py-5 px-8 text-center text-blue-500">20 000 ₽</td>
                                <td className="py-5 px-8 text-center text-blue-500">30 000 ₽</td>
                            </tr>
                            </tfoot>
                        </table>
                    </motion.div>

                    {/* Мобильные карточки */}
                    <motion.div variants={containerVariants} className="md:hidden space-y-4">
                        {services.map((row, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-sky-400 transition-colors shadow-sm"
                            >
                                <h3 className="font-semibold text-gray-900 mb-2">{row.feature}</h3>
                                <p className="text-gray-700">{row[activeTab]}</p>
                            </motion.div>
                        ))}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-blue-500 to-sky-600 p-5 rounded-xl shadow-lg text-white"
                        >
                            <p className="font-medium">Цена за м²</p>
                            <p className="text-2xl font-bold mt-1">{prices[activeTab]}</p>
                        </motion.div>
                    </motion.div>

                    {/* Кнопка CTA */}
                    <motion.div variants={itemVariants} className="mt-12 text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative bg-gradient-to-r from-blue-500 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all overflow-hidden"
                        >
                            <span className="relative z-10">Заказать расчет</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-white/20 to-sky-400/20"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>

    );
};

export default PriceListSection;
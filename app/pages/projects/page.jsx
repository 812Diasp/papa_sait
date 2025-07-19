"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
// Мок-данные для проектов
const projects = [
    {
        id: 1,
        title: "Лофт-квартира в центре",
        location: "Москва, ул. Тверская",
        area: "85 м²",
        duration: "7 месяцев",
        description: "Полная перепланировка и отделка квартиры в стиле индустриальный лофт с сохранением исторических элементов.",
        features: ["Стены из декоративного бетона", "Потолки 3.5 метра", "Система умного дома", "Скрытые коммуникации"],
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1615529162924-f8605388463a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
    },
    {
        id: 2,
        title: "Семейное гнездо в Новой Москве",
        location: "Москва, Коммунарка",
        area: "120 м²",
        duration: "6 месяцев",
        description: "Создание современного пространства для семьи с детьми. Функциональные зоны, экологичные материалы.",
        features: ["Двухуровневое освещение", "Мебель на заказ", "Детская с трансформируемым пространством", "Тёплые полы"],
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
    },
    {
        id: 3,
        title: "Минимализм в премиум-классе",
        location: "Санкт-Петербург, Крестовский остров",
        area: "95 м²",
        duration: "9 месяцев",
        description: "Элитная отделка с использованием натуральных материалов: мрамор, дуб, шёлк. Точная проработка деталей.",
        features: ["Итальянская кухня", "Мраморные санузлы", "Система климат-контроля", "Дизайнерское освещение"],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            "https://images.unsplash.com/photo-1583845112269-455bf9de0ff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        ]
    }
];

const ProjectCard = ({ project, index }) => {
    const [activeImage, setActiveImage] = useState(0);

    // Чередование фона: четные - белый, нечетные - черный
    const bgColor = index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white';
    const accentColor = index % 2 === 0 ? 'text-blue-600' : 'text-blue-400';
    const buttonStyle = index % 2 === 0
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-blue-400 hover:bg-blue-500 text-black';

    return (
        <div className={`${bgColor} py-16 px-4 md:px-0`}>
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Галерея */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            <motion.img
                                key={activeImage}
                                src={project.images[activeImage]}
                                alt={project.title}
                                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Миниатюры */}
                            <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
                                {project.images.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx}`}
                                            className={`w-16 h-16 object-cover rounded cursor-pointer transition-all ${
                                                activeImage === idx ? 'ring-2 ring-blue-500 scale-105' : 'opacity-70'
                                            }`}
                                            onClick={() => setActiveImage(idx)}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Декоративные элементы строительства */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 rotate-45 bg-blue-400 opacity-20"></div>
                        </div>
                    </div>

                    {/* Описание проекта */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center mb-2">
                            <div className={`w-8 h-1 ${accentColor} `}></div>
                            <span className="text-sm font-semibold tracking-widest uppercase">Проект #{project.id}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{project.location}</span>
                            </div>

                            <div className="flex items-center">
                                {/*<svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                                {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />*/}
                                {/*</svg>*/}
                                <Image
                                    alt="площадь"
                                    src={index % 2 === 0 ? '/arrow_area_icon_dark.svg' : '/arrow_area_icon_light.svg'}
                                    className="mr-2"
                                    width={24}
                                    height={24}
                                />
                                <span>{project.area}</span>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{project.duration}</span>
                            </div>
                        </div>

                        <p className="mb-6 text-lg opacity-90">{project.description}</p>

                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-3 ${accentColor}`}>Особенности проекта:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/*<div className="flex space-x-4">*/}
                        {/*    <button className={`${buttonStyle} px-6 py-3 rounded-lg font-medium transition-colors flex items-center`}>*/}
                        {/*        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />*/}
                        {/*        </svg>*/}
                        {/*        В закладки*/}
                        {/*    </button>*/}

                        {/*    <button className="border border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors hover:bg-gray-500 hover:bg-opacity-10 flex items-center">*/}
                        {/*        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />*/}
                        {/*        </svg>*/}
                        {/*        Поделиться*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    return (
        <div className="min-h-screen">
            {/* Шапка страницы */}
            {/* Шапка страницы с анимациями как во втором блоке */}
            <header className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center overflow-hidden">
                {/* Анимированные геометрические фигуры */}
                <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rotate-45"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-20 h-20 bg-blue-300 opacity-10 rotate-12"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="flex justify-center mb-6 mt-12">
                        <div className="w-12 h-1 bg-blue-300"></div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Наши проекты</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        Реализованные работы по ремонту и отделке квартир. Каждый проект - уникальное решение с вниманием к деталям.
                    </p>

                    {/* Декоративные элементы */}
                    <div className="absolute bottom-10 left-10 w-10 h-10 rotate-45 bg-white opacity-10"></div>
                    <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white opacity-10"></div>
                </div>
            </header>


            {/* Список проектов */}
            <div className="">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Призыв к действию */}
            <div className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center overflow-hidden">
                {/* Анимированные геометрические фигуры */}
                <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rotate-45"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute top-1/3 left-1/4 w-20 h-20 bg-blue-300 opacity-10 rotate-12"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы создать свой идеальный интерьер?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Оставьте заявку и получите бесплатную консультацию от нашего дизайнера
                    </p>

                    <motion.button
                        className="relative bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Обсудить проект</span>

                        {/* Анимация переливания внутри кнопки */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-white/20 to-blue-400/20"
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.button>

                    {/* Декоративные элементы */}
                    <div className="absolute bottom-10 left-10 w-10 h-10 rotate-45 bg-white opacity-10"></div>
                    <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white opacity-10"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
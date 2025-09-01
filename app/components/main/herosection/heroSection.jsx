'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full text-gray-100 overflow-hidden">
            {/* Фоновое изображение с эффектом параллакса и мягкого зума */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu transition-transform duration-700"
                style={{ backgroundImage: "url('/hero_bg.jpg')" }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.8 }}
            />

            {/* Градиенты и затемнение */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-black/70" />

            {/* Контент */}
            <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-24 md:pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-end">

                    {/* Левый блок */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-black/50 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-2">
                            Внутри — ваш идеал
                        </p>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                            Качественная отделка помещений в Ставрополе
                        </h1>
                        <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed drop-shadow-sm">
                            Мы создаём современные интерьеры, где комфорт сочетается с эстетикой.
                            Подберём материалы, стиль и цвета, которые подчеркнут индивидуальность вашего пространства.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59,130,246,0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition transform"
                        >
                            Получить консультацию
                        </motion.button>
                    </motion.div>

                    {/* Правый блок */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden md:flex flex-col bg-gradient-to-tr from-black/40 via-blue-900/20 to-black/40 p-8 rounded-3xl backdrop-blur-md shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <p className="text-sm font-semibold text-blue-300 uppercase mb-1">Пример проекта</p>
                        <h2 className="text-2xl font-bold mb-1 drop-shadow-md">Жилой комплекс «Резиденция»</h2>
                        <p className="text-gray-300 drop-shadow-sm">Ставрополь, микрорайон Центральный</p>
                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                            Современный ремонт в духе минимализма с акцентами натурального дерева и камня.
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* Нижний градиент для плавного скролла */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default HeroSection;

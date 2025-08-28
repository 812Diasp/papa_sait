'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaUserTie, FaWrench, FaTools, FaCheckCircle, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';

const advantages = [
    {
        icon: FaUserTie,
        title: "Без посредников",
        description: "Работаем напрямую с клиентом, без лишних наценок и бюрократии.",
        gradient: ["#b69a28", "#8a5a00", "#ca8f00"]
    },
    {
        icon: FaWrench,
        title: "Полный цикл работ",
        description: "От проекта до финальной отделки — мы делаем всё сами.",
        gradient: ["#ef4444", "#801414", "#f87171"]
    },
    {
        icon: FaLightbulb,
        title: "Мастера своего дела",
        description: "Опытные специалисты с многолетним стажем, знающие своё дело на отлично.",
        gradient: ["#2ca656", "#106830", "#66ba83"]
    },
    {
        icon: FaCheckCircle,
        title: "Гарантия качества",
        description: "Гарантия на все работы до 5 лет. Мы отвечаем за результат.",
        gradient: ["#3b82f6", "#173d95", "#60a5fa"]
    },
    {
        icon: FaTools,
        title: "Собственные инструменты",
        description: "Полный комплект профессионального оборудования для точности и скорости.",
        gradient: ["#725faa", "#483081", "#8d6caa"]
    },
    {
        icon: FaRocket,
        title: "Скорость выполнения",
        description: "Все проекты выполняются в оговоренные сроки, без задержек.",
        gradient: ["#9e597b", "#73133d", "#9c6080"]
    },
    {
        icon: FaShieldAlt,
        title: "Безопасность",
        description: "Все работы проводятся с соблюдением техники безопасности и стандартов.",
        gradient: ["#14b8a6", "#0a6058", "#2dd4bf"]
    }
];

const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: (dir) => ({ x: dir < 0 ? 200 : -200, opacity: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } })
};

const AdvantagesSection = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const length = advantages.length;

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + length) % length);
    };

    const handleDotClick = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative select-none">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight">
                    Почему выбирают <span className="text-blue-400 underline">нас</span>?
                </h2>

                <div className="relative w-full max-w-3xl mx-auto h-[360px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                            }}
                            className={`absolute top-0 left-0 w-full h-full rounded-3xl p-6 md:p-12 flex flex-col items-center justify-center cursor-pointer`}
                            style={{
                                background: `linear-gradient(135deg, ${advantages[current].gradient.join(',')})`,
                                border: "1px solid rgba(255,255,255,0.15)"
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="p-4 rounded-full mb-4 bg-white/10 backdrop-blur-md flex items-center justify-center"
                            >
                                {React.createElement(advantages[current].icon, { className: 'w-12 h-12 text-white' })}
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md mb-2">{advantages[current].title}</h3>
                            <p className="text-white/90 text-base md:text-lg drop-shadow-sm">{advantages[current].description}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Кнопки */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/60 hover:bg-gray-700/60 transition-all"
                        aria-label="Предыдущее преимущество"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/60 hover:bg-gray-700/60 transition-all"
                        aria-label="Следующее преимущество"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Индикаторы */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {advantages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                                aria-label={`Перейти к ${index + 1} преимуществу`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;

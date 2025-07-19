'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaWrench, FaTools, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

const advantages = [
    {
        icon: <FaUserTie className="w-10 h-10 text-blue-500" />,
        title: "Без посредников",
        description: "Работаем напрямую с клиентом, без лишних наценок и бюрократии."
    },
    {
        icon: <FaWrench className="w-10 h-10 text-blue-500" />,
        title: "Полный цикл работ",
        description: "От проекта до финальной отделки — мы делаем всё сами, без привлечения сторонних бригад."
    },
    {
        icon: <FaTools className="w-10 h-10 text-blue-500" />,
        title: "Мастера своего дела",
        description: "Опытные специалисты с многолетним стажем, знающие своё дело на отлично."
    },
    {
        icon: <FaCheckCircle className="w-10 h-10 text-blue-500" />,
        title: "Гарантия качества",
        description: "Гарантия на все работы до 5 лет. Мы отвечаем за результат."
    },
    {
        icon: <FaLightbulb className="w-10 h-10 text-blue-500" />,
        title: "Собственные инструменты",
        description: "Полный комплект профессионального оборудования для точности и скорости."
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5.667 4 1.333 4-.666 4-1.333" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
        ),
        title: "Однажды сделано — навсегда довольны",
        description: "Вы платите за качество, а не переплачиваете дважды из-за некачественного ремонта."
    }
];

const AdvantagesSection = () => {
    const [current, setCurrent] = useState(0);
    const sectionRef = useRef(null);
    const animationRef = useRef(null);
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);

    // Увеличенные пороговые значения для скролла
    const SCROLL_THRESHOLD = 100; // Для колеса мыши (было 10)
    const SWIPE_THRESHOLD = 150;  // Для касаний (было 50)

    const changeSlide = (direction) => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        animationRef.current = requestAnimationFrame(() => {
            if (direction === 'next' && current < advantages.length - 1) {
                setCurrent(prev => prev + 1);
            } else if (direction === 'prev' && current > 0) {
                setCurrent(prev => prev - 1);
            }
        });
    };

    const shouldBlockScroll = (direction) => {
        if (direction === 'down' && current < advantages.length - 1) return true;
        if (direction === 'up' && current > 0) return true;
        return false;
    };

    const handleWheel = (e) => {
        if (!sectionRef.current.contains(e.target)) return;

        const direction = e.deltaY > 0 ? 'down' : 'up';

        if (!shouldBlockScroll(direction)) return;

        // Увеличенный порог срабатывания
        if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

        e.preventDefault();
        e.stopPropagation();

        if (e.deltaY > SCROLL_THRESHOLD) {
            changeSlide('next');
        } else if (e.deltaY < -SCROLL_THRESHOLD) {
            changeSlide('prev');
        }
    };

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        if (!sectionRef.current.contains(e.target)) return;

        const touchY = e.touches[0].clientY;
        const direction = touchY < touchStartY.current ? 'down' : 'up';

        if (!shouldBlockScroll(direction)) return;

        e.preventDefault();
        touchEndY.current = touchY;
    };

    const handleTouchEnd = () => {
        const diff = touchStartY.current - touchEndY.current;
        const direction = diff > 0 ? 'down' : 'up';

        if (!shouldBlockScroll(direction)) return;

        // Увеличенный порог свайпа
        if (Math.abs(diff) < SWIPE_THRESHOLD) return;

        if (diff > SWIPE_THRESHOLD) {
            changeSlide('next');
        } else if (diff < -SWIPE_THRESHOLD) {
            changeSlide('prev');
        }
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        section.addEventListener('wheel', handleWheel, { passive: false });
        section.addEventListener('touchstart', handleTouchStart, { passive: false });
        section.addEventListener('touchmove', handleTouchMove, { passive: false });
        section.addEventListener('touchend', handleTouchEnd);

        return () => {
            section.removeEventListener('wheel', handleWheel);
            section.removeEventListener('touchstart', handleTouchStart);
            section.removeEventListener('touchmove', handleTouchMove);
            section.removeEventListener('touchend', handleTouchEnd);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [current]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
            }
        })
    };

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-20 bg-black text-white relative overflow-hidden h-[60vh] select-none"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/10 pointer-events-none"></div>

            <div className="h-full flex flex-col items-center justify-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
                    Почему выбирают <span className="text-blue-400">нас?</span>
                </h2>

                <div className="relative h-64 md:h-[480px] w-full max-w-3xl flex items-center justify-center">
                    {current > 0 && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-16 h-16 opacity-30 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                    )}

                    {current < advantages.length - 1 && (
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-16 h-16 opacity-30 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    )}

                    <AnimatePresence initial={false} custom={current}>
                        <motion.div
                            key={current}
                            custom={current}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute w-full max-w-3xl p-6 md:p-12 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-2xl"
                        >
                            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                                <div className="p-4 bg-blue-500/10 rounded-full mb-2 md:mb-4 glow">
                                    {advantages[current].icon}
                                </div>
                                <h3 className="text-xl md:text-3xl font-bold">{advantages[current].title}</h3>
                                <p className="text-gray-300 text-base md:text-lg">{advantages[current].description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={() => changeSlide('prev')}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/60 hover:bg-gray-700/60 text-white z-20 transition-all ${
                            current === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
                        }`}
                        disabled={current === 0}
                        aria-label="Предыдущее преимущество"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => changeSlide('next')}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/60 hover:bg-gray-700/60 text-white z-20 transition-all ${
                            current === advantages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
                        }`}
                        disabled={current === advantages.length - 1}
                        aria-label="Следующее преимущество"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
                        {advantages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (animationRef.current) {
                                        cancelAnimationFrame(animationRef.current);
                                    }
                                    setCurrent(index);
                                }}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                                    current === index ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
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
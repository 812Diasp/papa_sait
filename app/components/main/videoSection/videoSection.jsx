'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/video_thumb.jpeg')" }}
        >
            {/* Фоновая заливка для затемнения */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Основной контент */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl text-white"
                >
                    {/* Подзаголовок */}
                    <p className="uppercase tracking-widest text-sm font-semibold mb-2 text-blue-300">О нас</p>

                    {/* Заголовок */}
                    <h1 className="text-2xl md:text-xl font-bold leading-tight mb-6">
                        Мы — команда профессионалов, которая специализируется на качественной отделке квартир под ключ.
                    </h1>
                    <p className="text-sm font-bold leading-tight mb-6">
                    Наши мастера имеют большой опыт в области ремонта и отделки, а материалы, которые мы используем, соответствуют высоким стандартам качества.
                    </p>
                    {/* Текст авторства */}
                    <p className="text-sm text-gray-300 mb-8">Jessica Point, CEO</p>

                    {/* Кнопка Play */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-14 h-14 border border-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
                    >
                        <FaPlay className="text-white" />
                    </button>
                </motion.div>
            </div>

            {/* Модальное окно с видео */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <Dialog.Panel className="w-full max-w-3xl bg-black rounded-xl overflow-hidden shadow-lg">
                    {/* Элемент для видео */}
                    <div className="relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Intro Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </Dialog.Panel>
            </Dialog>
        </section>
    );
};

export default VideoSection;
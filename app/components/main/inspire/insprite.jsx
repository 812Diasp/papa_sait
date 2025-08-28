'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Insprite = () => {
    return (
        <section className="relative bg-black">
            <motion.div
                className="min-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white p-8 md:p-12 relative overflow-hidden"
                style={{ backgroundImage: "url(/herobg.jpg)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
            >
                {/* Темный оверлей для затемнения фона */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Контент поверх оверлея */}
                <motion.div
                    className="relative z-10 text-center max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm md:text-base mb-2 uppercase tracking-widest text-gray-300 drop-shadow-md font-mono">
                        Наши работы вдохновляют
                    </p>
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-6 drop-shadow-lg">
                        Посмотрите, что мы сможем сделать вместе.
                    </h1>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black', boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer uppercase border-2 border-white text-white px-6 py-2 rounded-full font-medium transition-colors"
                    >
                        Все проекты
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Insprite;

'use client';

import React from 'react';
import { FaPhone } from 'react-icons/fa';

const FloatingPhoneCTA = () => {
    return (
        <a
            href="tel:+79001234567"
            className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-16 h-16 rounded-full bg-blue-500 text-white shadow-lg
        hover:bg-blue-600 transition-all duration-300 ease-in-out
        animate-pulse hover:animate-none
        transform hover:scale-110
        cursor-pointer
        group
      "
            aria-label="Позвоните нам"
        >
            {/* Иконка телефона */}
            <FaPhone className="w-6 h-6" />

            {/* Эффект блик при наведении */}
            <span className="
        absolute -top-3 -right-3 w-12 h-12 rounded-full
        bg-gradient-to-r from-blue-400 to-purple-500 opacity-0
        group-hover:opacity-30 blur-md transition-opacity
      "></span>

            {/* Прыгающий эффект через анимацию */}
            <span className="
        absolute inset-0 rounded-full border-2 border-blue-300
        animate-ping opacity-50
      "></span>
        </a>
    );
};

export default FloatingPhoneCTA;
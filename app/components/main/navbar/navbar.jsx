'use client'
import React, { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-20">
            <nav className="flex items-center justify-between px-4 sm:px-8 py-4 bg-black/80 backdrop-blur-md">

                <div className="text-xl sm:text-2xl font-bold"> <Link href={'/'} className="hover:text-blue-400 transition">ОтделкаСтав.ру</Link></div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-blue-400 transition">Услуги</a>
                    <Link href={'/pages/projects'} className="hover:text-blue-400 transition">Проекты</Link>
                    <Link href={'/pages/contact'} className="hover:text-blue-400 transition">Контакты</Link>
                    <a href="tel:+71234567890" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition">
                        +7 (123) 456-78-90
                    </a>
                </div>

                {/* Mobile Burger Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md px-4 py-2">
                    <a
                        href="#"
                        className="block py-2 hover:text-blue-400 transition"
                        onClick={toggleMenu}
                    >
                        Услуги
                    </a>
                    <a
                        href="#"
                        className="block py-2 hover:text-blue-400 transition"
                        onClick={toggleMenu}
                    >
                        Проекты
                    </a>
                    <a
                        href="#"
                        className="block py-2 hover:text-blue-400 transition"
                        onClick={toggleMenu}
                    >
                        Контакты
                    </a>
                    <a
                        href="tel:+71234567890"
                        className="block py-2 text-blue-400 font-medium"
                        onClick={toggleMenu}
                    >
                        Позвонить: +7 (123) 456-78-90
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
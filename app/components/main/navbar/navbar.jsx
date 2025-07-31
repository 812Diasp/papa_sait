'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-black/95' : 'bg-black/80'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200">
                            ОтделкаСтав.ру
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/pages/services"
                            className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Услуги
                        </Link>
                        <Link
                            href="/pages/projects"
                            className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Проекты
                        </Link>
                        <Link
                            href="/pages/contact"
                            className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Контакты
                        </Link>
                        <a
                            href="tel:+71234567890"
                            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
                        >
                            +7 (123) 456-78-90
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Открыть меню</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
                    <Link
                        href="/pages/services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-gray-900 transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        Услуги
                    </Link>
                    <Link
                        href="/pages/projects"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-gray-900 transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        Проекты
                    </Link>
                    <Link
                        href="/pages/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-gray-900 transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        Контакты
                    </Link>
                    <a
                        href="tel:+71234567890"
                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-400 bg-gray-900"
                        onClick={toggleMenu}
                    >
                        Позвонить: +7 (123) 456-78-90
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
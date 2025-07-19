import React from 'react';
import {FaInstagram, FaPhone, FaWhatsapp} from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0e0f1a] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-700 pt-12">
                {/* Блок: Лого + описание */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">ОтделкаСтав.ру</h2>
                    <h3 className="text-sm font-semibold text-white mb-2">О нас</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Мы профессионально отделываем квартиры и дома и даже бани.
                        Наша работа - сочетание професионализма, надежности и доступности.
                        Закажите у нас долговечный и профессиональный ремонт и получите опыт мастеров и лучшее качество за обьективную и разумную цену.
                    </p>
                </div>

                {/* Блок: Навигация */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Навигация</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href={'/pages/projects'} className="hover:text-white transition">Проекты</Link></li>
                        <li><a href="#" className="hover:text-white transition">Как мы работаем</a></li>
                        <li><a href="#" className="hover:text-white transition">Прайс-лист</a></li>
                        <li><Link href={'/pages/contact'}  className="hover:text-white transition">Контакты</Link></li>
                    </ul>
                </div>

                {/* Блок: Соцсети */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Подпишитесь на нас и посоветуйте нас знакомым за скидку 10%</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center space-x-3">
                            <FaInstagram className="text-white" />
                            <span>@stav_otdelka</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaWhatsapp className="text-white" />
                            <span>@stav_otdelka</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaPhone className="text-white" />
                            <a href="tel:+79991234567" className="hover:text-gray-400 transition-colors text-blue-600">
                                +7 (999) 123-45-67
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Нижняя строка */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-xs text-gray-500 text-center">
                © 2025 ОтделкаСтав.ру. Права защищены.
            </div>
        </footer>
    );
};

export default Footer;

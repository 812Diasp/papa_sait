import React from 'react';

const HeroSection = () => {
    return (
        <section
            className="relative h-screen overflow-hidden text-gray-100 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero_bg.jpg')" }}
        >

        {/* Pseudo-elements для стилизации */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-black before:via-transparent before:to-black before:opacity-60 after:absolute after:bottom-0 after:left-0 after:w-full after:h-32 after:bg-gradient-to-t after:from-black after:to-transparent" />



            {/* Основной контент, опущен вниз */}
            <div className="relative z-0 flex flex-col justify-end h-full px-4 pb-24 md:pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    {/* Левый блок */}
                    <div className="bg-black/50 p-12 rounded-2xl backdrop-blur-sm">
                        <p className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-2">
                            Внутри — ваш идеал
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            Качественная отделка помещений в Ставрополе
                        </h1>
                        <p className="text-gray-300 mb-6 text-sm leading-tight">
                            Мы создаём современные интерьеры, где комфорт сочетается с эстетикой.<br/>
                            Подберём материалы, стиль и цвета, которые подчеркнут индивидуальность вашего пространства.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
                            Получить консультацию
                        </button>
                    </div>

                    {/* Правый блок */}
                    <div className="hidden md:block bg-black/50 p-12 rounded-2xl backdrop-blur-sm">
                        <p className="text-sm font-semibold text-blue-300 uppercase mb-1">Пример проекта</p>
                        <h2 className="text-2xl font-bold mb-1">Жилой комплекс «Резиденция»</h2>
                        <p className="text-gray-300">Ставрополь, микрорайон Центральный</p>
                        <p className="mt-3 text-sm text-gray-400">
                            Современный ремонт в духе минимализма с акцентами натурального дерева и камня.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";

const ProjectGallery = () => {
    // Массив проектов
    const projects = [
        {
            title: 'Проект «Дом у леса»',
            description: 'Ремонт и дизайн интерьера загородного дома.',
            image: 'https://avatars.mds.yandex.net/i?id=7b80a7b5ee8fbbe015f8253eaec026da_l-12487149-images-thumbs&n=13',
            height: 'h-64',
            mt: '',
        },
        {
            title: 'Офис на Невском',
            description: 'Капитальный ремонт офисного помещения под ключ.',
            image: 'https://avatars.mds.yandex.net/i?id=26ab7d10e3065936f969858b1da27f01_l-2918686-images-thumbs&n=13',
            height: 'h-48',
            mt: 'mt-8',
        },
        {
            title: 'Студия в центре',
            description: 'Стильный дизайн-проект маленькой квартиры-студии.',
            image: 'https://avatars.mds.yandex.net/i?id=66ccbc210a606e16f30e16f2c290ee5b_l-5858006-images-thumbs&n=13',
            height: 'h-64',
            mt: '',
        },
        {
            title: 'Квартира для семьи',
            description: 'Перепланировка и отделка трехкомнатной квартиры.',
            image: 'https://i.pinimg.com/originals/42/b2/21/42b221b9d7166b5f312fa80507285947.jpg',
            height: 'h-56',
            mt: 'mt-8',
        },
        {
            title: 'Элитный ремонт',
            description: 'Премиум отделка апартаментов на набережной.',
            image: 'https://i.pinimg.com/originals/08/10/50/08105027373a64da0e0dd1bc60935bc1.jpg',
            height: 'h-48',
            mt: '',
        },
    ];

    return (
        <section className="bg-white text-black py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Заголовок и кнопка в стиле ServiceSection */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
                    <div>
                        <p className="text-sm text-blue-400 uppercase tracking-widest font-semibold mb-1">
                            ГАЛЕРЕЯ
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Наши <span className="text-gray-800">работы</span>.
                        </h2>
                    </div>
                    <div>
                        <Link href={'/pages/projects'}>
                            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                                НАШИ ПРОЕКТЫ
                            </button>
                        </Link>
                    </div>
                </div>

                {/* === Галерея с неровными карточками (Masonry-style layout) === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                    {projects.map((project, index) => (
                        <AnimatedCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Компонент анимированной карточки
const AnimatedCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.1,
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            className={`bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 ${project.mt}`}
        >
            <img
                src={project.image}
                alt={project.title}
                className={`w-full ${project.height} object-cover`}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectGallery;
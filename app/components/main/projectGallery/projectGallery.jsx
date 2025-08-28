'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";

const projects = [
    {
        title: 'Проект «Дом у леса»',
        description: 'Ремонт и дизайн интерьера загородного дома.',
        image: 'https://avatars.mds.yandex.net/i?id=7b80a7b5ee8fbbe015f8253eaec026da_l-12487149-images-thumbs&n=13',
        gradient: ['#1f2937', '#374151', '#4b5563'], // темные строгие градиенты
        height: 'h-64',
        mt: '',
    },
    {
        title: 'Офис на Невском',
        description: 'Капитальный ремонт офисного помещения под ключ.',
        image: 'https://avatars.mds.yandex.net/i?id=26ab7d10e3065936f969858b1da27f01_l-2918686-images-thumbs&n=13',
        gradient: ['#111827', '#1f2937', '#374151'],
        height: 'h-48',
        mt: 'mt-8',
    },
    {
        title: 'Студия в центре',
        description: 'Стильный дизайн-проект маленькой квартиры-студии.',
        image: 'https://avatars.mds.yandex.net/i?id=66ccbc210a606e16f30e16f2c290ee5b_l-5858006-images-thumbs&n=13',
        gradient: ['#1e293b', '#283046', '#3b4252'],
        height: 'h-64',
        mt: '',
    },
    {
        title: 'Квартира для семьи',
        description: 'Перепланировка и отделка трехкомнатной квартиры.',
        image: 'https://i.pinimg.com/originals/42/b2/21/42b221b9d7166b5f312fa80507285947.jpg',
        gradient: ['#111827', '#1e293b', '#374151'],
        height: 'h-56',
        mt: 'mt-8',
    },
    {
        title: 'Элитный ремонт',
        description: 'Премиум отделка апартаментов на набережной.',
        image: 'https://i.pinimg.com/originals/08/10/50/08105027373a64da0e0dd1bc60935bc1.jpg',
        gradient: ['#1f2937', '#374151', '#4b5563'],
        height: 'h-48',
        mt: '',
    },
];

const ProjectGallery = () => {
    return (
        <section className="bg-gray-900 text-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Заголовок и кнопка */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
                    <div>
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">
                            ГАЛЕРЕЯ
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Наши <span className="text-gray-100 underline">работы</span>.
                        </h2>
                    </div>
                    <div>
                        <Link href={'/pages/projects'}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition transform hover:-translate-y-1 hover:shadow-lg">
                                НАШИ ПРОЕКТЫ
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Галерея */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                    {projects.map((project, index) => (
                        <AnimatedCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

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
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-xl overflow-hidden shadow-md border border-gray-700 cursor-pointer transform ${project.mt} transition-shadow hover:shadow-lg`}
        >
            <motion.div
                className={`absolute inset-0`}
                style={{
                    background: `linear-gradient(135deg, ${project.gradient.join(',')})`,
                }}
                whileHover={{ backgroundPosition: "200% 0%" }}
            />
            <img
                src={project.image}
                alt={project.title}
                className={`w-full ${project.height} object-cover relative z-10`}
            />
            <div className="p-4 relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-1 border-b border-gray-700 pb-1">
                    {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectGallery;

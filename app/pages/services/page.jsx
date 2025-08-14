'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: "Комплексный ремонт",
        description: "Полный цикл работ от черновой отделки до финишных покрытий",
        price: "от 8 000 ₽/м²",
        duration: "3-9 месяцев",
        features: [
            "Демонтажные работы",
            "Электрика и сантехника",
            "Выравнивание стен и потолков",
            "Черновая и чистовая отделка",
            "Укладка напольных покрытий",
            "Установка сантехники"
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 2,
        title: "Дизайнерский ремонт",
        description: "Ремонт с разработкой дизайн-проекта и авторским надзором",
        price: "от 15 000 ₽/м²",
        duration: "4-12 месяцев",
        features: [
            "Разработка индивидуального дизайн-проекта",
            "Комплексный ремонт премиум-класса",
            "Использование качественных и интересных материалов",
            "Подбор мебели и декора"
        ],
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 3,
        title: "Косметический ремонт",
        description: "Обновление интерьера без изменения планировки",
        price: "от 4 000 ₽/м²",
        duration: "2-4 недели",
        features: [
            "Обои или покраска стен",
            "Замена напольных покрытий",
            "Обновление сантехники",
            "Замена розеток и выключателей",
            "Покраска потолков",
            "Установка плинтусов"
        ],
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/o7vr6triv79d1-KZ/image;s=1600x800"},
    {
        id: 4,
        title: "Отделка ванных комнат",
        description: "Качественная отделка санузлов под ключ",
        price: "от 15 000 ₽/м²",
        duration: "3-6 недель",
        features: [
            "Гидроизоляция",
            "Укладка плитки",
            "Установка сантехники",
            "Монтаж теплого пола",
            "Стеклянные перегородки"
        ],
        image: '/otdelka/photo-bathrom.png'},
    {
        id: 5,
        title: "Отделка кухни",
        description: "Современная отделка кухонного пространства",
        price: "от 10 000 ₽/м²",
        duration: "3-6 недель",
        features: [
            "Фартук из керамики или стекла",
            "Подвесные потолки",
            "Укладка напольных покрытий",
            "Монтаж кухонного гарнитура",
            "Освещение рабочей зоны"
        ],
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 6,
        title: "Элитная отделка",
        description: "Премиальная отделка с использованием люксовых материалов",
        price: "от 25 000 ₽/м²",
        duration: "6-16 месяцев",
        features: [
            "Эксклюзивные материалы",
            "Итальянская сантехника",
            "Натуральный камень",
            "Дизайнерские обои"
        ],
        image: "/otdelka/photo_2025-08-14_10-05-02.jpg"
    }
];

const ServiceCard = ({ service, index }) => {
    const bgColor = index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white';
    const accentColor = index % 2 === 0 ? 'text-blue-600' : 'text-blue-400';
    const buttonStyle = index % 2 === 0
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-blue-400 hover:bg-blue-500 text-black';

    return (
        <div className={`${bgColor} py-16 px-4 md:px-0`}>
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Изображение услуги */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="relative">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={800}
                                height={600}
                                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-xl"
                            />
                            {/* Декоративные элементы */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 rotate-45 bg-blue-400 opacity-20"></div>
                        </div>
                    </motion.div>

                    {/* Описание услуги */}
                    <motion.div
                        className="md:w-1/2 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center mb-2">
                            <div className={`w-8 h-1 ${accentColor}`}></div>
                            <span className="text-sm font-semibold tracking-widest uppercase">Услуга #{service.id}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                        <p className="text-lg opacity-90 mb-6">{service.description}</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{service.price}</span>
                            </div>

                            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{service.duration}</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-3 ${accentColor}`}>Что входит в услугу:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {service.features.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                                        viewport={{ once: true }}
                                    >
                                        <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <motion.button
                            className={`${buttonStyle} px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto text-center`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Заказать услугу
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            {/* Шапка страницы */}
            <header className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center overflow-hidden">
                {/* Анимированные элементы */}
                <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rotate-45"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-16 h-1 bg-blue-300 rounded-full" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Наши услуги
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Полный спектр услуг по ремонту и отделке помещений любого типа
                    </motion.p>
                </div>
            </header>

            {/* Список услуг */}
            <div className="">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Призыв к действию */}
            <div className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rotate-45"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Заинтересовали наши услуги?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Оставьте заявку и получите бесплатную консультацию от нашего специалиста
                    </p>

                    <motion.button
                        className="relative bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Оставить заявку</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-white/20 to-blue-400/20"
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
'use client'
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white overflow-hidden relative">
            {/* Floating Background Elements - улучшены анимации */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-600/10 blur-xl"
                animate={{
                    x: [0, 40, 0, -20, 0],
                    y: [0, -30, 20, -10, 0],
                    scale: [1, 1.1, 0.9, 1.05, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-600/10 blur-xl"
                animate={{
                    x: [0, -50, 30, -20, 0],
                    y: [0, 40, -20, 30, 0],
                    rotate: [0, 5, -5, 3, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Добавим дополнительные фоновые элементы для большего эффекта */}
            <motion.div
                className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-cyan-600/10 blur-lg"
                animate={{
                    x: [0, 30, -20, 10, 0],
                    y: [0, 20, -30, 15, 0],
                    scale: [1, 1.2, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Hero Section - улучшены анимации входа */}
            <header className="relative py-20 md:py-28 text-center">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{
                            duration: 1.2,
                            type: 'spring',
                            stiffness: 100,
                            damping: 10
                        }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white"
                        initial={{ opacity: 0, y: -30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            type: 'spring',
                            stiffness: 120
                        }}
                    >
                        Контакты
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            type: 'spring',
                            stiffness: 100
                        }}
                    >
                        Свяжитесь с нами удобным для вас способом
                    </motion.p>
                </div>
            </header>

            {/* Main Content - улучшены анимации карточек */}
            <section className="container mx-auto px-4 pb-20 md:pb-32 max-w-4xl">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {/* Left Column */}
                    <motion.div
                        className="space-y-8"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.5
                        }}
                    >
                        <ContactItem
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                            title="Email"
                            items={["info@example.com", "support@example.com"]}
                            color="from-blue-500 to-cyan-400"
                            delay={0.7}
                        />

                        <ContactItem
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            }
                            title="Телефон"
                            items={["+7 (123) 456-78-90", "+7 (987) 654-32-10"]}
                            color="from-purple-500 to-blue-400"
                            delay={0.8}
                        />
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="space-y-8"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.5
                        }}
                    >
                        <ContactItem
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            }
                            title="Адрес"
                            items={["г. Москва, ул. Примерная, 123", "Бизнес центр 'Пример', офис 456"]}
                            color="from-amber-500 to-yellow-400"
                            delay={0.9}
                        />

                        <ContactItem
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            title="Часы работы"
                            items={["Пн-Пт: 9:00 - 18:00", "Сб-Вс: выходной"]}
                            color="from-emerald-500 to-teal-400"
                            delay={1.0}
                        />
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

// Enhanced Contact Item Component with better animations
const ContactItem = ({ icon, title, items, color = 'from-blue-500 to-blue-400', delay = 0 }) => {
    return (
        <motion.div
            className="group relative cursor-auto overflow-hidden rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay,
                type: 'spring',
                stiffness: 120,
                damping: 12
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Gradient Background on Hover - улучшена анимация */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{
                    opacity: 0.2,
                    scale: 1.1
                }}
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
            />

            {/* Pulsing animation for the icon */}
            <motion.div
                className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${color} relative`}
                whileHover={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
                {icon}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    whileHover={{
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        scale: 1.2,
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                />
            </motion.div>

            <div className="relative z-10">
                <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{
                        x: 2,
                        textShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
                    }}
                >
                    {title}
                </motion.h3>
                <div className="space-y-2">
                    {items.map((item, index) => (
                        <motion.p
                            key={index}
                            className="text-blue-100"
                            whileHover={{
                                x: 3,
                                color: '#ffffff'
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {item}
                        </motion.p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
'use client'
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white">
            {/* Анимированный заголовок */}
            <header className="relative py-20 text-center overflow-hidden">
                {/* Анимированные элементы */}
                <motion.div
                    className="absolute top-20 left-10 w-8 h-8 rotate-45 bg-yellow-400 opacity-20"
                    animate={{
                        rotate: [45, 135, 225, 315, 45],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-blue-400 opacity-20"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-1 bg-blue-400"></div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Контакты</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                        Свяжитесь с нами удобным для вас способом. Мы всегда рады помочь!
                    </p>
                </div>
            </header>

            {/* Основной контент */}
            <div className="container mx-auto px-4 pb-20 max-w-6xl relative">
                <motion.div
                    className="bg-gradient-to-r from-blue-800/90 to-blue-600/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                        {/* Контактная информация */}
                        <div className="space-y-8">
                            <ContactItem
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                                title="Email"
                                items={["info@example.com", "support@example.com"]}
                            />

                            <ContactItem
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                }
                                title="Телефон"
                                items={["+7 (123) 456-78-90", "+7 (987) 654-32-10"]}
                            />

                            <ContactItem
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                }
                                title="Адрес"
                                items={["г. Москва, ул. Примерная, 123", "Бизнес центр 'Пример', офис 456"]}
                            />

                            <ContactItem
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                title="Часы работы"
                                items={["Пн-Пт: 9:00 - 18:00", "Сб-Вс: выходной"]}
                            />
                        </div>

                        {/* Форма обратной связи */}
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Ваше имя</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Иван Иванов"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Сообщение</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Ваше сообщение..."
                                    />
                                </div>

                                <motion.button
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors relative overflow-hidden mt-6"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">Отправить сообщение</span>
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
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Компонент контактного элемента
const ContactItem = ({ icon, title, items }) => {
    return (
        <motion.div
            className="flex items-start space-x-4"
            whileHover={{ x: 5 }}
        >
            <div className="bg-blue-500/20 p-3 rounded-full text-blue-300">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-lg text-blue-200">{title}</h3>
                {items.map((item, index) => (
                    <p key={index} className="text-white/80">{item}</p>
                ))}
            </div>
        </motion.div>
    );
};

export default ContactPage;
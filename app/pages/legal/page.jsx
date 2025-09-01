'use client'
import { motion } from 'framer-motion';

const LegalPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white overflow-hidden relative">
            {/* Плавающие фоновые акценты */}
            <FloatingCircle color="bg-blue-600/10" position="top-1/4 left-1/4" size="w-32 h-32" delay={0} />
            <FloatingCircle color="bg-purple-600/10" position="bottom-1/3 right-1/4" size="w-40 h-40" delay={2} />
            <FloatingCircle color="bg-cyan-600/10" position="top-2/3 left-1/3" size="w-24 h-24" delay={1} />

            {/* Хедер */}
            <header className="relative py-20 md:py-28 text-center">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1.2, type: 'spring', stiffness: 100, damping: 10 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white"
                        initial={{ opacity: 0, y: -30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 120 }}
                    >
                        Юридическая информация
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
                    >
                        Реквизиты компании и условия предоставления услуг
                    </motion.p>
                </div>
            </header>

            {/* Контент */}
            <section className="container mx-auto px-4 pb-20 md:pb-32 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Выделенная секция с информацией о компании и контактах */}
                    <InfoCard title="О компании" color="from-blue-500 to-cyan-400">
                        <p className="text-blue-100 mb-4">
                            Наша компания специализируется на предоставлении качественных услуг по ремонту и отделке помещений.
                            Мы работаем с 2015 года и за это время выполнили более 500 успешных проектов.
                        </p>

                        <div className="bg-white/5 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Реквизиты компании</h3>
                            <ul className="space-y-2 text-blue-100">
                                <li><span className="text-white">Организация:</span> ООО «ОтделкаСтав»</li>
                                <li><span className="text-white">ИНН/КПП:</span> 7700000000 / 770001001</li>
                                <li><span className="text-white">ОГРН:</span> 1227700000000</li>
                                <li><span className="text-white">Юр. адрес:</span> 123456, г. Ставрополь, ул. Примерная, д. 7</li>
                            </ul>
                        </div>
                    </InfoCard>

                    {/* Контакты */}
                    <InfoCard title="Контакты" color="from-purple-500 to-blue-400">
                        <ul className="space-y-3 text-blue-100">
                            <li className="flex items-start">
                                <span className="text-white min-w-[120px]">Телефон:</span>
                                <span>+7 (999) 123-45-67</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white min-w-[120px]">Email:</span>
                                <span>info@otdelkastav.ru</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white min-w-[120px]">Юридический:</span>
                                <span>legal@otdelkastav.ru</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white min-w-[120px]">График работы:</span>
                                <span>Пн–Пт: 09:00–18:00<br/>Сб: 10:00–15:00<br/>Вс: выходной</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white min-w-[120px]">Адрес офиса:</span>
                                <span>г. Ставрополь, ул. Центральная, д. 15, офис 305</span>
                            </li>
                        </ul>

                        <div className="mt-4 p-4 bg-white/5 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Как нас найти</h3>
                            <p className="text-blue-100 text-sm">
                                Наш офис находится в центре города, в 5 минутах ходьбы от центральной площади.
                                Рядом расположена парковка для клиентов.
                            </p>
                        </div>
                    </InfoCard>

                    {/* Правовая информация */}
                    <InfoCard title="Правовые сведения" color="from-amber-500 to-yellow-400">
                        <div className="space-y-4 text-blue-100">
                            <SectionMini
                                id="offer-mini"
                                title="Публичная оферта"
                                text="Информация на сайте, включая цены на услуги, является публичной офертой в соответствии со ст. 437 ГК РФ. Заказ услуг через сайт означает акцепт данной оферты."
                            />
                            <SectionMini
                                id="privacy-mini"
                                title="Персональные данные"
                                text="Мы обрабатываем персональные данные исключительно для целей оказания услуг и ответа на запросы клиентов. Все данные защищены в соответствии с Федеральным законом № 152-ФЗ."
                            />
                            <SectionMini
                                id="ads-mini"
                                title="Реклама"
                                text="Вся информация о свойствах работ и скидках является достоверной. Мы не используем недобросовестные методы рекламы."
                            />
                        </div>
                    </InfoCard>

                    {/* Условия предоставления услуг */}
                    <InfoCard title="Условия предоставления услуг" color="from-emerald-500 to-teal-400">
                        <div className="space-y-4 text-blue-100">
                            <SectionMini
                                id="services-mini"
                                title="Оплата услуг"
                                text="Оплата услуг производится по договору. Мы принимаем наличные и безналичные расчеты. Возможна рассрочка платежа."
                            />
                            <SectionMini
                                id="warranty-mini"
                                title="Гарантии"
                                text="На все виды работ предоставляется гарантия 2 года. Гарантийные обязательства фиксируются в договоре."
                            />
                            <SectionMini
                                id="complaints-mini"
                                title="Претензии"
                                text="Все претензии по качеству выполненных работ принимаются по электронной почте legal@otdelkastav.ru в течение 10 дней с момента завершения работ."
                            />
                        </div>
                    </InfoCard>
                </div>

                {/* Юр. примечание */}
                <div className="mt-10 p-4 border border-white/10 rounded-lg bg-white/5">
                    <p className="text-xs text-blue-200/70 text-center">
                        Настоящая страница носит информационный характер. Для получения детальной информации о юридических аспектах
                        сотрудничества обращайтесь по электронной почте legal@otdelkastav.ru. Реквизиты и условия могут быть изменены без предварительного уведомления.
                    </p>
                </div>
            </section>
        </div>
    );
};

/* ---------- UI блоки (в стиле твоего сайта) ---------- */
const FloatingCircle = ({ color, position, size, delay }) => (
    <motion.div
        className={`absolute ${position} ${size} rounded-full ${color} blur-xl`}
        animate={{ x: [0, 40, 0, -20, 0], y: [0, -30, 20, -10, 0], scale: [1, 1.1, 0.9, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay }}
    />
);

const CardShell = ({ children, color }) => (
    <motion.div
        className={`group relative overflow-hidden rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        whileHover={{ y: -6, scale: 1.01, boxShadow: '0 10px 25px -5px rgba(59,130,246,0.2)' }}
    >
        <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${color}`}
        />
        <div className="relative z-10">{children}</div>
    </motion.div>
);

const InfoCard = ({ title, color, children }) => (
    <CardShell color={color}>
        <div className="mb-3">
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {children}
    </CardShell>
);

const SectionMini = ({ id, title, text }) => (
    <div id={id} className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
        <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-blue-100/90">{text}</p>
    </div>
);

export default LegalPage;
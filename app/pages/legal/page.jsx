'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const LegalPage = () => {
    const [acceptedPD, setAcceptedPD] = useState(false);
    const [acceptedOffer, setAcceptedOffer] = useState(false);

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
                        Контакты и юридическая информация
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
                    >
                        Свяжитесь с нами и ознакомьтесь с условиями публичной оферты и обработки персональных данных
                    </motion.p>
                </div>
            </header>

            {/* Контент */}
            <section className="container mx-auto px-4 pb-20 md:pb-32 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Реквизиты / контакты */}
                    <InfoCard title="Реквизиты и контакты" color="from-blue-500 to-cyan-400">
                        <ul className="space-y-2 text-blue-100">
                            {/* ЗАМЕНИ ниже на свои данные */}
                            <li><span className="text-white">Организация:</span> ООО «ОтделкаСтав»</li>
                            <li><span className="text-white">ИНН/КПП:</span> 7700000000 / 770001001</li>
                            <li><span className="text-white">ОГРН:</span> 1227700000000</li>
                            <li><span className="text-white">Юр. адрес:</span> 123456, г. Ставрополь, ул. Примерная, д. 7</li>
                            <li><span className="text-white">Email:</span> legal@otdelkastav.ru</li>
                            <li><span className="text-white">Телефон:</span> +7 (999) 123-45-67</li>
                            <li><span className="text-white">График:</span> Пн–Пт 09:00–18:00 (МСК)</li>
                        </ul>
                        <p className="mt-4 text-xs text-blue-200/80">
                            Обращаясь к нам, вы принимаете условия публичной оферты и даёте согласие на обработку персональных данных.
                        </p>
                    </InfoCard>

                    {/* Форма */}
                    <FormCard title="Форма обращения" color="from-purple-500 to-blue-400">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (!acceptedPD || !acceptedOffer) return;
                                // TODO: отправка формы
                                alert('Заявка отправлена');
                            }}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input label="Имя" name="name" required />
                                <Input label="Телефон" name="phone" required />
                            </div>
                            <Input label="E-mail" name="email" type="email" required />
                            <Textarea label="Сообщение" name="message" required />

                            {/* Чекбоксы согласий */}
                            <div className="space-y-3 text-sm">
                                <label className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 accent-blue-500"
                                        checked={acceptedPD}
                                        onChange={(e) => setAcceptedPD(e.target.checked)}
                                        required
                                    />
                                    <span className="text-blue-100">
                    Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                                        <a href="/pages/legal#privacy" className="text-white underline underline-offset-4">
                      Политикой конфиденциальности
                    </a>
                    .
                  </span>
                                </label>

                                <label className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 accent-blue-500"
                                        checked={acceptedOffer}
                                        onChange={(e) => setAcceptedOffer(e.target.checked)}
                                        required
                                    />
                                    <span className="text-blue-100">
                    Я ознакомлен(а) и принимаю условия{' '}
                                        <a href="/pages/legal#offer" className="text-white underline underline-offset-4">
                      Публичной оферты
                    </a>
                    .
                  </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={!acceptedPD || !acceptedOffer}
                                className="w-full rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 px-4 py-3 font-semibold transition"
                            >
                                Отправить обращение
                            </button>

                            <p className="text-xs text-blue-200/70">
                                Отправка формы = акцепт оферты (полное и безоговорочное принятие условий). Соглашение
                                заключается в порядке ст. 437–438 ГК РФ.
                            </p>
                        </form>
                    </FormCard>

                    {/* Оферта и Политика (кратко) */}
                    <InfoCard title="Правовые сведения (кратко)" color="from-amber-500 to-yellow-400">
                        <div className="space-y-4 text-blue-100">
                            <SectionMini
                                id="offer-mini"
                                title="Публичная оферта"
                                text="Настоящая информация на сайте, включая формы заказа/обращения и указанные цены, является публичной офертой для неопределённого круга лиц. Совершение действий по размещению заказа, оплате или отправке формы считается акцептом оферты."
                            />
                            <SectionMini
                                id="privacy-mini"
                                title="Персональные данные"
                                text="Мы обрабатываем ПДн на основании согласия субъекта, строго для целей ответа на обращение и оказания услуг. Хранение и защита ПДн осуществляются в соответствии с 152-ФЗ. Вы можете отозвать согласие, направив запрос на email."
                            />
                            <SectionMini
                                id="ads-mini"
                                title="Реклама и обещания"
                                text="Все сведения о свойствах работ и скидках — достоверны и не создают ложных ожиданий. Мы избегаем недостоверной/недобросовестной рекламы."
                            />
                            <div className="pt-2 text-xs text-blue-200/70">
                                Полные тексты: <a href="/pages/legal#offer" className="underline underline-offset-4">Оферта</a> ·{' '}
                                <a href="/pages/legal#privacy" className="underline underline-offset-4">Политика</a>
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Развёрнутые секции (можно вынести на /pages/legal) */}
                <div id="offer" className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <LegalBlock title="Публичная оферта" color="from-emerald-500 to-teal-400">
                        <ol className="list-decimal pl-5 space-y-3 text-blue-100">
                            <li><b>Предмет.</b> Исполнитель оказывает услуги по отделке и ремонту помещений; условия, объём и стоимость уточняются в заявке/сметe.</li>
                            <li><b>Оферта.</b> Информация на сайте с ценами/формами — публичная оферта. Исполнитель выражает волю заключить договор с любым, кто акцептует условия.</li>
                            <li><b>Акцепт.</b> Отправка формы, оформление заказа и/или оплата = полный и безоговорочный акцепт оферты.</li>
                            <li><b>Оплата и сроки.</b> Порядок оплаты, график работ и гарантии фиксируются в смете/заказ-наряде.</li>
                            <li><b>ПДн.</b> Заказчик предоставляет ПДн добровольно; цели и сроки обработки определены Политикой конфиденциальности.</li>
                            <li><b>Ответственность.</b> Стороны несут ответственность по законодательству РФ; претензии направляются на legal@otdelkastav.ru.</li>
                            <li><b>Действие оферты.</b> С момента публикации на сайте до её отзыва/замены. Актуальная редакция — на этой странице.</li>
                        </ol>
                        <p className="mt-4 text-xs text-blue-200/70">
                            Основание: ст. 437–438 ГК РФ о публичной оферте и акцепте. :contentReference[oaicite:0]
                        </p>
                    </LegalBlock>

                    <LegalBlock id="privacy" title="Политика конфиденциальности (кратко)" color="from-sky-500 to-indigo-400">
                        <ul className="list-disc pl-5 space-y-3 text-blue-100">
                            <li><b>Оператор ПДн:</b> ООО «ОтделкаСтав» (ИНН …).</li>
                            <li><b>Состав ПДн:</b> имя, телефон, email, адрес объекта, иные сведения из формы.</li>
                            <li><b>Цели:</b> обработка обращений, подготовка смет, исполнение договора, улучшение сервиса.</li>
                            <li><b>Правовое основание:</b> согласие субъекта ПДн; договор; требования закона.</li>
                            <li><b>Действия с ПДн:</b> сбор, запись, систематизация, хранение, уточнение, использование, обезличивание, блокирование и уничтожение.</li>
                            <li><b>Хранение:</b> до достижения целей/истечения сроков хранения; затем уничтожение/обезличивание.</li>
                            <li><b>Права субъекта:</b> доступ, уточнение, отзыв согласия, требование блокирования/удаления.</li>
                        </ul>
                        <p className="mt-4 text-xs text-blue-200/70">
                            Основание: 152-ФЗ «О персональных данных», в т.ч. требования к согласию субъекта (ст. 9). :contentReference[oaicite:1]
                        </p>
                    </LegalBlock>
                </div>

                {/* Юр. примечание */}
                <div className="mt-10 text-xs text-blue-200/70">
                    Настоящая страница носит информационный характер и не является юридической консультацией. Для адаптации под ваш кейс рекомендуем проверку юристом.
                    Требования к рекламе соблюдаются по 38-ФЗ «О рекламе» (добросовестность/достоверность). :contentReference[oaicite:2]
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

const FormCard = ({ title, color, children }) => (
    <CardShell color={color}>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        {children}
    </CardShell>
);

const Input = ({ label, type = 'text', name, required }) => (
    <label className="block">
        <span className="text-sm text-blue-100">{label}</span>
        <input
            type={type}
            name={name}
            required={required}
            className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
        />
    </label>
);

const Textarea = ({ label, name, required }) => (
    <label className="block">
        <span className="text-sm text-blue-100">{label}</span>
        <textarea
            name={name}
            required={required}
            rows={4}
            className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
        />
    </label>
);

const LegalBlock = ({ id, title, color, children }) => (
    <CardShell color={color}>
        <div id={id} className="mb-3">
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div>{children}</div>
    </CardShell>
);

const SectionMini = ({ id, title, text }) => (
    <div id={id}>
        <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-blue-100/90">{text}</p>
    </div>
);

export default LegalPage;

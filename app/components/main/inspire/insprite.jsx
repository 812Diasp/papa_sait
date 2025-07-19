import React from 'react';

const Insprite = () => {
    return (
        <section className="bg-white">
            <div
                className="min-h-[400px]  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white p-8 md:p-12  relative"
                style={{ backgroundImage: "url(/herobg.jpg)" }}
            >
                {/* Темный оверлей для затемнения фона */}
                <div className="absolute inset-0 bg-black/50 "></div>

                {/* Контент поверх оверлея */}
                <div className="relative z-10 text-center">
                    <p className="text-sm md:text-base mb-2 opacity-90 font-mono uppercase inter-400">
                        Наши работы вдохновляют
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 inter-600">
                        Посмотрите, что мы сможем сделать вместе.
                    </h1>
                    <button className="cursor-pointer uppercase bg-transparent border-2 inter-400 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                        все проекты
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Insprite;
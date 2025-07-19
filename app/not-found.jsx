import React from "react";

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-stone-100 p-8">
            {/* Фоновые элементы - строительные материалы */}
            <div className="absolute -left-20 -top-20 h-64 w-64 animate-float rounded-lg bg-gradient-to-br from-amber-200 to-amber-300 opacity-30 blur-xl"></div>
            <div className="absolute -right-20 bottom-0 h-64 w-64 animate-float rounded-lg bg-gradient-to-br from-gray-300 to-gray-400 opacity-30 blur-xl animation-delay-2000"></div>
            <div className="absolute bottom-1/2 right-1/2 h-64 w-64 animate-float rounded-lg bg-gradient-to-br from-stone-200 to-stone-300 opacity-30 blur-xl animation-delay-4000"></div>

            {/* Строительные элементы интерфейса */}
            <div className="absolute left-10 top-10 h-12 w-12 rotate-45 bg-yellow-300 opacity-20"></div>
            <div className="absolute right-10 bottom-10 h-16 w-16 rotate-12 bg-blue-200 opacity-20"></div>
            <div className="absolute bottom-1/3 left-1/4 h-8 w-24 bg-gray-400 opacity-20"></div>

            {/* Основное содержимое в виде "строительной площадки" */}
            <div className="relative z-10 flex w-full max-w-2xl flex-col items-center rounded-lg border-2 border-dashed border-gray-400 bg-white/80 p-8 text-center backdrop-blur-sm">
                {/* "Незавершенный" заголовок */}
                <h1 className="text-9xl font-bold text-stone-800">
          <span className="relative">
            4
            <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-red-500"></span>
          </span>
                    <span className="relative mx-2">
            0
            <span className="absolute -bottom-2 -left-2 h-6 w-2 bg-blue-500"></span>
          </span>
                    <span className="relative">
            4
            <span className="absolute -right-4 bottom-0 h-2 w-8 bg-amber-500"></span>
          </span>
                </h1>

                {/* Подзаголовок с эффектом "в процессе" */}
                <h2 className="mb-6 mt-4 text-3xl font-semibold text-stone-800 sm:text-4xl">
          <span className="relative inline-block">
            Страница в процессе отделки
            <span className="absolute -right-6 top-0 h-6 w-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDEzSDEzVjE5SDE1VjE1SDE5VjEzTTcgMTNINlYxNUg3VjE5SDlWMTVIMTBWMTlIMTJWMTVIMTBWMTNIN1YxMk0xMiA2TDE0LjEyIDguMTJMMTMgOS4yNEwxNS4yNCAxMS41TDE3LjUgOS4yNEwxOS4xMiAxMC44N0wyMSA5TDE1IDNMMTIgNk0xMS41IDkuMjVMMTMgNy44NEwxNC41IDkuMjVMMTYgNy44NEwxMS41IDMuMzRMNyA3Ljg0TDguNSA5LjI1TDEwIDcuODRMMTEuNSA5LjI1WiIgLz48L3N2Zz4=')] bg-contain opacity-60"></span>
          </span>
                </h2>

                {/* Описание в стиле строительства */}
                <p className="mb-8 max-w-lg text-lg text-stone-600">
                    Похоже, вы зашли на участок, где ещё идут отделочные работы. Наши
                    мастера уже работают над этим разделом. А пока предлагаем вернуться на
                    готовые страницы.
                </p>

                {/* Кнопка в стиле строительства */}
                <a
                    href="/"
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-amber-500 hover:to-amber-700 hover:shadow-xl"
                >
          <span className="relative z-10 flex items-center">
            <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Вернуться на главную
          </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-200 to-amber-300 opacity-30 transition-transform duration-500 group-hover:translate-x-0"></span>
                </a>

                {/* Строительные элементы в подвале */}
                <div className="mt-12 flex space-x-4">
                    <div className="h-8 w-8 rotate-45 bg-yellow-400 opacity-30"></div>
                    <div className="h-10 w-2 bg-gray-400 opacity-30"></div>
                    <div className="h-6 w-6 rounded-full bg-red-400 opacity-30"></div>
                    <div className="h-8 w-12 bg-blue-400 opacity-30"></div>
                </div>
            </div>

            {/* "Предупреждающая лента" */}
            <div className="absolute bottom-0 left-0 right-0 flex h-8 items-center justify-center bg-[repeating-linear-gradient(45deg,_#f59e0b,_#f59e0b_20px,_#000_20px,_#000_40px)] bg-contain text-xs font-bold uppercase tracking-widest text-white">
                Внимание! Идут отделочные работы
            </div>
        </div>
    );
};

export default NotFound;
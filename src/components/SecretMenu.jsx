import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SecretMenu = () => {
    const { theme, setTheme, themeOptions } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Menu Options */}
            <div className={`transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
                <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl mb-4 flex flex-col gap-1 min-w-[160px]">
                    <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-white/5 mb-1">
                        Secret Menu
                    </div>
                    {themeOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => {
                                setTheme(option.id);
                                setIsOpen(false); // Optional: close on select
                            }}
                            className={`
                                text-left px-3 py-2 text-sm rounded-lg transition-all duration-200
                                ${theme === option.id
                                    ? 'bg-cyan-500/20 text-cyan-400 font-semibold shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }
                            `}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300
                    hover:scale-110 active:scale-95
                    ${isOpen ? 'bg-red-500 rotate-45 shadow-red-500/30' : 'bg-cyan-500 shadow-cyan-500/30'}
                `}
                title="Secret Menu"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default SecretMenu;

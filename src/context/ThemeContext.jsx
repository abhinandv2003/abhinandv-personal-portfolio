import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

    useEffect(() => {
        // Remove all previous theme classes
        const themes = [
            'theme-default',
            'theme-glass',
            'theme-brutal',
            'theme-minimal',
            'theme-liquid'
        ];
        document.body.classList.remove(...themes);

        // Add new theme class
        document.body.classList.add(`theme-${theme}`);

    }, [theme]);

    // Options for the menu
    const themeOptions = [
        { id: 'glass', name: 'Glassmorphism' },
        { id: 'brutal', name: 'Neo-brutalism' },
        { id: 'minimal', name: 'Minimalism' },
        { id: 'liquid', name: 'Liquid Glass' },
        { id: 'default', name: 'Default' },
    ];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeOptions }}>
            {children}
        </ThemeContext.Provider>
    );
};

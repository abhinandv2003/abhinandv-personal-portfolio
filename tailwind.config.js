/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#0a0a0a',
                card: '#111111',
                primary: '#00d2ff',
                secondary: '#3a7bd5',
                accent: '#8b5cf6',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
                'gradient-text': 'linear-gradient(to right, #00d2ff, #8b5cf6)',
            }
        },
    },
    plugins: [],
}

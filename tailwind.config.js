/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Off-White Inspired Color Palette
                cream: '#F5F5F0',
                'off-white': '#FAF9F6',
                charcoal: '#1A1A1A',
                stone: '#9A9A9A',
                accent: '#E8E4DD',
                highlight: '#C9B99A',
                'warm-gray': '#E5E2DB',
                'dark-cream': '#EBE8E0',
            },
            fontFamily: {
                display: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['clamp(2.75rem, 7vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'display-md': ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                'heading-lg': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
                'heading-md': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
                'body-lg': ['1.125rem', { lineHeight: '1.7' }],
                'body': ['1rem', { lineHeight: '1.6' }],
                'caption': ['0.875rem', { lineHeight: '1.5' }],
                'small': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
                '128': '32rem',
                '144': '36rem',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
}

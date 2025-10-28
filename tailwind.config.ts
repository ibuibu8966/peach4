import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SENRITSU Brand Color Palette - Professional Business Style
        brand: {
          50: '#E6F3F7',   // Lightest Teal
          100: '#CCE7EF',  // Very Light Teal
          200: '#99CFE0',  // Light Teal
          300: '#66B7D0',  // Soft Teal
          400: '#339FC1',  // Medium Teal
          500: '#00698C',  // Primary Brand Color (SENRITSU Main)
          600: '#00516C',  // Darker Teal (Hover)
          700: '#003D51',  // Deep Teal
          800: '#002936',  // Very Dark Teal
          900: '#001520',  // Darkest Teal
        },
        neutral: {
          white: '#FFFFFF',
          50: '#F7F7F7',   // Background Light Gray
          100: '#EEEEEE',  // Very Light Gray
          200: '#DDDDDD',  // Light Gray
          300: '#CCCCCC',  // Medium Light Gray
          400: '#BBBBBB',  // Medium Gray
          500: '#999999',  // Gray
          600: '#777777',  // Medium Dark Gray
          700: '#555555',  // Dark Gray
          800: '#333333',  // Very Dark Gray
          900: '#000000',  // Black
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-hover': 'scale-hover 0.75s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'scale-hover': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;

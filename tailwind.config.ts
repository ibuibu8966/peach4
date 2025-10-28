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
        // Premium Cyber Blue Color Palette
        cyber: {
          50: '#F0FBFF',   // Lightest - Ice Blue
          100: '#D6F3FF',  // Very Light Blue
          200: '#A8E7FF',  // Light Blue
          300: '#7ADBFF',  // Soft Blue
          400: '#4CCFFF',  // Medium Blue
          500: '#00D9FF',  // Primary Neon Cyan
          600: '#00B8E6',  // Bright Cyan
          700: '#0099CC',  // Deep Cyan
          800: '#007AB3',  // Dark Cyan
          900: '#005B99',  // Darkest Blue
        },
        neon: {
          blue: '#00D9FF',    // Primary Neon Blue
          cyan: '#00FFFF',    // Electric Cyan
          purple: '#8B5CF6',  // Neon Purple
          violet: '#A78BFA',  // Electric Violet
          pink: '#FF00FF',    // Neon Pink
          magenta: '#FF006E', // Neon Magenta
          green: '#00FF9F',   // Neon Green
          emerald: '#10B981', // Electric Emerald
        },
        dark: {
          bg: '#000814',      // Premium Dark Background
          surface: '#0D1B2A',  // Card Surface
          elevated: '#1B263B', // Elevated Surface
          border: '#1E293B',   // Border Color
          accent: '#415A77',   // Accent Border
        },
        premium: {
          gold: '#FFD700',
          silver: '#C0C0C0',
          platinum: '#E5E4E2',
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3), 0 0 60px rgba(0, 217, 255, 0.2)',
        'neon-blue-strong': '0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.5), 0 0 90px rgba(0, 217, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)',
        'neon-green': '0 0 20px rgba(0, 255, 159, 0.5), 0 0 40px rgba(0, 255, 159, 0.3)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 217, 255, 0.2)',
        'premium-hover': '0 30px 90px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 217, 255, 0.4)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)',
          },
          '50%': {
            opacity: '0.9',
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.7), 0 0 60px rgba(0, 217, 255, 0.5)',
          },
        },
        'glow': {
          'from': {
            textShadow: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.5), 0 0 30px rgba(0, 217, 255, 0.5)',
          },
          'to': {
            textShadow: '0 0 20px rgba(0, 217, 255, 0.9), 0 0 30px rgba(0, 217, 255, 0.7), 0 0 50px rgba(0, 217, 255, 0.5)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
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
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;

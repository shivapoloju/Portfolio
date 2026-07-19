/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030303',
        card: '#0b0b0c',
        borderline: '#1c1c1e',
        primary: {
          DEFAULT: '#fbbf24', // Amber/Yellow accent
          dark: '#d97706',
        },
        secondary: {
          DEFAULT: '#38bdf8', // Light blue/cyan
          dark: '#0284c7',
        },
        accent: {
          DEFAULT: '#a855f7', // Purple
          dark: '#7e22ce',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Brand blue (cobalt)
          dark: '#1D4ED8',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#059669', // Emerald, status only
          dark: '#047857',
          light: '#34D399',
        },
        dark: {
          DEFAULT: '#0A0A0A', // Near-black, neutral
          card: '#141414',
          cardBorder: '#262626',
          lighter: '#1F1F1F',
          text: '#FAFAFA',
          muted: '#A3A3A3',
        },
        light: {
          DEFAULT: '#FFFFFF',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          cardBorder: '#E2E8F0',
          text: '#0F172A',
          muted: '#64748B',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
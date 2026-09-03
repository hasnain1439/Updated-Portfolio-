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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Vibrant Blue
          dark: '#1D4ED8',
          light: '#60A5FA',
          glow: 'rgba(59, 130, 246, 0.4)',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald Green
          dark: '#047857',
          light: '#34D399',
        },
        accent: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },
        dark: {
          DEFAULT: '#0B0F19', // Very deep slate/navy
          card: '#111827',
          cardBorder: '#1F2937',
          lighter: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
        'card-glow': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
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
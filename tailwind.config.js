/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The main Royal Blue used for buttons, icons, and headings
        primary: {
          DEFAULT: '#2563EB', // Royal Blue (Hero Button, "About Me" underline)
          dark: '#1D4ED8',    // Deep Blue (Hover states, Gradient End)
          light: '#3B82F6',   // Bright Blue (Icons, Gradient Start)
        },
        // The Emerald Green used for Node.js/MongoDB cards
        secondary: {
          DEFAULT: '#22C55E', // Emerald Green (Icons)
          light: '#4ADE80',   // Lighter Green (Accents)
        },
        // Dark colors for text and backgrounds
        dark: {
          DEFAULT: '#1F2937', // Dark Slate (Section Headings)
          lighter: '#374151', // Medium Dark (Card Headings)
          footer: '#111827',  // Very Dark Blue/Gray (Footer Background)
        },
        // Gray scales for body text and borders
        gray: {
          body: '#6B7280',    // Cool Gray (Paragraph text)
          border: '#E5E7EB',  // Light Gray (Borders)
          bg: '#F9FAFB',     // Off-White (Page Background)
        },
        // Background colors for the glass/light cards
        surface: {
          blue: '#EFF6FF',    // Pale Blue (React/TS Card Bg)
          green: '#F0FDF4',   // Pale Green (Node/Mongo Card Bg)
          white: '#FFFFFF',   // Pure White
        }
      },
      // You can also extend backgroundImage if you want a custom name for that Project Card gradient
      backgroundImage: {
        'project-gradient': 'linear-gradient(to bottom right, #3B82F6, #1E3A8A)',
      }
    },
  },
  plugins: [],
}
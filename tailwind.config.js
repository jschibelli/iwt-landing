/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2563eb',
        'brand-secondary': '#0ea5e9',
        'brand-accent': '#f59e42',
        midnightNavy: '#0B1F36',
        tealGreen: '#15B8A1',
        orangeSunset: '#F59E0B',
        purple: {
          DEFAULT: '#7F5AF0',
          light: '#9D7EF2',
          dark: '#6A4AD0'
        },
        orange: {
          DEFAULT: '#FF6B3B',
          dark: '#E55A2A'
        },
        charcoal: {
          DEFAULT: '#333333',
          800: '#242424',
          900: '#1A1A1A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['Roboto', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'bg-tealGreen',
    'text-tealGreen',
  ],
}; 
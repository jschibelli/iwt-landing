/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnightNavy: '#0B1F36',
        tealGreen: '#15B8A1',
        orangeSunset: '#F59E0B',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-tealGreen',
    'text-tealGreen',
  ],
}; 
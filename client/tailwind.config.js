/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfdee',
          200: '#99fbf0',
          300: '#5eecea',
          400: '#2cdddb',
          500: '#14c2c3',
          600: '#0eaab5',
          700: '#108591',
          800: '#146a75',
          900: '#165160',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#ffd8a9',
          300: '#ffc078',
          400: '#ffa84d',
          500: '#ff9324',
          600: '#fd7e14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
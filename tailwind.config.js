/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-brand': '#F8824C',
        'white-25': 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
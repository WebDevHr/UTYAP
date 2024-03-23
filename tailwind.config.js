/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'serif',],
      gentiumplus: ['"Gentium Plus"', 'sans-serif',],
      sacramento: ['Sacramento', 'sans-serif',],
    },
  },
  plugins: [],
}


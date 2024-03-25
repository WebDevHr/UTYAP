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
      bebasneue: ['"Bebas Neue"', 'sans-serif',],
      sacramento: ['Sacramento', 'sans-serif',],
      workbench: ['Workbench', 'serif',],
      ubuntu: ['Ubuntu', 'sans-serif',],
      custom: ['Anton',]
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#161622',
        secondary:{
          DEFAULT: '#ff9c01',
          100: '#ff9001',
          200: '#ff8e01'
        },
        black:{
          DEFAULT: '#000',
          100: '#1e1e2d',
          200: '#232533'
        },
        gray: 'cdcde0'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pextraLight: ['Pextra Light', 'Poppins', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['Poppins-Regular', 'italic', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pblack: ['Poppins-Black', 'Poppins', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'Poppins', 'sans-serif'],


      },
    },
  },
  
  plugins: [],
}


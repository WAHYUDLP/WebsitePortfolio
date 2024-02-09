/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1d4ed8',
        dark:'#172554',
        medium:'#60a5fa',
        T: '#1D2951',
      },
      screens:{
      '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        firstColor:'#3d3e42',
        secondColor:'#31333b',
        thirdColor: '#ffc86b',
        forthColor: '#f9f9f9',
        fifthColor:'#b6b7b9',
        sixthColor: '#58595b',
      },
      fontFamily:{
        'title-font': ['Source Serif Pro'],
        'font-text': ['Hind']
      },
      keyframes: {
        topbottom: {
          '0%, 100%': { transform:' translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        topbottom: 'topbottom 0.9s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
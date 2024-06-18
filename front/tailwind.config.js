/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'black': '#0F0E0E',
      'white': '#EDE1C8',
      'brown': '#8E5229',
      'green': '#AEE862',
      'pink': '#EA607C',
      DEFAULT: '#0F0E0E'
    },
    fontFamily: {
      'main': ['Quicksand', 'sans-serif'],
      'sans': ['Quicksand', 'sans-serif',
      defaultTheme.fontFamily.sans]
    },
    borderRadius: {
      'main': '25px',
      'mobile': '20px',
      'input': '6px',
    },
    boxShadow: {
      'intern': "inset 8px 8px 8px #DFCFAE99, inset -8px -8px 8px #F8F2E666",
      'extern': "8px 8px 8px #DFCFAE99, -8px -8px 8px #F8F2E666",
    },
    fontSize: {
      xxs: '.5rem',
      xs: '.75rem',
      sm: '1rem',
      base: '1.2rem',
      lg: '1.3rem',
      xl: '1.5rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4rem',
      '6xl': '4.5rem',
    },
    extend: {
      lineHeight: {
        'large' : '1.8rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '3.5rem',
        '6xl': '5.5rem'
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#090909'
        },
        yellow: {
          light: '#ffff00'
        }
      },
      fontFamily: {
        'roboto': ['roboto']
      },
      inset: {
        '30%': '30%',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      spacing: {
        '6px': '6px',
        '3px': '3px',
        '10px': '10px',
        '30px': '30px',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

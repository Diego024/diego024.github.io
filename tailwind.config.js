module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#0b0a0c',
          medium: '#262529',
          light: '#aaa9ab'
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
        '20%': '20%',
        '100%': '100%',
        '100vh': '100vh'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      spacing: {
        '6px': '6px',
        '3px': '3px',
        '10px': '10px',
        '30px': '30px',
        '300px': '300px',
        '350px': '350px',
        '450px': '450px',
        '33%': '33.33%',
        '35%': '35%',
        '50%': '50%',
        '60%': '60%',
        '80%': '80%',
        '100%': '100%',
        'screen': '100vh',
        '35%': '35%',
        '5%': '5%',
      },
      backgroundSize: {
        '100%': 'auto 100%'
      },
      maxWidth: {
        '1/3': '33.33%'
      },
      backgroundImage: theme => ({
        'pan_son': "url('../img/pan&son.jpg')",
        'helice': "url('../img/helice.jpg')",
        'beershooter': "url('../img/beershooter.jpg')",
        'binomio': "url('../img/binomio.jpg')",
        'ilu': "url('../img/ilu.jpg')",
        'suiza': "url('../img/suiza.jpg')",
        'startbrandt': "url('../img/startbrandt.jpg')",
        'terramonte': "url('../img/terramonte.jpg')",
        'barbaro': "url('../img/barbaro.jpg')",
        'elipsis': "url('../img/elipsis.png')",
        'tony_romas': "url('../img/tony_romas.jpg')",
        'soho': "url('../img/soho.jpg')",
        'oink_grill': "url('../img/oink_oink_grill.jpg')",
        'bennigans': "url('../img/bennigans.jpg')",
        'esquina_kurt': "url('../img/esquina_kurt.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const { colors } = require("@material-ui/core");

module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        
        'carousel': '68rem',
        'wrapper' : '54rem',
        'dialogWidth' : '44rem',
        'dialogHeight': '64rem',
        'mobileWidth': '24rem',
        'mobileHeight': '17rem',
        'card':'32rem',
        'search-bar': '50rem',
        'search-result':'38rem',
        'trailer-carousel': '54rem',
        'trailer-carousel-h':'34rem'
      },
      colors:{
          nav:"#121212",
          card:"#1a1a1a"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  
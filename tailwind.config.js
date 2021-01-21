module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        
        'carousel': '64rem',
        'wrapper' : '54rem',
        'dialogWidth' : '44rem',
        'dialogHeight': '64rem',
        'mobileWidth': '24rem',
        'mobileHeight': '17rem',
        'card':'32rem',
        'search-bar': '50rem',
        'search-result':'38rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  
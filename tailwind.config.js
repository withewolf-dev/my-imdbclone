module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        
        'carousel': '64rem',
        'wrapper' : '54rem',
        'dialogWidth' : '44rem',
        'dialogHeight': '64rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  
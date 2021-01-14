module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
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
  
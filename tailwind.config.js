module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {},
    borderWidth: {
      20: '20px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
}

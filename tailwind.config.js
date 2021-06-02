const purgeEnabled = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-console
console.log(`   TailwindCSS purgeEnabled=${purgeEnabled}`)

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

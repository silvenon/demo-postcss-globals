module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: './src/globals.css',
      exportTo: './src/globals.js',
    },
  },
}

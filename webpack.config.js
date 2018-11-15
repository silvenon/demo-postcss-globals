const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
  },
  entry: './src',
  plugins: [
    new HtmlPlugin({ template: `src/index.html` }),
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
    ],
  },
}

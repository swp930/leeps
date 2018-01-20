const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    './app/index.js'
  ],
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};

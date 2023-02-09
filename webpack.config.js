const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: path.join(__dirname, 'src', 'client', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'templates', 'index.ejs'),
      favicon: path.join(__dirname, 'src', 'client', 'images', 'favicon.ico'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    port: 8080,
  },
};
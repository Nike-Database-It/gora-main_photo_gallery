const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    filename: 'mpg_bundle.js',
    path: path.join(__dirname, './public'),
  },
  plugins: [
    new CompressionPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '/src'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
};

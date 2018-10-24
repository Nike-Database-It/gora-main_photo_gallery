var path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/index.js'),
  output: {
    filename: 'mpg_bundle.js',
    path: path.join(__dirname, './client/dist')
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
}
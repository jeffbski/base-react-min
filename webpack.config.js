'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: ['./src/browser.jsx']
  },
  output: {
    path: __dirname + '/dist',
    libary: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        // need to babelify joi, isemail, hoek, and topo's lib
        test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  plugins: [
    // english locale is included, exclude the rest
    new webpack.IgnorePlugin(/locale/, /moment$/)
  ]
};

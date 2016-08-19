'use strict';

var webpack = require('webpack');

var env = process.env.NODE_ENV;
var config = {
  devServer: {
    stats: {
      chunks: false
    }
  },
  entry: {
    main: ['./src/browser.jsx']
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      { test: /\.json$/, loaders: ['json-loader'] },
      {
        // need to babelify joi, isemail, hoek, and topo's lib
        test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
        loaders: ['babel-loader']
      },
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    // english locale is included, exclude the rest
    new webpack.IgnorePlugin(/locale/, /moment$/)
  ]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

module.exports = config;

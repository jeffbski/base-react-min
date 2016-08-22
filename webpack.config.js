'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var postcssConfig = require('./postcss.json');
var WebpackShellPlugin = require('webpack-shell-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var browserSyncConfig = require('./bs-config');
var CleanCSSLoader = require('clean-css-loader');

var env = process.env.NODE_ENV || 'development';
var isProd = (env === 'production');
// I'm setting this to single for single run, non-watch building
var isSingle = (process.env.WEBPACK_MODE === 'single');

var config = {
  devServer: {
    stats: {
      chunks: false
    }
  },
  entry: {
    main: ['./src/browser.jsx'],
    style: ['./style/site.less']
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
        test: /\.(css|less)$/,
        // only using clean-css in production build
        loader: ExtractTextPlugin.extract('style',
                                          (isProd) ?
                                          'css!clean-css!postcss!less' :
                                          'css!postcss!less'
                                         )
      }
      // can uncomment this if need to compile joi, isemail, hoek, topo
      // {
      //   // need to babelify joi, isemail, hoek, and topo's lib
      //   test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
      //   loaders: ['babel-loader']
      // }
    ]
  },
  postcss: function () {
    // provide autoprefixer config from postcss.json
    return [autoprefixer(postcssConfig.autoprefixer)];
  },
  "clean-css":{
    // set any clean-css options
  },
  // most of the time we don't want this bloat
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
    new ExtractTextPlugin("[name].min.css"), // ouputs at {output.path}/style.min.css
    new BrowserSyncPlugin(browserSyncConfig),

    // for slimming down moment
    // english locale is included, exclude the rest
    // new webpack.IgnorePlugin(/locale/, /moment$/),

    new WebpackShellPlugin({
      dev: false, // run onBuildEnd even during watch changes
      onBuildEnd: [
        'rimraf dist/style.js' // clean up this, not needed
      ],
      onBuildExit: (isSingle) ? // non-watch builds
        [
          'ngzip dist/style.min.css > dist/style.min.css.gz',
          'uglifyjs dist/main.js -c warnings=false -m | ntee dist/main.min.js | ngzip > dist/main.min.js.gz'
        ] :
        [] // watch builds
    })
  ]
};

module.exports = config;

'use strict';

var path = require('path');
var webpack = require('webpack');

// compile js assets into a single bundle file
module.exports = {
    devtool: 'eval',
    entry: [
      './assets/js/index.js',
    ],
    output: {
      path: __dirname + '/assets/js/',
      filename: 'build.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders : [
        // requires "npm install --save-dev babel-loader"
        {
          test : /\.js$/,
          loader : 'babel-loader',
          query : {
            presets : ['react', 'es2015', 'stage-0'],
            plugins : ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          }
        },

        {test : /\.css$/, loader : 'style!css'}
      ]
    }
};

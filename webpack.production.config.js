var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    vendors: ['react', 'jquery', 'lodash']
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
    alias: {
      'pageData': path.resolve(__dirname, 'app/page_data.js')
      // 'react': pathToReact
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'css'),
    filename: '../js/[name].min.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: [node_modules_dir],
      loader: 'babel' // 加载模块 'babel' 是 'babel-loader' 的缩写
    }, {
      test: /\.css$/, // Only .css files
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=100000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=100000&minetype=application/font-woff'
      // loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', '../js/vendors.js'),
    new ExtractTextPlugin('all.css', {allChunks: true})
  ]
};

module.exports = config;

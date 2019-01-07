const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

var glob = require("glob");

const plugins = []
plugins.push(new ManifestPlugin({
  fileName: 'manifest.json',
  writeToFileEmit: true
}));
plugins.push(new CleanWebpackPlugin(['assets'], {
  root: __dirname + '/public',
  verbose: true,
  dry: false
}));

var javascriptRootPath = path.resolve(__dirname, 'frontend/javascripts');
var styleSheetRootPath = path.resolve(__dirname, 'frontend/stylesheets');
var imageRootPath = path.resolve(__dirname, 'frontend/images');

var entries = {}
var fileNames = []
fileNames = fileNames.concat(glob.sync(path.resolve(__dirname, javascriptRootPath + '/*.js')));
fileNames = fileNames.concat(glob.sync(path.resolve(__dirname, styleSheetRootPath + '/*.css')));
fileNames = fileNames.concat(glob.sync(path.resolve(__dirname, imageRootPath + '/*.{gif,png,jpg,eot,wof,woff,woff2,ttf,svg}')));
fileNames.forEach(function(fileName){
  var rootPath = fileName.replace(javascriptRootPath + "/", "").replace(styleSheetRootPath + "/", "").replace(imageRootPath + "/", "");
  entries[rootPath] = fileName;
});
console.log(entries);

const assetPathRoot = 'public/assets';

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: '[name]-[hash].js'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.vue$/, // ファイルが.vueで終われば...
        loader: 'vue-loader' // vue-loaderを使う
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
        ] // css-loader -> vue-style-loaderの順で通していく
      },
      {
        test: /\.(gif|png|jpe?g|otf|eot|wof|woff|woff2|ttf|svg)(\?.+)?$/,
        loader: 'url-loader'
      },
    ]
  }
}
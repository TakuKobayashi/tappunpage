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
var jsPathes = glob.sync(path.resolve(__dirname, javascriptRootPath + '/*.js'));
var cssPathes = glob.sync(path.resolve(__dirname, javascriptRootPath + '/*.{css,scss}'));
var resourcePathes = glob.sync(path.resolve(__dirname, javascriptRootPath + '/*.{gif,png,jpg,eot,wof,woff,woff2,ttf,svg}'));

var fileNames = []
fileNames = fileNames.concat(glob.sync(path.resolve(__dirname, javascriptRootPath + '/*.js')));
fileNames = fileNames.concat(glob.sync(path.resolve(__dirname, styleSheetRootPath + '/*.{css,scss}')));
fileNames = fileNames.concat(glob.sync(path.resolve(__dirname, imageRootPath + '/*.{gif,png,jpg,eot,wof,woff,woff2,ttf,svg}')));
fileNames.forEach(function(fileName){
  var rootPath = fileName.replace(javascriptRootPath + "/", "").replace(styleSheetRootPath + "/", "").replace(imageRootPath + "/", "");
  entries[rootPath] = fileName;
});
console.log(entries);

const loaders = [
  {
    test: /\.js$/,
    use: [
      {
        // Babel を利用する
        loader: 'babel-loader',
        // Babel のオプションを指定する
      }
    ]
  },
  // Sassファイルの読み込みとコンパイル
  {
    test: /\.(scss|css)$/, // 対象となるファイルの拡張子
    // ローダー名
    use: [
      // linkタグに出力する機能
      'style-loader',
      // CSSをバンドルするための機能
      {
        loader: 'css-loader',
        options: {
          // オプションでCSS内のurl()メソッドを取り込む
          url: true,
          // ソースマップの利用有無
          sourceMap: false,
         // 0 => no loaders (default);
          // 1 => postcss-loader;
          // 2 => postcss-loader, sass-loader
          importLoaders: 2
        },
      },
      // Sassをバンドルするための機能
      {
        loader: 'sass-loader',
        options: {
          // ソースマップの利用有無
          sourceMap: false,
        }
      }
    ],
  },
  {
    // 対象となるファイルの拡張子
    test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
    // 画像をBase64として取り込む
    loader: 'url-loader'
  }
];

const assetPathRoot = 'public/assets';

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, assetPathRoot),
    filename: '[name]-[hash].js'
  },
  plugins: plugins,
  module: {
    rules: loaders
  }
}
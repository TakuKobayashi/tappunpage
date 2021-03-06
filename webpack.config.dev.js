const webpack = require('webpack')
const path = require('path')
const assetPathRoot = 'public/assets';

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
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
        loader: 'url-loader',
        options: {
          name: '../images/[name].[ext]'
        }
      },
    ]
  },
  resolve: {
    // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
    extensions: ['.js', '.vue'],
    alias: {
      // vue-template-compilerに読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  entry: {
    index: path.resolve(__dirname, 'frontend/javascripts/index.js')
  },
  output: {
    path: path.resolve(__dirname, assetPathRoot),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/assets/'
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.resolve(__dirname, assetPathRoot),
  },
}
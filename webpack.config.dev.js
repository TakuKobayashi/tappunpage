const webpack = require('webpack')
const path = require('path')
const assetPathRoot = 'public/assets';

const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        use: ['vue-style-loader', 'css-loader'] // css-loader -> vue-style-loaderの順で通していく
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
    new VueLoaderPlugin()
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
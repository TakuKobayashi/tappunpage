const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const assetPathRoot = 'public/assets';

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'frontend/javascript/index.js')
  },
  output: {
    path: path.resolve(__dirname, assetPathRoot),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/assets/'
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: assetPathRoot,
  },
}
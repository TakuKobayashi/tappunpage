const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'frontend/javascript/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'public/pack'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      writeToFileEmit: true
    }),
  ],
}
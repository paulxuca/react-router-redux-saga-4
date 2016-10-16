var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.[hash].js'
  },
  devtool: 'eval',
  module: {
    loaders:
    [{
      test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
            "presets": ["es2015", "stage-0", "react"],
            "plugins": ["react-hot-loader/babel"]
        }
    }, { 
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      debug: true,
      options:  {
          postcss: function() {
              return [precss, autoprefixer];
          },
          context: path.join(__dirname, 'src'),
          output: {
              path: path.join(__dirname, 'dist')
          }
      }
  })
  ]
}
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    app: [
      'babel-polyfill',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[name].[chunkhash].js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(process.cwd(), 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }, {
      test: /\.css$/i,
      loader: ExtractTextPlugin.extract(['css', 'postcss']),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      debug: true,
      options: {
        postcss: () => [precss, autoprefixer],
        context: path.resolve(process.cwd(), 'src'),
        output: {
          path: path.resolve(process.cwd(), 'dist'),
        },
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('assets/styles.css'),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.html',
    }),
  ],
};

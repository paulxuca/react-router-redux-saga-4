var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.base.config');
var port = 3000;

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(port, 'localhost', function(error, result){
  if (error) {
    console.log(error);
    process.exit(0);
  }
  console.log('Listening to http://localhost:' + port + '/');
});
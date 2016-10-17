const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.base.config');
const PORT = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(PORT, 'localhost', (error) => {
  if (error) {
    console.log(error);
    process.exit(0);
  }
  console.log(`Listening to http://localhost:${PORT}`);
});

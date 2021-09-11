const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@foodby/commons',
    libraryTarget: 'umd',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  devServer: {
    open: true,
    hot: true,
    host: 'localhost',
    static: path.join(__dirname, 'dev'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.([jt])s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new PrettierPlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};

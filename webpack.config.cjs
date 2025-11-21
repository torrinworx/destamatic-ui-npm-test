// webpack.config.cjs
const path = require('node:path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'destamatic-ui': path.resolve(__dirname, 'destamatic-ui/index.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: [
          path.resolve(__dirname, 'index.jsx'),
          path.resolve(__dirname, 'destamatic-ui'),
        ],
        resolve: {
          fullySpecified: false,
        },
        use: [
          { loader: path.resolve(__dirname, 'html-literal-loader.cjs') },
          { loader: 'babel-loader' },
        ],
      },
    ],
  },
  devtool: isProd ? 'source-map' : 'eval-source-map',
  devServer: {
    static: [
      // Serve the root so /index.html is available
      path.resolve(__dirname, '.'),
      // And also serve built assets from dist (bundle.js)
      path.resolve(__dirname, 'dist'),
    ],
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};
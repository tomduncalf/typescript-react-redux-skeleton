// Based on https://github.com/keokilee/react-typescript-boilerplate

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var APP_DIR = path.join(__dirname, '..', 'app');
var BUILD_DIR = path.join(__dirname, '..', '..', 'build');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './app/index.tsx'],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: APP_DIR
    }],
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'awesome-typescript-loader'],
        include: APP_DIR
      },
      {
        test: /.*css\/components\/.*\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /.*scss\/global\/.*\.css$/,
        loader: 'style!css!postcss-loader'
      },
      {
        test: /\.png|.gif?$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.woff\d?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/',
    pathinfo: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new HtmlWebpackPlugin({
      //favicon: 'assets/images/favicon.ico',
      template: 'assets/html/index.html',
      title: 'Skeleton',
      inject: 'body'
    })
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
    modulesDirectories: ['./src/app', 'node_modules'],
    alias: {
      // Redux Dev Tools tries to load another version of react, so force react to our version
      'react': path.join(APP_DIR, '..', 'node_modules', 'react'),
      // Load the appropriate app config
      'app-config': path.join(APP_DIR, 'config', 'dev.config.ts')
    }
  }
};

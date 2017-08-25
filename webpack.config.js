const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');

const common = {
  entry: [resolve(__dirname, 'app/js/Index.tsx')],

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },

  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  context: resolve(__dirname, 'app'),

  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'build')
    // match the output path
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'powerslide',
      favicon: 'img/favicon.ico'
    })
  ],

  module: {
    rules: [
      {
        test: [/\.ts?$/, /\.tsx?$/],
        use: ['ts-loader', 'tslint-loader']
      },
      {
        test: [/\.js?$/, /\.jsx?$/],
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: [/\.png?$/, /\.jpg?$/, /\.jpeg?$/, /\.bmp?$/, /\.svg?$/, /\.gif?$/],
        use: ['file-loader']
      },
      {
        test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
};

switch (process.env.npm_lifecycle_event) {
  case 'build':
    module.exports = merge(common, {
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    });
    break;
  case 'start':
    module.exports = merge(
      {
        entry: [
          'webpack-dev-server/client?http://localhost:8080',
          // bundle the client for webpack-dev-server
          // and connect to the provided endpoint
        ],
        plugins: [
          new webpack.HotModuleReplacementPlugin(),
          // enable HMR globally

          new webpack.NamedModulesPlugin()
          // prints more readable module names in the browser console on HMR updates
        ]
      },
      common
    );
    break;
  default:
    break;
}

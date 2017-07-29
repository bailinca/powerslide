var path = require('path');

var config = {
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.ts?$/, /\.tsx?$/],
        use: ['babel-loader', 'ts-loader', 'tslint-loader']
      }
    ]
  }
};

module.exports = config;

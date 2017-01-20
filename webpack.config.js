var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');

var common = {

	entry: [path.resolve(__dirname, 'app/scripts/app.tsx')],

	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts']
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	devtool: 'source-map',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'powerslide'
		})
	],

	module: {
		rules: [
			{
				test: [/\.ts?$/, /\.tsx?$/],
				enforce: 'pre',
				use: ['ts-loader', 'tslint-loader'],
				include: path.resolve(__dirname, 'app')
			},
			{
				test: [/\.jsx?$/, /\.js?$/, /\.ts?$/, /\.tsx?$/],
				use: ['react-hot-loader', 'babel-loader'],
				include: path.resolve(__dirname, 'app')
			},
			{
				test: [/\.png?$/, /\.jpg?$/, /\.bmp?$/],
				use: ['file-loader', 'img-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
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
				}),
				new webpack.DefinePlugin({
					'process.env': {
						'NODE_ENV': JSON.stringify('production')
					}
				})
			]
		});
		break;
	case 'start':
		module.exports = common;
		break;
	default:
		break;
}

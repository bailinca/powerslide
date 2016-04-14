var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var HtmlWebpackPlugin = require('html-webpack-plugin');

var common = {

	entry: [path.resolve(ROOT_PATH, 'app/scripts/app.tsx')],

	resolve: {
		extensions: ['', '.js', '.tsx', '.tsx', '.ts']
	},

	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},

	devtool: 'source-map',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'powerslide'
		})
	],

	module: {
		preLoaders: [
			{
				test: [/\.ts?$/, /\.tsx?$/],
				loader: 'ts!tslint',
				include: path.resolve(ROOT_PATH, 'app')
			}
		],
		loaders: [
			{
				test: [/\.tsx?$/, /\.js?$/, /\.ts?$/, /\.tsx?$/],
				loaders: ['react-hot', 'babel'],
				include: path.resolve(ROOT_PATH, 'app')
			},
			{
				test: [/\.png?$/, /\.jpg?$/, /\.bmp?$/],
				loader: 'file!img'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
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
		module.exports = merge(common, {
			entry: [
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/dev-server'
			]
		});
		break;
	default:
		break;
}

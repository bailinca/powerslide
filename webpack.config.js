var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var HtmlWebpackPlugin = require('html-webpack-plugin');

var common = {

	entry: [path.resolve(ROOT_PATH, 'app/jsx/app.jsx')],

	resolve: {
		extensions: ['', '.js', '.jsx']
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

	eslint: {
		configFile: '.eslintrc'
	},

	module: {
		preLoaders: [
			{
				test: [/\.jsx?$/, /\.js?$/],
				loaders: ['eslint'],
				include: path.resolve(ROOT_PATH, 'app')
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel?stage=1'],
				include: path.resolve(ROOT_PATH, 'app')
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

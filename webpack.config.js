const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const {resolve} = require('path');
const webpack = require('webpack');

const common = {

	entry: [resolve(__dirname, 'app/scripts/app.tsx')],

	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts']
	},

	output: {
		path: resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
		// necessary for HMR to know where to load the hot update chunks
	},

	context: resolve(__dirname, 'app'),

	devtool: 'source-map',

	devServer: {
		hot: true,
		// enable HMR on the server

		contentBase: resolve(__dirname, 'build'),
		// match the output path

		publicPath: '/'
		// match the output `publicPath`
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'powerslide'
		})
	],

	module: {
		rules: [
			{
				test: [/\.ts?$/, /\.tsx?$/],
				use: ['babel-loader', 'ts-loader', 'tslint-loader']
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
		module.exports = merge(common, {
			entry: [
				'react-hot-loader/patch',
				// activate HMR for React

				'webpack-dev-server/client?http://localhost:8080',
				// bundle the client for webpack-dev-server
				// and connect to the provided endpoint

				'webpack/hot/only-dev-server'
				// bundle the client for hot reloading
				// only- means to only hot reload for successful updates
			],
			plugins: [
				new webpack.HotModuleReplacementPlugin(),
				// enable HMR globally

				new webpack.NamedModulesPlugin(),
				// prints more readable module names in the browser console on HMR updates
			]
		});
		break;
	default:
		break;
}

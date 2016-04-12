var path = require("path");

var config = {
	resolve: {
		extensions: ['', '.js', '.tsx', '.tsx', '.ts']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.tsx?$/, loader: 'babel!ts',
				include: path.resolve(__dirname, "app")
			}
		]
	}
}

module.exports = config;

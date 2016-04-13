var path = require("path");
var WebpackConfig = require('webpack-config');

module.exports = function (config) {
	config.set({
		logLevel: config.LOG_DEBUG,
		port: 3334,
		browsers: ['PhantomJS'],
		singleRun: true,
		frameworks: ['mocha', 'chai'],
		files: [
			'karma.tests.js'
		],
		preprocessors: {
			'karma.tests.js': ['webpack', 'sourcemap']
		},
		reporters: ['progress'],
		webpack: new WebpackConfig().extend("webpack.test.config")
	});
};

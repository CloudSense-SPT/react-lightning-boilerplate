'use strict';

const webpack = require('webpack');

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/public/`,
		filename: 'client.bundle.js',
		library: 'ReactLightning',
        libraryTarget: 'window'
	},
	module: {
		rules: [
			{
				test: /(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
				exclude: /node_modules/
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	mode: 'development'
};

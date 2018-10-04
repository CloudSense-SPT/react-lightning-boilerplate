'use strict';

const webpack = require('webpack');

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/public/`,
		filename: 'client.bundle.js',
		library: 'GanttChart',
        libraryTarget: 'var'
	},
	mode: 'development',
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
	devtool: 'source-map'
	// production mode causes us problem which we will investigate later
	//mode: process.env.NODE_ENV || 'development',
};

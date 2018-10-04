'use strict';

const webpack = require('webpack');

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/public/`,
		filename: 'client.bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /(js|jsx)$/,
				loader: 'babel-loader',
			},
			{
				test: require.resolve('./src/index'),
				loaders: ["expose-loader?reactLightning", "babel-loader?presets[]=react,presets[]=es2017"]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
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

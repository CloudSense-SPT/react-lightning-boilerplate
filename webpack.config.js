const webpack = require('webpack');

module.exports = {
	entry: `${__dirname}/src/js/index.js`,
	output: {
		path: `${__dirname}/public/js/`,
		filename: 'client.bundle.js',
		library: 'React',
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
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	],
	stats: {
		colors: true
	},
	devtool: 'source-map',
	mode: process.env.NODE_ENV || 'development'
};

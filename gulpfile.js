const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task(
	'webpack:build',
	(callback) => {
		const webPackServerConfig = Object.assign(
			{},
			webpackConfig,
			{
				watch: true,
				watchOptions: {
					aggregateTimeout: 300,
					poll: 1000
				}
			}
		);

		const compiler = webpack(webPackServerConfig);

		compiler.run((error, stats) => {
			if (error) {
				throw new gutil.PluginError('Error while compiling code', error);
			}
			gutil.log('[webpack:build]', stats.toString({
				colors: true
			}));
			callback();
		});
	}
);

gulp.task(
	'build:css',
	() => gulp.src('./src/css/**.css').pipe(gulp.dest('./public/css/'))
);

gulp.task(
	'build',
	['webpack:build', 'build:css']
);

gulp.task('default', ['build']);
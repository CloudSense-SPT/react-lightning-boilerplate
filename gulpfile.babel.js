const { src, dest, series, parallel } = require('gulp');
const gutil = require('gulp-util');
const zip = require('gulp-zip');
const webpack = require('webpack');
const forceDeploy = require('gulp-jsforce-deploy');
const webpackConfig = require('./webpack.config');

const bundle = 'BUNDLE_NAME';

const paths = {
	source: './src',
	assets: './public',
};

export function webpackBuild() {
	const compiler = webpack({
		...webpackConfig,
		watch: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
	});

	return new Promise((resolve) => {
		compiler.run((error, stats) => {
			if (error) {
				throw new gutil.PluginError('Error while compiling code', error);
			}

			gutil.log('webpackBuild', stats.toString({
				colors: true
			}));

			resolve();
		});
	});
}

export function css() {
	return src([`${paths.source}/css/**.css`])
		.pipe(dest(`${paths.assets}/css`));
}

export const build = parallel(webpackBuild, css);

export const zipFiles = series(build, () => {
	return src(`${paths.assets}/**`)
		.pipe(zip(`${bundle}.resource`))
		.pipe(dest('deploy/pkg/staticresources'));
});

export const deploy = series(zipFiles, () => {
	return src('./deploy/pkg/**', { base: './deploy'})
		.pipe(zip('pkg.zip'))
		.pipe(forceDeploy({
			username: process.env.DEPLOY_USERNAME,
			password: process.env.DEPLOY_PASSWORD,
			loginUrl: process.env.DEPLOY_LOGIN || 'https://login.salesforce.com'
		}));
});

exports.default = deploy;
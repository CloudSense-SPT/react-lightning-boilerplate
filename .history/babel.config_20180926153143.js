module.exports = function () {
	const presets = [ "@babel/preset-react", "@babel/env" ];
	const plugins = [ "@babel/transform-arrow-functions" ];
  
	return {
	  presets,
	  plugins
	};
  }
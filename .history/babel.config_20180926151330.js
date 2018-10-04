module.exports = function () {
	const presets = [ "@babel/react", "@babel/env" ];
	const plugins = [ "@babel/transform-arrow-functions" ];
  
	return {
	  presets,
	  plugins
	};
  }
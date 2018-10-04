import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

export const init = function(el, remoteService) {
	render((
		<App remoteService={ remoteService }/>
	), el);
};

// const rootElement = document.getElementById('root');
// render(<App />, rootElement);
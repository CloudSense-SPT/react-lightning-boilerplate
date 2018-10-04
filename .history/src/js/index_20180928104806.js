import React from 'react';
import { render as renderReact } from 'react-dom';
import App from './app.jsx';

/*
 * to run the app locally from your browser enter 
 * "React.render(document.getElementById('root'))" in the console
 */
export function render(el, remoteService) {
	renderReact(<App />, el);
}
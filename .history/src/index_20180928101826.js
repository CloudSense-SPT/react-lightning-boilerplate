import React from 'react';
import { render as renderReact } from 'react-dom';
import App from './App.jsx';

export function render(el, remoteService) {
	const test = () => {
		console.log('test', { test: 'abc', ...el });
	};

	renderReact(<App />, el);
}
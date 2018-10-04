import React from 'react';
import { render as renderReact } from 'react-dom';
import App from './App.jsx';

export function render(el, remoteService) {
	test = () => {
		console.log('test', { test: 'abc', ...el });
	};

	test();

	renderReact(<App />, el);
}
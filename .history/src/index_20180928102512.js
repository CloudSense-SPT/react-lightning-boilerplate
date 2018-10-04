import React from 'react';
import { render as renderReact } from 'react-dom';
import App from './App.jsx';

const test = () => {
	console.log('test', { test: 'abc', ...el });
};

export function render(el, remoteService) {
	test();

	renderReact(<App />, el);
}
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

export function render(el, remoteService) {
	render(<App />, el);
}
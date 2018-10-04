import React from 'react';
import { render as renderReact } from 'react-dom';
import App from './App';

export function render(el, remoteService) {
	renderReact(<App />, el);
}
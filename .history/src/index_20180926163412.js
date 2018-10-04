import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

function init() {
	const rootElement = document.getElementById('root');
	render(<App />, rootElement);
}

export default init;
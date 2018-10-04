import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

function init() {
	render(<App />, document.getElementById('root'));
}

export default init;
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

export const init = function(el, remoteService) {
	render((
		<div>
			<SptComponentList remoteService={ remoteService }/>
		</div>
	), el);
};
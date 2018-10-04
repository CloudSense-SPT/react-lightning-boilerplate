import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

// export const init = function(el, remoteService) {
// 	render((
// 		<div>
// 			dodoodo
// 			<App remoteService={ remoteService }/>
// 		</div>
// 	), el);
// };

render(
	<div>
		<App/>
	</div>,
	document.querySelector('root')
);
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

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
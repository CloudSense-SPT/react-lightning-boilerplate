import React, { Component } from 'react';
import Gantt from './components/gantt.jsx';

class App extends Component {
	render() {
		const start = new Date(2018, 1, 1);
		const end = new Date(2018, 1, 2);

		return (
			<div className='main'>
				Lightning 4ever!!
			</div>
		);
	}
}

export default App;
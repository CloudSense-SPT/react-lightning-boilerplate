import React, { Component } from 'react';
import Gantt from './components/gantt.jsx';

class App extends Component {
	render() {
		const start = new Date(2018, 1, 1);
		const end = new Date(2018, 1, 2);

		return (
			<div className='main'>
				<h1>Critical Path View</h1>
				<Gantt 
					start_date={ start } 
					end_date={ end } 
					modelers="4"
					builds="2"
					view="#1, #2"
				/>
			</div>
		);
	}
}

export default App;
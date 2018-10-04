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
					modelers="10"
					builds=""
					view=""
				/>
			</div>
		);
	}
}

export default App;
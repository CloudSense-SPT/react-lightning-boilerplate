import React, { Component } from 'react';
import Gantt from './components/gantt.jsx';

class App extends Component {
	render() {
		return (
			<div className='main'>
				<h1>Critical Path View</h1>
				<Gantt 
					start_date={ new Date(2018, 1, 1) } 
					end_date={ new Date(2018, 4, 4) } 
					modelers=""
					builds=""
					view=""
				/>
			</div>
		);
	}
}

export default App;
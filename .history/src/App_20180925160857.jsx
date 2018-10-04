import React, { Component } from 'react';
import Gantt from './components/gantt.jsx';

class App extends Component {
	render() {
		return (
			<div className='main'>
				<h1>Critical Path View</h1>
				<Gantt/>
			</div>
		);
	}
}

export default App;
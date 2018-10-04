import React from 'react';

class Gantt extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			orders: []
		};
	}

	componentDidMount() {
	}

	render() {
		const { orders } = this.state;
		
		return (
			<div className="wrap-items">
				<div className="acc-item-list">
					<div className="row acc-headings">
						<div className="acc-cell">Name</div>
						<div className="acc-cell">Status</div>
						<div className="acc-cell">Progress</div>
					</div>
					{ orders && orders.map(o => <SptComponent item={ o } key={ o.orderId }/>) }
				</div>
			</div>
		);
	}
}

export default SptComponentList;
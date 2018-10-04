import React from 'react';
import './SptComponent.css';

class SptComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			openAcc: false
		};
	}

	openAccordion = () => {
		this.setState({ openAcc: !this.state.openAcc })
	};

	render() {
		const item = this.props.item;
		if (!item) {
			return null;
		}

		const accordion_class = this.state.openAcc ? "open" : "closed";
		const arrow_class = this.state.openAcc ? "arrowDown" : "arrowLeft";

		const childItem = item.childOrders && item.childOrders[0];
		
		return (
			<div className="accordion" onClick={this.openAccordion}>
				<div className={arrow_class + ' acc-cell name'}>{item.name || ''}</div>
				<div className="acc-cell">{item.status || ''}</div>
				<div className="acc-cell">{item.progress || ''}</div>
				{ childItem &&
					<div className={accordion_class + " accordion"}>
						<div className="acc-cell indent">{childItem.name || ''}</div>
						<div className="acc-cell">{childItem.status || ''}</div>
						<div className="acc-cell">{childItem.progress || ''}</div>
					</div>
				}
			</div>
		);
	}
}

export default SptComponent;



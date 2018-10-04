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
		this.setState({openAcc: !this.state.openAcc})
	};

	render() {
		const accordion_class = this.state.openAcc ? "open" : "closed";
		const arrow_class = this.state.openAcc ? "arrowDown" : "arrowLeft";
		const accordion = this.props.accordion;
		return (
			<div className="accordion" onClick={this.openAccordion}>
				<div className={arrow_class + ' acc-cell name'}>{accordion.name}</div>
				<div className="acc-cell">{accordion.status}</div>
				<div className="acc-cell">{accordion.progress}</div>
				<div className="acc-cell">{accordion.milestone}</div>
				<div className={accordion_class + " accordion"}>
					<div className="acc-cell indent">{accordion.name}</div>
					<div className="acc-cell">{accordion.status}</div>
					<div className="acc-cell">{accordion.progress}</div>
					<div className="acc-cell">{accordion.milestone}</div>
				</div>
			</div>
		);
	}
}

export default SptComponent;



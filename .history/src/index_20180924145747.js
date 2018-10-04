import React from 'react';
import {render} from 'react-dom';
import SptComponentList from './components/SptComponentList.jsx';

const accordion = {
	name: 'Basket',
	status: 'Order Submitted',
	progress: '15%',
	milestone: 'Milestone'
};

const accordions = [
	accordion, accordion, accordion, accordion, accordion, accordion
];

export const init = function(el, remoteCalls) {
	render((
		<div>
			<SptComponentList accordions={accordions} init={remoteCalls.loadOrdersAsync()}/>
		</div>
	), el);
};
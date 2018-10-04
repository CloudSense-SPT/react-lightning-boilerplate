import React from "react";
import Chart from "react-google-charts";

function daysToMilliseconds(days) {
	return days * 24 * 60 * 60 * 1000;
}

const columns = [
	{ type: "string", label: "Process Id" },
	{ type: "string", label: "Process Name" },
	{ type: "date", label: "Start Date" },
	{ type: "date", label: "End Date" },
	{ type: "number", label: "Duration" },
	{ type: "number", label: "Percent Complete" },
	{ type: "string", label: "Dependencies" }
];

const rows = [
	[
		"1",
		"Process #1",
		new Date(2018, 0, 1),
		new Date(2018, 0, 5),
		null,
		100,
		null
	],
	[
		"2",
		"Process #2",
		null,
		new Date(2018, 0, 9),
		daysToMilliseconds(3),
		25,
		"1,5"
	],
	[
		"3",
		"Process #3",
		null,
		new Date(2018, 0, 7),
		daysToMilliseconds(1),
		20,
		"1"
	],
	[
		"4",
		"Process #4",
		null,
		new Date(2018, 0, 10),
		daysToMilliseconds(1),
		0,
		"2"
	],
	[
		"5",
		"Process #5",
		null,
		new Date(2018, 0, 6),
		daysToMilliseconds(1),
		100,
		"1"
	]
];

export default class Gantt extends React.Component {
	render() {
		return (
			<div className="App">
				<Chart
					chartType="Gantt"
					data={[columns, ...rows]}
					width="100%"
					height="100%"
					legendToggle
				/>
			</div>
		);
	}
}

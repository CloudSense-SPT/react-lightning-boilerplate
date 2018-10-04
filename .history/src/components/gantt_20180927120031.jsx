import React from "react";
import * as d3 from "d3";

export default class Gantt extends React.Component {
	componentDidMount() {
		const {start_date, end_date, modelers, builds, view} = this.props

		const MARGIN = {
			top: 10,
			bottom: 10,
			left: 10,
			right: 10
		};
	  
		const svg = d3.select('svg.gantt')
		const width = svg.node().parentNode.offsetWidth - (MARGIN.left + MARGIN.right)
		const height = 800 - (MARGIN.top + MARGIN.bottom)
	  
		const x = d3.time.scale().domain([start_date, end_date]).range([0, width]).clamp(true)
		const y = d3.scale.ordinal().domain(modelers).rangeRoundBands([0, height - (MARGIN.top + MARGIN.bottom)], 0.2)
		const x_axis = d3.svg.axis().scale(x).ticks(this.getTicksInterval(view), this.getTicksCount(view, width)).tickSubdivide(true)
		const y_axis = d3.svg.axis().scale(y).orient('left').tickSize(0)
	  
		svg.attr('viewBox', `0 0 ${width + MARGIN.left + MARGIN.right} ${height + MARGIN.top + MARGIN.bottom}`)
	  
		const chart = svg.append("g").attr('class', 'chart-holder').attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`)
	  
		chart
		  .append("g")
			.attr('class', 'x axis')
			.attr("transform", "translate(0,"+(height - MARGIN.top - MARGIN.bottom)+")")
			.call(x_axis);
	  
		chart
		  .append("g")
			.attr('class', 'y axis')
			.call(y_axis);
	}

	componentDidUpdate() {
		const x = d3.time.scale().domain([start_date, end_date]).range([0, width]).clamp(true)
		const y = d3.scale.ordinal().domain(modelers).rangeRoundBands([0, height - (MARGIN.top + MARGIN.bottom)], 0.2)
		const x_axis = d3.svg.axis().scale(x).ticks(this.getTicksInterval(view), this.getTicksCount(view, width))
		const y_axis = d3.svg.axis().scale(y).orient('left').tickSize(0)
		d3.select('g.x.axis').transition().call(x_axis)
		d3.select('g.y.axis').transition().call(y_axis)

		const _builds = d3.select('g.chart-holder').selectAll('g.build-container').data(builds, (build) => build.uri)

		const build = _builds.enter()
		.append('g')
			.attr('class', 'build-container')

		_builds.exit().remove()
	}

	render() {
		return (
			<svg
				id="gantt"
				className="gantt"
			>
			</svg>
		);
	}
}

import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react'
import { Paper, Grow } from "@material-ui/core";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class MajorChartBinghamton extends Component {
	constructor(props) {
		super(props)
		this.handleBarClick = this.handleBarClick.bind(this)
	}

	handleBarClick = (e) => {
		this.props.itemClicked(e);
	}

  render() {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2",
		title:{
			text: "TA Salary Ranges by University"
		},
		subtitles: [{
			text: "As of April 19th, 2019"
		}],
		axisY: {
			includeZero: false,
			prefix: "$",
			title: "Salary"
		},
		data: [{
			click: this.handleBarClick,
			type: "rangeColumn",
			yValueFormatString: "$#,##0.00",
			toolTipContent: "{label}<hr>High: {y[0]}<br><b>Average: {y[1]}</b><br>Low: {y[2]}",
			dataPoints: [		
				{ label: "University at Buffalo", y: [29288, 16173, 9960] },
				{ label: "Stony Brook", y: [37017, 19836, 10350] },
				{ label: "Binghamton", y: [31223, 18735, 9977] },
				{ label: "Albany", y: [23796, 16744, 9964] },
			]
		}]
	}
	
	return (
		<div>
			<Grow in={true} timeout={1000}>
				<Paper style={{padding: 20}}>
					<CanvasJSChart options = {options} />
				</Paper>
			</Grow>
		</div>
	);
  }
}
 
export default MajorChartBinghamton;
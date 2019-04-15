import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react'
import { Paper, Grow, Slide } from "@material-ui/core";
import scrollToComponent from 'react-scroll-to-component';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class MajorChartBuffalo extends Component {
	constructor(props) {
        super(props)
        this.testing = React.createRef()
        this.handleBarClick = this.handleBarClick.bind(this)
    }
    
    componentDidMount() {
         const bottom = document.getElementById("bottomboi")
         scrollToComponent(bottom, {
            offset: 1000,
            align: 'bottom',
            duration: 800
        });
    }

	handleBarClick = (e) => {
		this.props.itemClicked(e);
	}

  render() {
	const options = {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
		title:{
			text: "TA Salary Ranges by Department (SUNY Albany)"
		},
		subtitles: [{
			text: "As of April 19th, 2019"
		}],
		axisY: {
			includeZero: false,
			prefix: "$",
			title: "Salary"
        },
        toolTip: {
            shared: true
        },
		data: [
        {
			click: this.handleBarClick,
            type: "bar",
            name: "Maximum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Admissions", y: 12500 },
			]
		},
		{
			click: this.handleBarClick,
            type: "bar",
            name: "Average",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Admissions", y: 12500 },
			]
        },
		{
			click: this.handleBarClick,
            type: "bar",
            name: "Minimum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [		
				{ label: "Admissions", y: 12500 },
			]},
		]
    }
    
    return (
		<div style={{marginTop: 20}}>
        	<Grow in={true} timeout={1000}>
                <Paper style={{padding: 20}}>
                    <CanvasJSChart options = {options}
                    />
                </Paper>
            </Grow>
            <Slide in={true} id="bottomboi" direction="right" timeout={1000}><h4 style={{color: "#727272"}}>Click and drag to zoom.</h4></Slide>
        </div>
	);
  }
}
 
export default MajorChartBuffalo;
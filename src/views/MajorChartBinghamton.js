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
            offset: 65,
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
			text: "TA Salary Ranges by Department (SUNY Binghamton)"
		},
		subtitles: [{
			text: "As of April 19th, 2019"
		}],
		axisY: {
			includeZero: false,
			prefix: "$",
			title: "Annual Salary",
			stripLines: [{
				value: 23088,
				label: "NYS Minimum Wage ($23,088)",
				labelAlign: "near",
				labelBackgroundColor: 'black',
				showOnTop: 'true',
				color: 'red'
			}],
        },
        toolTip: {
            shared: true
        },
		data: [
        {
			click: this.handleBarClick,
            type: "column",
            name: "Maximum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Internal Audit Office", y: 9977 },
				{ label: "CCPA PhD Program", y: 18067 },
				{ label: "CCPA Social Work", y: 10427 },
				{ label: "CCPA Teaching Learning & Education", y: 17349 },
				{ label: "Anthropology", y: 18067 },
				{ label: "Art History", y: 17698 },
				{ label: "Biology", y: 24436 },
				{ label: "Chemistry", y: 24485 },
				{ label: "Comparative Literature", y: 18067 },
				{ label: "Economics", y: 18067 },
				{ label: "English", y: 18106 },
				{ label: "Geography", y: 10427 },
				{ label: "Geology", y: 30601 },
				{ label: "Global Studies and LxC", y: 16330 },
				{ label: "History", y: 18067 },
				{ label: "Latin American & Caribbean Studies", y: 15951 },
				{ label: "Materials Science", y: 23951 },
				{ label: "Mathematics", y: 31223 },
				{ label: "Music", y: 10209 },
				{ label: "Philosophy", y: 18067 },
				{ label: "Physics", y: 24435 },
				{ label: "Political Science", y: 18067 },
				{ label: "Psychology", y: 30601 },
				{ label: "Sociology", y: 18067 },
				{ label: "Theatre", y: 10427 },
				{ label: "Translation Res Instr Prog", y: 17043 },
				{ label: "Writing Center", y: 18067 },
				{ label: "Biomedical Engineering", y: 23466 },
				{ label: "Computer Science", y: 23951 },
				{ label: "Electrical and Computer Eng", y: 23466 },
				{ label: "Engineering Design", y: 23466 },
				{ label: "Mechanical Engineering", y: 24455 },
				{ label: "Strat Partnership Indust Resurg", y: 24331 },
				{ label: "Systs Sci Industrial Engr", y: 23951 },
				{ label: "Watson Deans Office", y: 23951 },
				{ label: "School of Management  Admin", y: 19276 },
				{ label: "School of Management Acad", y: 19276 },
				{ label: "Graduate School", y: 17412 },
				{ label: "Graduate School Dean", y: 17349 },
				{ label: "UG Research & External Scholarships", y: 10214 },
				{ label: "School of Pharmacy Dean", y: 11730 },
				{ label: "International Stdnts Schr Srvc", y: 14834 },
				{ label: "Dean of Students", y: 10014 },
				{ label: "Discovery", y: 10013 },
				{ label: "Office of Student Conduct", y: 10014 },
				{ label: "Residential Life Office", y: 10014 },
				{ label: "TRIO Veterans", y: 9977 },
				{ label: "Health Promotion and Prevention", y: 9977 },
				{ label: "Educational Opportunity Program", y: 10013 },
				{ label: "Center for Civic Engagement", y: 10013 },
				{ label: "Cntr for Career & Professional Dev", y: 9977 },
				{ label: "Leadership Programs", y: 10014 }
			]
		},
		{
			click: this.handleBarClick,
            type: "column",
            name: "Average",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Internal Audit Office", y: 9977 },
				{ label: "CCPA PhD Program", y: 17756 },
				{ label: "CCPA Social Work", y: 10427 },
				{ label: "CCPA Teaching Learning & Education", y: 17349 },
				{ label: "Anthropology", y: 17527 },
				{ label: "Art History", y: 16936 },
				{ label: "Biology", y: 20967 },
				{ label: "Chemistry", y: 20106 },
				{ label: "Comparative Literature", y: 17473 },
				{ label: "Economics", y: 17472 },
				{ label: "English", y: 17575 },
				{ label: "Geography", y: 10316 },
				{ label: "Geology", y: 17348 },
				{ label: "Global Studies and LxC", y: 16330 },
				{ label: "History", y: 17631 },
				{ label: "Latin American & Caribbean Studies", y: 15951 },
				{ label: "Materials Science", y: 23627 },
				{ label: "Mathematics", y: 20215 },
				{ label: "Music", y: 10209 },
				{ label: "Philosophy", y: 17789 },
				{ label: "Physics", y: 21765 },
				{ label: "Political Science", y: 17755 },
				{ label: "Psychology", y: 21652 },
				{ label: "Sociology", y: 17659 },
				{ label: "Theatre", y: 10427 },
				{ label: "Translation Res Instr Prog", y: 17033 },
				{ label: "Writing Center", y: 17703 },
				{ label: "Biomedical Engineering", y: 19594 },
				{ label: "Computer Science", y: 22908 },
				{ label: "Electrical and Computer Eng", y: 19263 },
				{ label: "Engineering Design", y: 23466 },
				{ label: "Mechanical Engineering", y: 20324 },
				{ label: "Strat Partnership Indust Resurg", y: 20748 },
				{ label: "Systs Sci Industrial Engr", y: 17748 },
				{ label: "Watson Deans Office", y: 23708 },
				{ label: "School of Management  Admin", y: 19276 },
				{ label: "School of Management Acad", y: 18868 },
				{ label: "Graduate School", y: 15074 },
				{ label: "Graduate School Dean", y: 17349 },
				{ label: "UG Research & External Scholarships", y: 10214 },
				{ label: "School of Pharmacy Dean", y: 11475 },
				{ label: "International Stdnts Schr Srvc", y: 12524 },
				{ label: "Dean of Students", y: 10013 },
				{ label: "Discovery", y: 10013 },
				{ label: "Office of Student Conduct", y: 10014 },
				{ label: "Residential Life Office", y: 10014 },
				{ label: "TRIO Veterans", y: 9977 },
				{ label: "Health Promotion and Prevention", y: 9977 },
				{ label: "Educational Opportunity Program", y: 10013 },
				{ label: "Center for Civic Engagement", y: 10013 },
				{ label: "Cntr for Career & Professional Dev", y: 9977 },
				{ label: "Leadership Programs", y: 10014 }
			]
        },
		{
			click: this.handleBarClick,
            type: "column",
            name: "Minimum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [		
				{ label: "Internal Audit Office", y: 9977 },
				{ label: "CCPA PhD Program", y: 17349 },
				{ label: "CCPA Social Work", y: 10427 },
				{ label: "CCPA Teaching Learning & Education", y: 17349 },
				{ label: "Anthropology", y: 17349 },
				{ label: "Art History", y: 16080 },
				{ label: "Biology", y: 10213 },
				{ label: "Chemistry", y: 10367 },
				{ label: "Comparative Literature", y: 16330 },
				{ label: "Economics", y: 16366 },
				{ label: "English", y: 17349 },
				{ label: "Geography", y: 10213 },
				{ label: "Geology", y: 10213 },
				{ label: "Global Studies and LxC", y: 16330 },
				{ label: "History", y: 16330 },
				{ label: "Latin American & Caribbean Studies", y: 15951 },
				{ label: "Materials Science", y: 23466 },
				{ label: "Mathematics", y: 11221 },
				{ label: "Music", y: 10209 },
				{ label: "Philosophy", y: 17349 },
				{ label: "Physics", y: 10090 },
				{ label: "Political Science", y: 17349 },
				{ label: "Psychology", y: 10860 },
				{ label: "Sociology", y: 17349 },
				{ label: "Theatre", y: 10427 },
				{ label: "Translation Res Instr Prog", y: 17024 },
				{ label: "Writing Center", y: 17349 },
				{ label: "Biomedical Engineering", y: 11734 },
				{ label: "Computer Science", y: 11730 },
				{ label: "Electrical and Computer Eng", y: 11730 },
				{ label: "Engineering Design", y: 23466 },
				{ label: "Mechanical Engineering", y: 10214 },
				{ label: "Strat Partnership Indust Resurg", y: 11730 },
				{ label: "Systs Sci Industrial Engr", y: 10213 },
				{ label: "Watson Deans Office", y: 23466 },
				{ label: "School of Management  Admin", y: 19276 },
				{ label: "School of Management Acad", y: 18442 },
				{ label: "Graduate School", y: 10463 },
				{ label: "Graduate School Dean", y: 17349 },
				{ label: "UG Research & External Scholarships", y: 10214 },
				{ label: "School of Pharmacy Dean", y: 11221 },
				{ label: "International Stdnts Schr Srvc", y: 10214 },
				{ label: "Dean of Students", y: 10013 },
				{ label: "Discovery", y: 10013 },
				{ label: "Office of Student Conduct", y: 10014 },
				{ label: "Residential Life Office", y: 10014 },
				{ label: "TRIO Veterans", y: 9977 },
				{ label: "Health Promotion and Prevention", y: 9977 },
				{ label: "Educational Opportunity Program", y: 10013 },
				{ label: "Center for Civic Engagement", y: 10013 },
				{ label: "Cntr for Career & Professional Dev", y: 9977 },
				{ label: "Leadership Programs", y: 10014 }
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
            <Slide in={true} id="bottomboi" direction="right" timeout={1000}>
                <h4 style={{color: "#727272"}}>
                    <i class="far fa-lightbulb"></i> Click and drag to zoom
                </h4>
            </Slide>
            <Slide in={true} direction="right" timeout={1000}>
				<h4>
                    <a href="https://goodcalculators.com/us-minimum-wage-calculator/new-york/" rel="noopener noreferrer" target="_blank">
                        <i class="fas fa-external-link-alt"></i> NYS Minimum Wage Information
                    </a>
                </h4>
			</Slide>        
		</div>
	);
  }
}
 
export default MajorChartBuffalo;
import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react'
import { Paper, Grow, Slide } from "@material-ui/core";
import scrollToComponent from 'react-scroll-to-component';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class MajorChartAlbany extends Component {
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
            type: "column",
            name: "Maximum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Admissions", y: 12500 },
				{ label: "Anthropology", y: 16346 },
				{ label: "Athletics Administration", y: 12240 },
				{ label: "Atmospheric & Environmental Sciences", y: 19660 },
				{ label: "Atmospheric Sciences Rsch Center", y: 21594 },
				{ label: "Biology", y: 19660 },
				{ label: "Biomedical Science", y: 19650 },
				{ label: "Campus Center", y: 12240 },
				{ label: "Campus Recreation", y: 12240 },
				{ label: "Career & Professional Development", y: 13380 },
				{ label: "Center for International Education & Global Strategy", y: 12500 },
				{ label: "Center for Policy Research", y: 17156 },
				{ label: "Chemistry", y: 19660 },
				{ label: "Client Support Services", y: 12255 },
				{ label: "College of Emergency Preparedness, Homeland Security & Cybersecurity", y: 16260 },
				{ label: "Communication", y: 16346 },
				{ label: "Community Standards", y: 12240 },
				{ label: "Computer Science", y: 16506 },
				{ label: "Counseling  & Psychological Services", y: 23796 },
				{ label: "Dean's Office --School of Public Health", y: 16238 },
				{ label: "Economics", y: 16346 },
				{ label: "Educational & Counseling Psychology", y: 16260 },
				{ label: "Educational Opportunity Prgrm", y: 12500 },
				{ label: "Educational Policy & Leadership", y: 16260 },
				{ label: "Educational Psychology & Method", y: 16260 },
				{ label: "Educational Theory & Practice", y: 16260 },
				{ label: "Electrical&CompEngr", y: 16506 },
				{ label: "English", y: 16346 },
				{ label: "Environmental & Sust Engr", y: 16506 },
				{ label: "Environmental Health Sciences", y: 19660 },
				{ label: "Epidemiology & Biostatistics", y: 19650 },
				{ label: "Graduate Admissions", y: 12500 },
				{ label: "Graduate Studies", y: 19647 },
				{ label: "Health Policy", y: 9972 },
				{ label: "Hindelang Center", y: 21240 },
				{ label: "History", y: 16346 },
				{ label: "Institute for Teaching, Learning & Academic Leadership", y: 12880 },
				{ label: "Institutional Research", y: 12500 },
				{ label: "Languages, Lits. & Cultures", y: 16346 },
				{ label: "Latin American and Caribbean Studies", y: 16346 },
				{ label: "Literacy Teaching and Learning", y: 16260 },
				{ label: "Mathematics and Statistics", y: 18970 },
				{ label: "NYS Writers Institute", y: 16640 },
				{ label: "Office of Access and Academic Enrichment", y: 10201 },
				{ label: "Office of Undergraduate Education", y: 12760 },
				{ label: "Philosophy", y: 16346 },
				{ label: "Physics", y: 18980 },
				{ label: "Political Science", y: 18278 },
				{ label: "President's Office", y: 16250 },
				{ label: "Provost & VP- Academic Affairs", y: 11226 },
				{ label: "Psychological Services Center", y: 17544 },
				{ label: "Psychology", y: 17367 },
				{ label: "Public Administration & Policy", y: 18440 },
				{ label: "Registrar's Office", y: 12500 },
				{ label: "Residential Life", y: 12240 },
				{ label: "School of Criminal Justice", y: 21244 },
				{ label: "School of Social Welfare", y: 16260 },
				{ label: "Sociology", y: 21244 },
				{ label: "Student Involvement & Leadership", y: 13260 },
				{ label: "Sustainability", y: 15620 },
				{ label: "University Libraries", y: 9964 },
				{ label: "Vice Pres for Student Affairs", y: 12244 },
				{ label: "Women's, Gender, and Sexuality Studies", y: 10420 }
			]
		},
		{
			click: this.handleBarClick,
            type: "column",
            name: "Average",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Admissions", y: 12500 },
				{ label: "Anthropology", y: 16282 },
				{ label: "Athletics Administration", y: 11216 },
				{ label: "Atmospheric & Environmental Sciences", y: 19604 },
				{ label: "Atmospheric Sciences Rsch Center", y: 20342 },
				{ label: "Biology", y: 19654 },
				{ label: "Biomedical Science", y: 19647 },
				{ label: "Campus Center", y: 12240 },
				{ label: "Campus Recreation", y: 11016 },
				{ label: "Career & Professional Development", y: 13380 },
				{ label: "Center for International Education & Global Strategy", y: 12500 },
				{ label: "Center for Policy Research", y: 17156 },
				{ label: "Chemistry", y: 19550 },
				{ label: "Client Support Services", y: 12247 },
				{ label: "College of Emergency Preparedness, Homeland Security & Cybersecurity", y: 14778 },
				{ label: "Communication", y: 16285 },
				{ label: "Community Standards", y: 12240 },
				{ label: "Computer Science", y: 16506 },
				{ label: "Counseling  & Psychological Services", y: 22119 },
				{ label: "Dean's Office --School of Public Health", y: 12082 },
				{ label: "Economics", y: 16247 },
				{ label: "Educational & Counseling Psychology", y: 16247 },
				{ label: "Educational Opportunity Prgrm", y: 12500 },
				{ label: "Educational Policy & Leadership", y: 16048 },
				{ label: "Educational Psychology & Method", y: 16252 },
				{ label: "Educational Theory & Practice", y: 16247 },
				{ label: "Electrical&CompEngr", y: 16364 },
				{ label: "English", y: 16277 },
				{ label: "Environmental & Sust Engr", y: 16506 },
				{ label: "Environmental Health Sciences", y: 19651 },
				{ label: "Epidemiology & Biostatistics", y: 16479 },
				{ label: "Graduate Admissions", y: 12500 },
				{ label: "Graduate Studies", y: 15851 },
				{ label: "Health Policy", y: 9966 },
				{ label: "Hindelang Center", y: 21233 },
				{ label: "History", y: 16290 },
				{ label: "Institute for Teaching, Learning & Academic Leadership", y: 12690 },
				{ label: "Institutional Research", y: 12500 },
				{ label: "Languages, Lits. & Cultures", y: 15800 },
				{ label: "Latin American and Caribbean Studies", y: 16210 },
				{ label: "Literacy Teaching and Learning", y: 16243 },
				{ label: "Mathematics and Statistics", y: 18486 },
				{ label: "NYS Writers Institute", y: 16640 },
				{ label: "Office of Access and Academic Enrichment", y: 10201 },
				{ label: "Office of Undergraduate Education", y: 12586 },
				{ label: "Philosophy", y: 16197 },
				{ label: "Physics", y: 18948 },
				{ label: "Political Science", y: 16344 },
				{ label: "President's Office", y: 14245 },
				{ label: "Provost & VP- Academic Affairs", y: 11226 },
				{ label: "Psychological Services Center", y: 16948 },
				{ label: "Psychology", y: 17339 },
				{ label: "Public Administration & Policy", y: 16937 },
				{ label: "Registrar's Office", y: 12500 },
				{ label: "Residential Life", y: 11387 },
				{ label: "School of Criminal Justice", y: 20941 },
				{ label: "School of Social Welfare", y: 16244 },
				{ label: "Sociology", y: 17451 },
				{ label: "Student Involvement & Leadership", y: 11439 },
				{ label: "Sustainability", y: 15620 },
				{ label: "University Libraries", y: 9964 },
				{ label: "Vice Pres for Student Affairs", y: 12242 },
				{ label: "Women's, Gender, and Sexuality Studies", y: 10420 }
			]
        },
		{
			click: this.handleBarClick,
            type: "column",
            name: "Minimum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [		
				{ label: "Admissions", y: 12500 },
				{ label: "Anthropology", y: 16238 },
				{ label: "Athletics Administration", y: 9964 },
				{ label: "Atmospheric & Environmental Sciences", y: 19260 },
				{ label: "Atmospheric Sciences Rsch Center", y: 20015 },
				{ label: "Biology", y: 19647 },
				{ label: "Biomedical Science", y: 19647 },
				{ label: "Campus Center", y: 12240 },
				{ label: "Campus Recreation", y: 10200 },
				{ label: "Career & Professional Development", y: 13380 },
				{ label: "Center for International Education & Global Strategy", y: 12500 },
				{ label: "Center for Policy Research", y: 17156 },
				{ label: "Chemistry", y: 17682 },
				{ label: "Client Support Services", y: 12240 },
				{ label: "College of Emergency Preparedness, Homeland Security & Cybersecurity", y: 9964 },
				{ label: "Communication", y: 16238 },
				{ label: "Community Standards", y: 12240 },
				{ label: "Computer Science", y: 16506 },
				{ label: "Counseling  & Psychological Services", y: 18765 },
				{ label: "Dean's Office --School of Public Health", y: 10004 },
				{ label: "Economics", y: 15940 },
				{ label: "Educational & Counseling Psychology", y: 16238 },
				{ label: "Educational Opportunity Prgrm", y: 12500 },
				{ label: "Educational Policy & Leadership", y: 14858 },
				{ label: "Educational Psychology & Method", y: 16238 },
				{ label: "Educational Theory & Practice", y: 16238 },
				{ label: "Electrical&CompEngr", y: 15516 },
				{ label: "English", y: 16238 },
				{ label: "Environmental & Sust Engr", y: 16506 },
				{ label: "Environmental Health Sciences", y: 19647 },
				{ label: "Epidemiology & Biostatistics", y: 9964 },
				{ label: "Graduate Admissions", y: 12500 },
				{ label: "Graduate Studies", y: 10587 },
				{ label: "Health Policy", y: 9964 },
				{ label: "Hindelang Center", y: 21220 },
				{ label: "History", y: 16238 },
				{ label: "Institute for Teaching, Learning & Academic Leadership", y: 12500 },
				{ label: "Institutional Research", y: 12500 },
				{ label: "Languages, Lits. & Cultures", y: 12500 },
				{ label: "Latin American and Caribbean Studies", y: 15940 },
				{ label: "Literacy Teaching and Learning", y: 16238 },
				{ label: "Mathematics and Statistics", y: 9964 },
				{ label: "NYS Writers Institute", y: 16640 },
				{ label: "Office of Access and Academic Enrichment", y: 10201 },
				{ label: "Office of Undergraduate Education", y: 12500 },
				{ label: "Philosophy", y: 15940 },
				{ label: "Physics", y: 18896 },
				{ label: "Political Science", y: 15520 },
				{ label: "President's Office", y: 12240 },
				{ label: "Provost & VP- Academic Affairs", y: 11226 },
				{ label: "Psychological Services Center", y: 16260 },
				{ label: "Psychology", y: 17319 },
				{ label: "Public Administration & Policy", y: 9964 },
				{ label: "Registrar's Office", y: 12500 },
				{ label: "Residential Life", y: 9964 },
				{ label: "School of Criminal Justice", y: 19520 },
				{ label: "School of Social Welfare", y: 16238 },
				{ label: "Sociology", y: 17319 },
				{ label: "Student Involvement & Leadership", y: 10085 },
				{ label: "Sustainability", y: 15620 },
				{ label: "University Libraries", y: 9964 },
				{ label: "Vice Pres for Student Affairs", y: 12240 },
				{ label: "Women's, Gender, and Sexuality Studies", y: 10420 }
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
		</div>
	);
  }
}
 
export default MajorChartAlbany;
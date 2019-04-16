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
			text: "TA Salary Ranges by Department (SUNY Stony Brook)"
		},
		subtitles: [{
			text: "As of April 19th, 2019"
		}],
		axisY: {
			includeZero: false,
			prefix: "$",
			title: "Salary",
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
                { label: "AERTC MICROSCOPY IMAGING CENTER", y: 22107 }, 
				{ label: "Alda Center", y: 24464 }, 
				{ label: "Anesthesiology", y: 24464 }, 
				{ label: "Anthropology", y: 34693 }, 
				{ label: "APPLIED MATH & STATISTICS", y: 29948 }, 
				{ label: "APPLIED MATH-STARTUP & COMMITS", y: 10350 }, 
				{ label: "Applied Mathematics and Stat", y: 25885 }, 
				{ label: "Art", y: 27014 }, 
				{ label: "Asian & Asian-American Studies", y: 25885 }, 
				{ label: "Athletics", y: 20158 }, 
				{ label: "Biochemistry", y: 30196 }, 
				{ label: "Biomedical Engineering", y: 27754 }, 
				{ label: "Biomedical Informatics", y: 20420 }, 
				{ label: "BSB/MCB Grad Programs", y: 29909 }, 
				{ label: "Cancer Center", y: 32472 }, 
				{ label: "CENTER-STUDY MEN & MASCULINITIES", y: 20578 }, 
				{ label: "Chemical Engineering", y: 19759 }, 
				{ label: "Chemistry", y: 26660 }, 
				{ label: "COMMUNICATING SCIENCE", y: 19759 }, 
				{ label: "Comp Ctr", y: 28465 }, 
				{ label: "Computer Science", y: 23907 }, 
				{ label: "Computing Center", y: 28465 }, 
				{ label: "Cultural Analysis and Theory", y: 26503 }, 
				{ label: "DEAN'S OFFICE-ARTS&SCIENCES", y: 20158 }, 
				{ label: "DEPARTMENTAL STIPEND SUPPORT", y: 10801 }, 
				{ label: "Dept of Microbiology", y: 30605 }, 
				{ label: "Dept of Pharmacology", y: 30665 }, 
				{ label: "Disability Support Services", y: 10350 }, 
				{ label: "DoIT", y: 29557 }, 
				{ label: "DoIT - Computing Center", y: 29037 }, 
				{ label: "ECOLOGY & EVOLUTION", y: 19759 }, 
				{ label: "Ecology and Evolution", y: 27206 }, 
				{ label: "Economics", y: 23945 }, 
				{ label: "Electrical Engineering", y: 27113 }, 
				{ label: "English", y: 35019 }, 
				{ label: "European Languages", y: 19759 }, 
				{ label: "FEES", y: 20420 }, 
				{ label: "GA", y: 10559 }, 
				{ label: "Genetics Graduate Program", y: 23907 }, 
				{ label: "Geosciences", y: 25542 }, 
				{ label: "Grad Assistant", y: 31305 }, 
				{ label: "GRAD FELLOWS SUPPLEMENT", y: 20420 }, 
				{ label: "Graduate School", y: 22822 }, 
				{ label: "HEALTH TECH & MANAG SUMMER PROG", y: 20578 }, 
				{ label: "Hispanic Languages", y: 29948 }, 
				{ label: "HISPANIC LANGUAGES & LITERATURE", y: 19759 }, 
				{ label: "History", y: 29062 }, 
				{ label: "Institute for Theoretical Phys", y: 26805 }, 
				{ label: "INSTITUTE FOR THEORETICAL PHYSIC", y: 26847 }, 
				{ label: "Language Learning/Research Lab", y: 22962 }, 
				{ label: "Linguistics", y: 29934 }, 
				{ label: "Marine Science", y: 30081 }, 
				{ label: "Marine Sciences", y: 22822 }, 
				{ label: "Marine Sciences Center", y: 19759 }, 
				{ label: "MATERIAL SCI-STARTUP & COMMITS", y: 22323 }, 
				{ label: "MATERIALS SCIENCE & CHEM ENG", y: 19899 }, 
				{ label: "Materials Science and Engineer", y: 23907 }, 
				{ label: "Mathematics", y: 34537 }, 
				{ label: "MCB GRAD PROGRAM", y: 19759 }, 
				{ label: "Mechanical Engineering", y: 25797 }, 
				{ label: "MICROBIOLOGY SALARY RECOVERY", y: 31900 }, 
				{ label: "Mircrobiology", y: 37017 }, 
				{ label: "Music", y: 29948 }, 
				{ label: "NEARSHORE OCEAN TRAWL SURVEY", y: 22134 }, 
				{ label: "Neurobiology and Behavior", y: 25504 }, 
				{ label: "Office of the Dean SBS", y: 23906 }, 
				{ label: "Office of the Dean, SHTM", y: 20158 }, 
				{ label: "OGL-GSB OBSERVATORY & BREACH MON", y: 10780 }, 
				{ label: "Philosophy", y: 31208 }, 
				{ label: "Physics", y: 27014 }, 
				{ label: "PHYSICS & ASTRONOMY", y: 32221 }, 
				{ label: "Physics and Astronomy", y: 31630 }, 
				{ label: "Political Science", y: 29431 }, 
				{ label: "Professional Education Program", y: 20158 }, 
				{ label: "Psychology", y: 29948 }, 
				{ label: "School of Social Welfare", y: 22662 }, 
				{ label: "SH Creative Writing MFA", y: 25797 }, 
				{ label: "SH Theater MFA", y: 11279 }, 
				{ label: "Sociology", y: 29948 }, 
				{ label: "SoMAS", y: 28572 }, 
				{ label: "SOMAS Tuition", y: 12089 }, 
				{ label: "Southampton Marine Sciences", y: 20578 }, 
				{ label: "TECHNOLOGY & SOCIETY", y: 22903 }, 
				{ label: "Technology and Society", y: 22844 }, 
				{ label: "UGC CENTERS", y: 20578 }, 
				{ label: "Undergraduate Colleges", y: 19899 }, 
				{ label: "WANG Operating Expenses", y: 20578 }, 
				{ label: "WOMEN'S,GENDER,&SEXUALITY STUDIE", y: 25885 }, 
				{ label: "Writing Program", y: 26615 }
			]
		},
		{
			click: this.handleBarClick,
            type: "column",
            name: "Average",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "AERTC MICROSCOPY IMAGING CENTER", y: 22107 }, 
				{ label: "Alda Center", y: 24464 }, 
				{ label: "Anesthesiology", y: 24464 }, 
				{ label: "Anthropology", y: 20645 }, 
				{ label: "APPLIED MATH & STATISTICS", y: 22411 }, 
				{ label: "APPLIED MATH-STARTUP & COMMITS", y: 10350 }, 
				{ label: "Applied Mathematics and Stat", y: 17908 }, 
				{ label: "Art", y: 19693 }, 
				{ label: "Asian & Asian-American Studies", y: 23021 }, 
				{ label: "Athletics", y: 15254 }, 
				{ label: "Biochemistry", y: 24912 }, 
				{ label: "Biomedical Engineering", y: 22196 }, 
				{ label: "Biomedical Informatics", y: 20089 }, 
				{ label: "BSB/MCB Grad Programs", y: 23695 }, 
				{ label: "Cancer Center", y: 32472 }, 
				{ label: "CENTER-STUDY MEN & MASCULINITIES", y: 20578 }, 
				{ label: "Chemical Engineering", y: 15316 }, 
				{ label: "Chemistry", y: 16203 }, 
				{ label: "COMMUNICATING SCIENCE", y: 19759 }, 
				{ label: "Comp Ctr", y: 28465 }, 
				{ label: "Computer Science", y: 16779 }, 
				{ label: "Computing Center", y: 28465 }, 
				{ label: "Cultural Analysis and Theory", y: 21122 }, 
				{ label: "DEAN'S OFFICE-ARTS&SCIENCES", y: 20158 }, 
				{ label: "DEPARTMENTAL STIPEND SUPPORT", y: 10801 }, 
				{ label: "Dept of Microbiology", y: 21336 }, 
				{ label: "Dept of Pharmacology", y: 30665 }, 
				{ label: "Disability Support Services", y: 10350 }, 
				{ label: "DoIT", y: 29557 }, 
				{ label: "DoIT - Computing Center", y: 29037 }, 
				{ label: "ECOLOGY & EVOLUTION", y: 19759 }, 
				{ label: "Ecology and Evolution", y: 18128 }, 
				{ label: "Economics", y: 16708 }, 
				{ label: "Electrical Engineering", y: 16410 }, 
				{ label: "English", y: 23164 }, 
				{ label: "European Languages", y: 16692 }, 
				{ label: "FEES", y: 20420 }, 
				{ label: "GA", y: 10559 }, 
				{ label: "Genetics Graduate Program", y: 19706 }, 
				{ label: "Geosciences", y: 17374 }, 
				{ label: "Grad Assistant", y: 30396 }, 
				{ label: "GRAD FELLOWS SUPPLEMENT", y: 20420 }, 
				{ label: "Graduate School", y: 17643 }, 
				{ label: "HEALTH TECH & MANAG SUMMER PROG", y: 20578 }, 
				{ label: "Hispanic Languages", y: 20853 }, 
				{ label: "HISPANIC LANGUAGES & LITERATURE", y: 19759 }, 
				{ label: "History", y: 22272 }, 
				{ label: "Institute for Theoretical Phys", y: 26804 }, 
				{ label: "INSTITUTE FOR THEORETICAL PHYSIC", y: 26847 }, 
				{ label: "Language Learning/Research Lab", y: 21770 }, 
				{ label: "Linguistics", y: 19855 }, 
				{ label: "Marine Science", y: 30081 }, 
				{ label: "Marine Sciences", y: 18969 }, 
				{ label: "Marine Sciences Center", y: 14065 }, 
				{ label: "MATERIAL SCI-STARTUP & COMMITS", y: 22323 }, 
				{ label: "MATERIALS SCIENCE & CHEM ENG", y: 19899 }, 
				{ label: "Materials Science and Engineer", y: 17879 }, 
				{ label: "Mathematics", y: 22744 }, 
				{ label: "MCB GRAD PROGRAM", y: 19759 }, 
				{ label: "Mechanical Engineering", y: 20760 }, 
				{ label: "MICROBIOLOGY SALARY RECOVERY", y: 30992 }, 
				{ label: "Mircrobiology", y: 37017 }, 
				{ label: "Music", y: 20480 }, 
				{ label: "NEARSHORE OCEAN TRAWL SURVEY", y: 22134 }, 
				{ label: "Neurobiology and Behavior", y: 23396 }, 
				{ label: "Office of the Dean SBS", y: 23906 }, 
				{ label: "Office of the Dean, SHTM", y: 20158 }, 
				{ label: "OGL-GSB OBSERVATORY & BREACH MON", y: 10780 }, 
				{ label: "Philosophy", y: 22170 }, 
				{ label: "Physics", y: 27014 }, 
				{ label: "PHYSICS & ASTRONOMY", y: 25503 }, 
				{ label: "Physics and Astronomy", y: 21667 }, 
				{ label: "Political Science", y: 21939 }, 
				{ label: "Professional Education Program", y: 20158 }, 
				{ label: "Psychology", y: 19432 }, 
				{ label: "School of Social Welfare", y: 19047 }, 
				{ label: "SH Creative Writing MFA", y: 19845 }, 
				{ label: "SH Theater MFA", y: 11279 }, 
				{ label: "Sociology", y: 19628 }, 
				{ label: "SoMAS", y: 25108 }, 
				{ label: "SOMAS Tuition", y: 12089 }, 
				{ label: "Southampton Marine Sciences", y: 20032 }, 
				{ label: "TECHNOLOGY & SOCIETY", y: 22873 }, 
				{ label: "Technology and Society", y: 18679 }, 
				{ label: "UGC CENTERS", y: 20168 }, 
				{ label: "Undergraduate Colleges", y: 15339 }, 
				{ label: "WANG Operating Expenses", y: 20578 }, 
				{ label: "WOMEN'S,GENDER,&SEXUALITY STUDIE", y: 22207 }, 
				{ label: "Writing Program", y: 26615 }
			]
        },
		{
			click: this.handleBarClick,
            type: "column",
            name: "Minimum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [		
				{ label: "AERTC MICROSCOPY IMAGING CENTER", y: 22107 }, 
				{ label: "Alda Center", y: 24464 }, 
				{ label: "Anesthesiology", y: 24464 }, 
				{ label: "Anthropology", y: 10350 }, 
				{ label: "APPLIED MATH & STATISTICS", y: 19759 }, 
				{ label: "APPLIED MATH-STARTUP & COMMITS", y: 10350 }, 
				{ label: "Applied Mathematics and Stat", y: 10350 }, 
				{ label: "Art", y: 10779 }, 
				{ label: "Asian & Asian-American Studies", y: 20158 }, 
				{ label: "Athletics", y: 10350 }, 
				{ label: "Biochemistry", y: 19759 }, 
				{ label: "Biomedical Engineering", y: 11126 }, 
				{ label: "Biomedical Informatics", y: 19759 }, 
				{ label: "BSB/MCB Grad Programs", y: 19759 }, 
				{ label: "Cancer Center", y: 32472 }, 
				{ label: "CENTER-STUDY MEN & MASCULINITIES", y: 20578 }, 
				{ label: "Chemical Engineering", y: 10874 }, 
				{ label: "Chemistry", y: 10350 }, 
				{ label: "COMMUNICATING SCIENCE", y: 19759 }, 
				{ label: "Comp Ctr", y: 28465 }, 
				{ label: "Computer Science", y: 10350 }, 
				{ label: "Computing Center", y: 28465 }, 
				{ label: "Cultural Analysis and Theory", y: 10350 }, 
				{ label: "DEAN'S OFFICE-ARTS&SCIENCES", y: 20158 }, 
				{ label: "DEPARTMENTAL STIPEND SUPPORT", y: 10801 }, 
				{ label: "Dept of Microbiology", y: 10559 }, 
				{ label: "Dept of Pharmacology", y: 30665 }, 
				{ label: "Disability Support Services", y: 10350 }, 
				{ label: "DoIT", y: 29557 }, 
				{ label: "DoIT - Computing Center", y: 29037 }, 
				{ label: "ECOLOGY & EVOLUTION", y: 19759 }, 
				{ label: "Ecology and Evolution", y: 10559 }, 
				{ label: "Economics", y: 10350 }, 
				{ label: "Electrical Engineering", y: 10350 }, 
				{ label: "English", y: 10696 }, 
				{ label: "European Languages", y: 10559 }, 
				{ label: "FEES", y: 20420 }, 
				{ label: "GA", y: 10559 }, 
				{ label: "Genetics Graduate Program", y: 12327 }, 
				{ label: "Geosciences", y: 10559 }, 
				{ label: "Grad Assistant", y: 29487 }, 
				{ label: "GRAD FELLOWS SUPPLEMENT", y: 20420 }, 
				{ label: "Graduate School", y: 10350 }, 
				{ label: "HEALTH TECH & MANAG SUMMER PROG", y: 20578 }, 
				{ label: "Hispanic Languages", y: 10350 }, 
				{ label: "HISPANIC LANGUAGES & LITERATURE", y: 19759 }, 
				{ label: "History", y: 10559 }, 
				{ label: "Institute for Theoretical Phys", y: 26804 }, 
				{ label: "INSTITUTE FOR THEORETICAL PHYSIC", y: 26847 }, 
				{ label: "Language Learning/Research Lab", y: 20578 }, 
				{ label: "Linguistics", y: 10351 }, 
				{ label: "Marine Science", y: 30081 }, 
				{ label: "Marine Sciences", y: 10350 }, 
				{ label: "Marine Sciences Center", y: 10561 }, 
				{ label: "MATERIAL SCI-STARTUP & COMMITS", y: 22323 }, 
				{ label: "MATERIALS SCIENCE & CHEM ENG", y: 19899 }, 
				{ label: "Materials Science and Engineer", y: 10632 }, 
				{ label: "Mathematics", y: 10350 }, 
				{ label: "MCB GRAD PROGRAM", y: 19759 }, 
				{ label: "Mechanical Engineering", y: 19759 }, 
				{ label: "MICROBIOLOGY SALARY RECOVERY", y: 30085 }, 
				{ label: "Mircrobiology", y: 37017 }, 
				{ label: "Music", y: 10350 }, 
				{ label: "NEARSHORE OCEAN TRAWL SURVEY", y: 22134 }, 
				{ label: "Neurobiology and Behavior", y: 19759 }, 
				{ label: "Office of the Dean SBS", y: 23906 }, 
				{ label: "Office of the Dean, SHTM", y: 20158 }, 
				{ label: "OGL-GSB OBSERVATORY & BREACH MON", y: 10780 }, 
				{ label: "Philosophy", y: 10559 }, 
				{ label: "Physics", y: 27014 }, 
				{ label: "PHYSICS & ASTRONOMY", y: 23462 }, 
				{ label: "Physics and Astronomy", y: 10350 }, 
				{ label: "Political Science", y: 20158 }, 
				{ label: "Professional Education Program", y: 20158 }, 
				{ label: "Psychology", y: 10350 }, 
				{ label: "School of Social Welfare", y: 15433 }, 
				{ label: "SH Creative Writing MFA", y: 10779 }, 
				{ label: "SH Theater MFA", y: 11279 }, 
				{ label: "Sociology", y: 10350 }, 
				{ label: "SoMAS", y: 21273 }, 
				{ label: "SOMAS Tuition", y: 12089 }, 
				{ label: "Southampton Marine Sciences", y: 19759 }, 
				{ label: "TECHNOLOGY & SOCIETY", y: 22844 }, 
				{ label: "Technology and Society", y: 10350 }, 
				{ label: "UGC CENTERS", y: 19759 }, 
				{ label: "Undergraduate Colleges", y: 10779 }, 
				{ label: "WANG Operating Expenses", y: 20578 }, 
				{ label: "WOMEN'S,GENDER,&SEXUALITY STUDIE", y: 20158 }, 
				{ label: "Writing Program", y: 26615 }
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
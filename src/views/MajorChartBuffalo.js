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
			text: "TA Salary Ranges by Department (SUNY University at Buffalo)"
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
            // TODO: Update these just incase!
			click: this.handleBarClick,
            type: "column",
            name: "Maximum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Office Of Admissions", y: 16900 },
                { label: "Network and Classroom Services", y: 27546 },
                { label: "Campus Living", y: 10482 },
                { label: "Career Services", y: 10203 },
                { label: "Early Childhood Research Center", y: 15312 },
                { label: "Art", y: 15004 },
                { label: "Classics", y: 15111 },
                { label: "Comparative Literature", y: 15060 },
                { label: "English", y: 15740 },
                { label: "Media Study", y: 14940 },
                { label: "Music", y: 14740 },
                { label: "Theatre And Dance", y: 13460 },
                { label: "School Of Architecture And Planning", y: 12240 },
                { label: "Architecture", y: 12780 },
                { label: "Graduate School Of Education", y: 9964 },
                { label: "Learning Center", y: 21417 },
                { label: "Teacher Education Institute", y: 10001 },
                { label: "School Of Engineering And Applied Sciences", y: 24127 },
                { label: "Chemical and Biological Engineering", y: 26104 },
                { label: "Civil, Structural and Environmental Engineering", y: 23994 },
                { label: "Industrial and Systems Engineering", y: 18615 },
                { label: "Mechanical And Aerospace Engineering", y: 24201 },
                { label: "Library And Information Studies", y: 19380 },
                { label: "Chemistry", y: 23460 },
                { label: "Geology", y: 17180 },
                { label: "Mathematics", y: 19160 },
                { label: "Physics-Personnel and Financial", y: 19360 },
                { label: "Biostatistics", y: 24494 },
                { label: "Interdisciplinary Degree Programs Social Sciences", y: 14360 },
                { label: "Anthropology", y: 14776 },
                { label: "Economics", y: 17340 },
                { label: "Geography", y: 14980 },
                { label: "History", y: 15300 },
                { label: "Linguistics", y: 15000 },
                { label: "Philosophy", y: 14390 },
                { label: "Political Science", y: 14680 },
                { label: "Psychology", y: 15420 },
                { label: "Sociology", y: 15675 },
                { label: "School Of Social Work", y: 16320 },
                { label: "Accounting", y: 20620 },
                { label: "Finance", y: 20620 },
                { label: "Organization and Human Resources", y: 20620 },
                { label: "Global Gender & Sexuality Studies", y: 14180 },
                { label: "Jacobs School of Medicine and Biomedical Sciences", y: 26698 },
                { label: "Biochemistry", y: 29288 },
                { label: "Medicine", y: 28326 },
                { label: "Microbiology And Immunology", y: 28118 },
                { label: "Neurology", y: 28404 },
                { label: "Orthopaedics", y: 18505 },
                { label: "Pharmacology And Toxicology", y: 27546 },
                { label: "School Of Pharmacy And Pharmaceutical Sciences", y: 23994 },
                { label: "Pharmaceutical Sciences", y: 24982 },
                { label: "Alumni Engagement", y: 10160 },
                { label: "Communicative Disorders And Sciences", y: 15606 },
                { label: "Communication", y: 16970 },
                { label: "Biological Sciences", y: 20700 },
                { label: "Romance Languages and Literatures", y: 15060 },
                { label: "Accessibility Resources", y: 12500 },
                { label: "Learning And Instruction", y: 10420 },
                { label: "Counseling, School, And Educational Psychology", y: 13306 },
                { label: "Electrical Engineering", y: 19600 },
                { label: "International Student Services", y: 14638 },
                { label: "Campus Life", y: 10203 },
                { label: "Community Health and Health Behavior", y: 28039 },
                { label: "Office Of The Graduate School", y: 22157 },
                { label: "Computer Science And Engineering", y: 24551 },
                { label: "Educational Leadership And Policy", y: 10420 },
                { label: "Inst For Research and Education On Women & Gender", y: 18092 },
                { label: "Pathology And Anatomical Sciences", y: 28690 },
                { label: "Anderson Gallery", y: 13220 },
                { label: "University Honors College", y: 17238 },
                { label: "Access to College Excellence", y: 13234 },
                { label: "Student Success and Retention", y: 15262 },
                { label: "Student Conduct & Advocacy", y: 12240 },
                { label: "Orientation, Transition And Parent Programs", y: 10203 },
                { label: "Center for Nursing Research", y: 12070 },
                { label: "Management Science and Systems", y: 20620 },
                { label: "Marketing", y: 20620 },
                { label: "Biomedical Engineering", y: 18885 },
                { label: "The Academies", y: 14321 },
                { label: "Ctr for Undergrad Res & Creative Activities - Campus Life Fee", y: 15779 },
                { label: "Registrar", y: 9964 },
                { label: "Transnational Studies", y: 14800 },
                { label: "Nursing Academic Affairs", y: 11850 },
                { label: "Nursing Student Affairs", y: 11370 },
                { label: "Ctr for Excellence In Writing 3E Fund", y: 16320 },
                { label: "Biomedical Informatics Dept 3E-Medicine", y: 28690 },
                { label: "Computational & Data-Enabled Science & Engineering", y: 28690 },
                { label: "3E CLOE", y: 10000 },
                { label: "Human Capital 3E", y: 14454 },
                { label: "Dean of Undergraduate Education", y: 16320 },
                { label: "Epidemiology and Environmental Health", y: 20416 },
                { label: "Materials Design and Innovation", y: 24551 },
                { label: "Intercollegiate Athletics", y: 12260 },
                { label: "Operations Management", y: 20620 },
                { label: "MGT Alumni Engagement and External Relations", y: 10000 },
                { label: "CRC Administration", y: 10000 },
                { label: "CRC IEL: Internships Administrations", y: 10540 },
                { label: "GPO Admissions and Recruiting", y: 10000 },
                { label: "GPO Student Services", y: 10000 },
                { label: "MGT IT Administration", y: 10000 },
                { label: "Office of Student Engagement", y: 10203 },
                { label: "Global Health Equity", y: 21716 },
                { label: "Counseling Services", y: 13260 },
                { label: "UB Curriculum: General Education", y: 18564 },
                { label: "International Admissions", y: 15072 },
                { label: "Study Abroad Programs", y: 14413 },
                { label: "CAS Administration", y: 15620 },
                { label: "SA Admin Program", y: 10203 },
                { label: "Engineering Education", y: 16469 },
                { label: "GSE Communications & Marketing", y: 9964 },
                { label: "GSE Office of Graduate Admissions", y: 9964 },
                { label: "Office of Educational Effectiveness", y: 13060 },
                { label: "Res Life Admin", y: 12242 },
                { label: "Res Life Fitness", y: 10264 },
			]
		},
		{
			click: this.handleBarClick,
            type: "column",
            name: "Average",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [
                { label: "Office Of Admissions", y: 16787 },
                { label: "Network and Classroom Services", y: 27546 },
                { label: "Campus Living", y: 10359 },
                { label: "Career Services", y: 10203 },
                { label: "Early Childhood Research Center", y: 13326 },
                { label: "Art", y: 15004 },
                { label: "Classics", y: 14971 },
                { label: "Comparative Literature", y: 14947 },
                { label: "English", y: 15404 },
                { label: "Media Study", y: 14556 },
                { label: "Music", y: 14503 },
                { label: "Theatre And Dance", y: 13337 },
                { label: "School Of Architecture And Planning", y: 11102 },
                { label: "Architecture", y: 12780 },
                { label: "Graduate School Of Education", y: 9964 },
                { label: "Learning Center", y: 21417 },
                { label: "Teacher Education Institute", y: 9982 },
                { label: "School Of Engineering And Applied Sciences", y: 21881 },
                { label: "Chemical and Biological Engineering", y: 13071 },
                { label: "Civil, Structural and Environmental Engineering", y: 17625 },
                { label: "Industrial and Systems Engineering", y: 16511 },
                { label: "Mechanical And Aerospace Engineering", y: 18411 },
                { label: "Library And Information Studies", y: 12318 },
                { label: "Chemistry", y: 15643 },
                { label: "Geology", y: 15976 },
                { label: "Mathematics", y: 18307 },
                { label: "Physics-Personnel and Financial", y: 17463 },
                { label: "Biostatistics", y: 20893 },
                { label: "Interdisciplinary Degree Programs Social Sciences", y: 14360 },
                { label: "Anthropology", y: 14642 },
                { label: "Economics", y: 14746 },
                { label: "Geography", y: 14879 },
                { label: "History", y: 13493 },
                { label: "Linguistics", y: 14836 },
                { label: "Philosophy", y: 14141 },
                { label: "Political Science", y: 14416 },
                { label: "Psychology", y: 15124 },
                { label: "Sociology", y: 15095 },
                { label: "School Of Social Work", y: 11654 },
                { label: "Accounting", y: 15058 },
                { label: "Finance", y: 17508 },
                { label: "Organization and Human Resources", y: 18730 },
                { label: "Global Gender & Sexuality Studies", y: 13788 },
                { label: "Jacobs School of Medicine and Biomedical Sciences", y: 23863 },
                { label: "Biochemistry", y: 28317 },
                { label: "Medicine", y: 28326 },
                { label: "Microbiology And Immunology", y: 26666 },
                { label: "Neurology", y: 28238 },
                { label: "Orthopaedics", y: 18505 },
                { label: "Pharmacology And Toxicology", y: 27546 },
                { label: "School Of Pharmacy And Pharmaceutical Sciences", y: 23994 },
                { label: "Pharmaceutical Sciences", y: 24078 },
                { label: "Alumni Engagement", y: 10160 },
                { label: "Communicative Disorders And Sciences", y: 15476 },
                { label: "Communication", y: 15271 },
                { label: "Biological Sciences", y: 18440 },
                { label: "Romance Languages and Literatures", y: 14577 },
                { label: "Accessibility Resources", y: 12500 },
                { label: "Learning And Instruction", y: 10124 },
                { label: "Counseling, School, And Educational Psychology", y: 10670 },
                { label: "Electrical Engineering", y: 18700 },
                { label: "International Student Services", y: 12466 },
                { label: "Campus Life", y: 10203 },
                { label: "Community Health and Health Behavior", y: 25337 },
                { label: "Office Of The Graduate School", y: 20455 },
                { label: "Computer Science And Engineering", y: 18855 },
                { label: "Educational Leadership And Policy", y: 10078 },
                { label: "Inst For Research and Education On Women & Gender", y: 18092 },
                { label: "Pathology And Anatomical Sciences", y: 25970 },
                { label: "Anderson Gallery", y: 13220 },
                { label: "University Honors College", y: 17238 },
                { label: "Access to College Excellence", y: 13234 },
                { label: "Student Success and Retention", y: 15262 },
                { label: "Student Conduct & Advocacy", y: 12240 },
                { label: "Orientation, Transition And Parent Programs", y: 10203 },
                { label: "Center for Nursing Research", y: 11695 },
                { label: "Management Science and Systems", y: 14501 },
                { label: "Marketing", y: 19926 },
                { label: "Biomedical Engineering", y: 18685 },
                { label: "The Academies", y: 13839 },
                { label: "Ctr for Undergrad Res & Creative Activities - Campus Life Fee", y: 15779 },
                { label: "Registrar", y: 9964 },
                { label: "Transnational Studies", y: 13600 },
                { label: "Nursing Academic Affairs", y: 11460 },
                { label: "Nursing Student Affairs", y: 11370 },
                { label: "Ctr for Excellence In Writing 3E Fund", y: 16320 },
                { label: "Biomedical Informatics Dept 3E-Medicine", y: 28499 },
                { label: "Computational & Data-Enabled Science & Engineering", y: 23737 },
                { label: "3E CLOE", y: 10000 },
                { label: "Human Capital 3E", y: 14454 },
                { label: "Dean of Undergraduate Education", y: 16320 },
                { label: "Epidemiology and Environmental Health", y: 19300 },
                { label: "Materials Design and Innovation", y: 19776 },
                { label: "Intercollegiate Athletics", y: 12260 },
                { label: "Operations Management", y: 13746 },
                { label: "MGT Alumni Engagement and External Relations", y: 10000 },
                { label: "CRC Administration", y: 10000 },
                { label: "CRC IEL: Internships Administrations", y: 10540 },
                { label: "GPO Admissions and Recruiting", y: 10000 },
                { label: "GPO Student Services", y: 10000 },
                { label: "MGT IT Administration", y: 10000 },
                { label: "Office of Student Engagement", y: 10203 },
                { label: "Global Health Equity", y: 21495 },
                { label: "Counseling Services", y: 13260 },
                { label: "UB Curriculum: General Education", y: 16338 },
                { label: "International Admissions", y: 15072 },
                { label: "Study Abroad Programs", y: 12311 },
                { label: "CAS Administration", y: 15620 },
                { label: "SA Admin Program", y: 10203 },
                { label: "Engineering Education", y: 16469 },
                { label: "GSE Communications & Marketing", y: 9964 },
                { label: "GSE Office of Graduate Admissions", y: 9964 },
                { label: "Office of Educational Effectiveness", y: 13060 },
                { label: "Res Life Admin", y: 10579 },
                { label: "Res Life Fitness", y: 10264 },
			]
        },
		{
			click: this.handleBarClick,
            type: "column",
            name: "Minimum",
            showInLegend: "true",
			yValueFormatString: "$#,##0",
			dataPoints: [		
				{ label: "Office Of Admissions", y: 16562 },
                { label: "Network and Classroom Services", y: 27546 },
                { label: "Campus Living", y: 10210 },
                { label: "Career Services", y: 10203 },
                { label: "Early Childhood Research Center", y: 12220 },
                { label: "Art", y: 15004 },
                { label: "Classics", y: 14811 },
                { label: "Comparative Literature", y: 14760 },
                { label: "English", y: 14960 },
                { label: "Media Study", y: 14280 },
                { label: "Music", y: 13860 },
                { label: "Theatre And Dance", y: 13320 },
                { label: "School Of Architecture And Planning", y: 9964 },
                { label: "Architecture", y: 12780 },
                { label: "Graduate School Of Education", y: 9964 },
                { label: "Learning Center", y: 21417 },
                { label: "Teacher Education Institute", y: 9964 },
                { label: "School Of Engineering And Applied Sciences", y: 15284 },
                { label: "Chemical and Biological Engineering", y: 10040 },
                { label: "Civil, Structural and Environmental Engineering", y: 10292 },
                { label: "Industrial and Systems Engineering", y: 15300 },
                { label: "Mechanical And Aerospace Engineering", y: 9960 },
                { label: "Library And Information Studies", y: 9964 },
                { label: "Chemistry", y: 11730 },
                { label: "Geology", y: 14880 },
                { label: "Mathematics", y: 17080 },
                { label: "Physics-Personnel and Financial", y: 16840 },
                { label: "Biostatistics", y: 18156 },
                { label: "Interdisciplinary Degree Programs Social Sciences", y: 14360 },
                { label: "Anthropology", y: 14476 },
                { label: "Economics", y: 14454 },
                { label: "Geography", y: 14680 },
                { label: "History", y: 11419 },
                { label: "Linguistics", y: 14800 },
                { label: "Philosophy", y: 13810 },
                { label: "Political Science", y: 14080 },
                { label: "Psychology", y: 14880 },
                { label: "Sociology", y: 14825 },
                { label: "School Of Social Work", y: 9972 },
                { label: "Accounting", y: 11880 },
                { label: "Finance", y: 10310 },
                { label: "Organization and Human Resources", y: 10320 },
                { label: "Global Gender & Sexuality Studies", y: 13340 },
                { label: "Jacobs School of Medicine and Biomedical Sciences", y: 15620 },
                { label: "Biochemistry", y: 27546 },
                { label: "Medicine", y: 28326 },
                { label: "Microbiology And Immunology", y: 25215 },
                { label: "Neurology", y: 28072 },
                { label: "Orthopaedics", y: 18505 },
                { label: "Pharmacology And Toxicology", y: 27546 },
                { label: "School Of Pharmacy And Pharmaceutical Sciences", y: 23994 },
                { label: "Pharmaceutical Sciences", y: 21383 },
                { label: "Alumni Engagement", y: 10160 },
                { label: "Communicative Disorders And Sciences", y: 15286 },
                { label: "Communication", y: 14510 },
                { label: "Biological Sciences", y: 10130 },
                { label: "Romance Languages and Literatures", y: 13900 },
                { label: "Accessibility Resources", y: 12500 },
                { label: "Learning And Instruction", y: 9964 },
                { label: "Counseling, School, And Educational Psychology", y: 9964 },
                { label: "Electrical Engineering", y: 14453 },
                { label: "International Student Services", y: 11260 },
                { label: "Campus Life", y: 10203 },
                { label: "Community Health and Health Behavior", y: 23921 },
                { label: "Office Of The Graduate School", y: 18754 },
                { label: "Computer Science And Engineering", y: 18480 },
                { label: "Educational Leadership And Policy", y: 9964 },
                { label: "Inst For Research and Education On Women & Gender", y: 18092 },
                { label: "Pathology And Anatomical Sciences", y: 16316 },
                { label: "Anderson Gallery", y: 13220 },
                { label: "University Honors College", y: 17238 },
                { label: "Access to College Excellence", y: 13234 },
                { label: "Student Success and Retention", y: 15262 },
                { label: "Student Conduct & Advocacy", y: 12240 },
                { label: "Orientation, Transition And Parent Programs", y: 10203 },
                { label: "Center for Nursing Research", y: 11370 },
                { label: "Management Science and Systems", y: 10200 },
                { label: "Marketing", y: 19580 },
                { label: "Biomedical Engineering", y: 18615 },
                { label: "The Academies", y: 13260 },
                { label: "Ctr for Undergrad Res & Creative Activities - Campus Life Fee", y: 15779 },
                { label: "Registrar", y: 9964 },
                { label: "Transnational Studies", y: 11880 },
                { label: "Nursing Academic Affairs", y: 11370 },
                { label: "Nursing Student Affairs", y: 11370 },
                { label: "Ctr for Excellence In Writing 3E Fund", y: 16320 },
                { label: "Biomedical Informatics Dept 3E-Medicine", y: 28118 },
                { label: "Computational & Data-Enabled Science & Engineering", y: 18885 },
                { label: "3E CLOE", y: 10000 },
                { label: "Human Capital 3E", y: 14454 },
                { label: "Dean of Undergraduate Education", y: 16320 },
                { label: "Epidemiology and Environmental Health", y: 17627 },
                { label: "Materials Design and Innovation", y: 17311 },
                { label: "Intercollegiate Athletics", y: 12260 },
                { label: "Operations Management", y: 10310 },
                { label: "MGT Alumni Engagement and External Relations", y: 10000 },
                { label: "CRC Administration", y: 10000 },
                { label: "CRC IEL: Internships Administrations", y: 10540 },
                { label: "GPO Admissions and Recruiting", y: 10000 },
                { label: "GPO Student Services", y: 10000 },
                { label: "MGT IT Administration", y: 10000 },
                { label: "Office of Student Engagement", y: 10203 },
                { label: "Global Health Equity", y: 21274 },
                { label: "Counseling Services", y: 13260 },
                { label: "UB Curriculum: General Education", y: 14280 },
                { label: "International Admissions", y: 15072 },
                { label: "Study Abroad Programs", y: 11260 },
                { label: "CAS Administration", y: 15620 },
                { label: "SA Admin Program", y: 10203 },
                { label: "Engineering Education", y: 16469 },
                { label: "GSE Communications & Marketing", y: 9964 },
                { label: "GSE Office of Graduate Admissions", y: 9964 },
                { label: "Office of Educational Effectiveness", y: 13060 },
                { label: "Res Life Admin", y: 10264 },
                { label: "Res Life Fitness", y: 10264 }

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
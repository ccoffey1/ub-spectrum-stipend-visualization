import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
import SchoolCharts from './SchoolCharts'

import {
    Route,
    Redirect,
    BrowserRouter,
  } from "react-router-dom";
import MajorChartBuffalo from './MajorChartBuffalo';
import MajorChartAlbany from './MajorChartAlbany';
import MajorChartBinghamton from './MajorChartBinghamton';
import MajorChartStonyBrook from './MajorChartStonyBrook';
import { Slide, AppBar, Toolbar } from '@material-ui/core';


const styles = ({
    root: {
        padding: 50
    }
})

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.redirect = this.redirect.bind(this)
    }

    handleItemClicked = itemInfo => {
        switch(itemInfo.dataPoint.label) {
            case "University at Buffalo":
                this.redirect("/ub")
                break;

            case "Albany":
                this.redirect("/albany")
                break;

            default:
                this.setState({ currentSchool: null })
        }
    }
    
    redirect = (site) => {
        this.props.history.push(site)
        this.setState({ redirect: false })
    }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
            <SchoolCharts itemClicked={this.handleItemClicked}/>
            <Route path="/" exact specific render={() => <Slide in={true} direction="right" timeout={1000}><h4 style={{color: "#727272"}}>Select a bar in the chart above for information by position.</h4></Slide>}/>
            <Route path="/ub" exact render={() => <MajorChartBuffalo itemClicked={this.handleItemClicked}/>}/>
            <Route path="/albany" render={() => <MajorChartAlbany itemClicked={this.handleItemClicked}/>}/>
            <Route path="/binghamton" render={() => <MajorChartBinghamton itemClicked={this.handleItemClicked}/>}/>
            <Route path="/stonybrook" render={() => <MajorChartStonyBrook itemClicked={this.handleItemClicked}/>}/>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home))

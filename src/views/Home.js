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
import { Slide, AppBar, Toolbar, Fab, Popover, Typography } from '@material-ui/core';


const styles = (theme) => ({
    root: {
        height: "100vp",
        width: "100vp",
        padding: 50
    },
    info: {
        position: "fixed",
        right: "3%",
        bottom: "3%",
        color: "white"
    },
    infoContent: {
        margin: theme.spacing.unit * 2
    }
})

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.redirect = this.redirect.bind(this)
    }

    state = {
        anchorEl: null
    }

    handleItemClicked = itemInfo => {
        switch(itemInfo.dataPoint.label) {
            case "University at Buffalo":
                this.redirect("/ub")
                break;
            
            case "Stony Brook":
                this.redirect("/stonybrook")
                break;

            case "Binghamton":
                this.redirect("/binghamton")
                break;

            case "Albany":
                this.redirect("/albany")
                break;

            default:
                this.setState({ currentSchool: null })
        }
    }
    
    handleInfoClicked = e => {
        this.setState({ 
            anchorEl: e.currentTarget
        })
    }

    handleInfoClose = () => {
        this.setState({ 
            anchorEl: null 
        })
    }

    redirect = (site) => {
        this.props.history.push(site)
        this.setState({ redirect: false })
    }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <div>
            <SchoolCharts itemClicked={this.handleItemClicked}/>
            <Route path="/" exact specific render={() => 
                <Slide in={true} direction="right" timeout={1000}>
                    <h4 style={{color: "#727272"}}>
                        <i class="far fa-lightbulb"></i> Select a bar in the chart above for information by position
                    </h4>
                </Slide>}
            />
            <Route path="/ub" exact render={() => <MajorChartBuffalo itemClicked={this.handleItemClicked}/>}/>
            <Route path="/albany" render={() => <MajorChartAlbany itemClicked={this.handleItemClicked}/>}/>
            <Route path="/binghamton" render={() => <MajorChartBinghamton itemClicked={this.handleItemClicked}/>}/>
            <Route path="/stonybrook" render={() => <MajorChartStonyBrook itemClicked={this.handleItemClicked}/>}/>
        </div>
        <Fab 
            className={classes.info} 
            color="secondary" 
            size="small" 
            onClick={this.handleInfoClicked}>
            <i class="fas fa-info"></i>
        </Fab>
        <Popover 
            className={classes.infoContent}
            open={open}
            anchorEl={anchorEl}
            onClick={this.handleInfoClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            >
            <Typography className={classes.infoContent}>
                <b style={{color: "gray"}}>By Christian Coffey</b>
                <br/>
                <a 
                    href="https://github.com/ccoffey1/ub-spectrum-stipend-visualization"
                    rel="noopener noreferrer"
                    target="_blank">
                    <i class="fas fa-external-link-alt"></i> View on Github
                </a>
            </Typography>
        </Popover>
      </div>
    )
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home))

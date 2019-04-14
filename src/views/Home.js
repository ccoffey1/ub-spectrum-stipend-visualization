import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolCharts from './SchoolCharts'

import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
import { Link } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
         display: 'flex',
         alignItems: 'center',
         padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    container: {
        marginLeft: drawerWidth,
        marginTop: 100,
        padding: 30
    }
})

class Home extends React.Component {
    state = {
        currentSchool: null
    }

    handleItemClicked = itemInfo => {
        console.log(itemInfo.dataPoint.label)
    }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BrowserRouter>
            <AppBar className={classes.appBar} position="absolute">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        TA Salaries
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={true}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader} />
                    <List>
                        <ListItem button component={NavLink} to="/by-university">
                            <ListItemText primary={[<i style={{marginRight: 10}} class="fas fa-university"></i>, "By University"]} />
                        </ListItem>
                        <Divider />
                    </List>

            </Drawer>
            <div className={classes.container}>
                <Route path="/by-university" render={() => <SchoolCharts itemClicked={this.handleItemClicked}/>}/>
            </div>
        </BrowserRouter>
      </div>
    )
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)

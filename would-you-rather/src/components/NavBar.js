import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB
const accent2 = purple.A200; // #E040FB (alternative method)

const NavBar = () => {
    return(
        <div>
        <AppBar position="static" style={{backgroundColor: primary}}>
            <Toolbar>
                <Typography variant="title" color="inherit">
                Would You Rather?
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
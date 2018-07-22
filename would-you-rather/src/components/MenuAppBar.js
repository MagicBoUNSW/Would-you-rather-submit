import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WelcomeUser from '../containers/WelcomeUser'
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 70%)',
  borderRadius: 0,
  border: 0,
  color: 'white',
  height: 60,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    searchfor:""
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null});
  };

  handleLogOut = () => {
    this.setState({ auth: false});
  };

  handleLogIn = () => {
    this.setState({ auth: false});
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, searchfor } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" style={style}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Would You Rather?
            </Typography>
            <WelcomeUser />
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
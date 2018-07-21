import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MenuAppBar from './components/MenuAppBar'
import QuestionsList from './components/QuestionsList'
import AddButton from './components/AddButton'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Routes from "./Routes";

const style = theme => ({
	fab: {
	    position: 'absolute',
    	bottom:0,
    	left:500,
	},
});

const custom_color = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }
  render() {
  	const {classes} = this.props;
    return (
    	<Router>
    		<div>
		        <MenuAppBar />
		        <Routes />
		        <Link to="/add"><AddButton /></Link>
		    </div>
    	</Router>
      
    );
  }
}

export default withStyles(style, { withTheme: true })(App);
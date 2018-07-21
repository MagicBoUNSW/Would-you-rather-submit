import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MenuAppBar from './components/MenuAppBar'
import AddButton from './components/AddButton'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Routes from "./Routes";
import Login from './containers/Login';
import Home from './containers/Home';
import LeaderBoard from './containers/LeaderBoard';
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import Page from './containers/Page'
import LoadingBar from 'react-redux-loading'
class App extends Component {
  componentDidMount() {
    this.props.loadInitial()
  }

  render() {
  	const {classes} = this.props;
    return (
    	<Router>
    		<div classename="container">         
		        <Fragment>
		          <LoadingBar />
		          <div className='body'>
		            <MenuAppBar />
		            <Page />
		          </div>
		        </Fragment>
		    </div>
    	</Router>    
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitial: () => {
      dispatch(handleInitialData())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)

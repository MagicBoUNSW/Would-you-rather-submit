import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MenuAppBar from './components/MenuAppBar'
import QuestionsList from './components/QuestionsList'
import FloatingActionButtons from './components/FloatingActionButtons'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from "./Routes";


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }
  render() {
  	const {classes} = this.props;
    return (
      <div>
        <MenuAppBar />
        <Routes />
      </div>
    );
  }
}

export default App;
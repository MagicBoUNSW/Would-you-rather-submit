import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MenuAppBar from './components/MenuAppBar'
import QuestionsList from './components/QuestionsList'
import FloatingActionButtons from './components/FloatingActionButtons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }
  render() {
    return (
      <div>
        <MenuAppBar />
        <QuestionsList />
        <FloatingActionButtons />
      </div>
    );
  }
}

export default App;

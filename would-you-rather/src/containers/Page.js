import React, { Component } from 'react'
import ViewPage from './ViewPage'
import IconLabelTabs from '../components/IconLabelTabs'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Page extends Component {
  render() {
    return (
      <div className='content page'>
        <IconLabelTabs />
        <ViewPage />
      </div>
    )
  }
}

export default Page

import React, { Component } from 'react'

import Navigation from './Navigation'
import WelcomeUser from './WelcomeUser'

class TopBar extends Component {
  render() {
    return (
      <div className='content topbar'>
        <Navigation />
        <WelcomeUser />
      </div>
    )
  }
}

export default TopBar

import React, { Component } from 'react'

import NavigationBar from './NavigationBar'
import ViewPage from './ViewPage'

class Page extends Component {
  render() {
    return (
      <div className='content page'>
        <NavigationBar />
        <ViewPage />
      </div>
    )
  }
}

export default Page

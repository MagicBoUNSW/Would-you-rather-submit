import React, { Component } from 'react'

class ErrorPage extends Component {
  render() {
    const { location } = this.props

    return (
      <div className='error-page'>
        <h3>The requested page (<code>{location.pathname}</code>) could not be found.</h3>
        <p>Have you tried turning your computer off and on again?</p>
      </div>
    )
  }
}

export default ErrorPage

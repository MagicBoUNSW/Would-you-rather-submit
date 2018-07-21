import React, { Component } from 'react'

class ViewBox extends Component {
  render() {
    const { title, avatarURL } = this.props

    return (
      <div className='view-box'>
        <div
          className='user-avatar'
          style={{
            backgroundImage: `url(${avatarURL})`
          }} />
        <div className='details'>
          <div className='title'>
            {title}
          </div>
          {this.props.children}
        </div>
        <div />
      </div>
    )
  }
}

export default ViewBox

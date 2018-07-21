import React, { Component } from 'react'

class SmallViewBox extends Component {
  render() {
    const { onClick, title, avatarURL } = this.props

    return (
      <div className='view-box small' onClick={onClick}>
        <div
          className='user-avatar small'
          style={{
            backgroundImage: `url(${avatarURL})`
          }} >
        </div>
        <div className='title'>
          {title}
        </div>
      </div>
    )
  }
}

export default SmallViewBox

import React, { Component } from 'react'
const custom_color = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
class ViewBox extends Component {
  render() {
    const { title, avatarURL } = this.props

    return (
      <div className='view-box'>
        <div className='details'>
          <div className='title'>
            {title}
          </div>
          {this.props.children}
        </div>
        <div />
        <div
          className='user-avatar'
          style={{
            backgroundImage: `url(${avatarURL})`
          }} />
      </div>
    )
  }
}

export default ViewBox

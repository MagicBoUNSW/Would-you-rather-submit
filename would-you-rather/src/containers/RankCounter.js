import React, { Component } from 'react'

class RankCounter extends Component {
  render() {
    const { label, score } = this.props

    return (
      <div className='show-score'>
        <div className='score-label'>
          {label}
        </div>
        <div className='score'>
          {score}
        </div>
      </div>
    )
  }
}

export default RankCounter

import React, { Component } from 'react'

class Answer extends Component {
  render() {
    const { optionText, onClick, isActive, answered } = this.props

    return (
      <button
        onClick={onClick}
        className={`answer-button ${ isActive ? 'active' : 'inactive' } ${ answered && 'nohover' }`}>
        {optionText}
      </button>
    )
  }
}

export default Answer

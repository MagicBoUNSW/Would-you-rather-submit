import React, { Component } from 'react'

import Answer from './Answer'

class Answers extends Component {
  render() {
    const { optionOneText,optionTwoText, onClickOptionOne, onClickOptionTwo, optionOneVotes, optionTwoVotes, activeOption, answered } = this.props

    const isActive = option => option === activeOption

    return (
      <div className='answers'>
        <div className='answer-area'>
          <Answer onClick={onClickOptionOne} optionText={optionOneText} isActive={isActive('optionOne')} answered={answered} />
          {answered &&
            <p>{optionOneVotes} ({Math.round((100 * optionOneVotes / ( optionOneVotes + optionTwoVotes )))} %)</p>}
        </div>
        
        <h2> OR </h2>
        
        <div className='answer-area'>
          <Answer onClick={onClickOptionTwo} optionText={optionTwoText} isActive={isActive('optionTwo')} answered={answered} />
          {answered &&
            <p>{optionTwoVotes} ({Math.round((100 * optionTwoVotes / ( optionOneVotes + optionTwoVotes )))} %)</p>}
        </div>
      </div>
    )
  }
}

export default Answers

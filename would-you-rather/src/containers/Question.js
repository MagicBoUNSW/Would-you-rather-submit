import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAnswerQuestion } from '../actions/shared'

import Answers from './Answers'
import ViewBox from './ViewBox'

class Question extends Component {
  render() {
    const { optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, user, id, avatarURL, answerQuestion } = this.props

    let onClickOptionOne, onClickOptionTwo, activeOption, answered = false
    if (user && user.hasOwnProperty('answers')) {
      if (user.answers.hasOwnProperty(id)) {
        activeOption = user.answers[id]
        answered = true
      } else {
        onClickOptionOne = () => answerQuestion(id, 'optionOne')
        onClickOptionTwo = () => answerQuestion(id, 'optionTwo')
      }
    }

    const viewName = 'question'
    const title = 'Would you rather?'

    return (
      <ViewBox
        viewName={viewName}
        title={title}
        avatarURL={avatarURL}>
        <Answers
          optionOneText={optionOneText}
          optionTwoText={optionTwoText}
          onClickOptionOne={onClickOptionOne}
          onClickOptionTwo={onClickOptionTwo}
          optionOneVotes={optionOneVotes}
          optionTwoVotes={optionTwoVotes}
          activeOption={activeOption}
          answered={answered} />
      </ViewBox>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  let optionOne, optionTwo, optionOneText = '', optionTwoText = '', optionOneVotes = '', optionTwoVotes = ''
  if (questions.hasOwnProperty(id)) {
    optionOne = questions[id].optionOne
    optionTwo = questions[id].optionTwo
    optionOneText = optionOne.text
    optionTwoText = optionTwo.text
    optionOneVotes = Object.keys(optionOne.votes).length
    optionTwoVotes = Object.keys(optionTwo.votes).length
  }

  const user = users.hasOwnProperty(authedUser)
    ? users[authedUser]
    : null

  const author = questions.hasOwnProperty(id)
    ? questions[id].author
    : ''

  const avatarURL = users.hasOwnProperty(author)
    ? users[author].avatarURL
    : ''

  return {
    optionOneText,
    optionTwoText,
    optionOneVotes,
    optionTwoVotes,
    user,
    id,
    avatarURL
  }
}

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (qid, answer) => {
      dispatch(handleAnswerQuestion(qid, answer))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question)

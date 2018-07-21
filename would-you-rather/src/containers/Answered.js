import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

class Answered extends Component {
  render() {
    const { filteredQuestions } = this.props

    return (
      <ul>
        {filteredQuestions.map(id => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }

  const filteredQuestions = questionIds.filter(id => user.answers.hasOwnProperty(id))

  return {
    filteredQuestions
  }
}

export default connect(mapStateToProps)(Answered)

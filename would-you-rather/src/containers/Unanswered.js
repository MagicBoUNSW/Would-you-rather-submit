import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Question from './Question'

class Unanswered extends Component {
  render() {
    const { filteredQuestions, questionId, history } = this.props

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

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }

  const filteredQuestions = questionIds.filter(id => !user.answers.hasOwnProperty(id))

  return {
    filteredQuestions,
    questionId: id
  }
}

export default withRouter(connect(mapStateToProps)(Unanswered))

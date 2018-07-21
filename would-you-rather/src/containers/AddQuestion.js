import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/shared'

import AskForm from './AskForm'
import ViewBox from './ViewBox'

class AddQuestion extends Component {
  render() {
    const { authed, avatarURL, addQuestion } = this.props

    const viewName = 'addquestion'
    const title = 'Would you rather?'

    let handleAddQuestion = () => {}
    if (authed) {
      handleAddQuestion = addQuestion
    }

    return (
      <ul>
        <li>
          <ViewBox
            viewName={viewName}
            title={title}
            avatarURL={avatarURL}>
            <AskForm handleAddQuestion={handleAddQuestion} />
          </ViewBox>
        </li>
      </ul>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  const authed = !!authedUser

  const avatarURL = users.hasOwnProperty(authedUser)
    ? users[authedUser].avatarURL
    : ''

  return {
    authed,
    avatarURL
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOneText, optionTwoText) => {
      dispatch(handleAddQuestion(optionOneText, optionTwoText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)

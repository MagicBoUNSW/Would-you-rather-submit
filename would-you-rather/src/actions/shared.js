import { showLoading, hideLoading } from 'react-redux-loading'

// import { setAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'


// #region export
export const DELETE_ANSWER_QUESTION = 'DELETE_ANSWER_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'


export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
        .then(question => dispatch(addQuestion(question)))
        .finally(() => dispatch(hideLoading()))
  }
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    dispatch(answerQuestion({ user: authedUser, qid, answer }))

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
        .catch(() => dispatch(deleteAnswerQuestion({ user: authedUser, qid, answer })))
        .finally(() => dispatch(hideLoading()))
  }
}

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData()
        .then(({ users, questions }) => {
          // dispatch(setAuthedUser('roseidon')) // used for debugging (to not have to login everytime)
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
          dispatch(hideLoading())
        })
  }
}

function deleteAnswerQuestion({ user, qid, answer }) {
  return {
    type: DELETE_ANSWER_QUESTION,
    user,
    qid,
    answer
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function answerQuestion({ user, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    user,
    qid,
    answer
  }
}


// #endregion

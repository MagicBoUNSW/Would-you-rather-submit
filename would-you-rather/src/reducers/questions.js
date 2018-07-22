import { ANSWER_QUESTION, DELETE_ANSWER_QUESTION, ADD_QUESTION } from '../actions/shared'
import { RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION : {
      const { user, qid, answer } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([user])
          }
        }
      }
    }
    case DELETE_ANSWER_QUESTION : {
      const { user, qid, answer } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.filter(answerer => answerer !== user)
          }
        }
      }
    }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    
    default :
      return state
  }
}


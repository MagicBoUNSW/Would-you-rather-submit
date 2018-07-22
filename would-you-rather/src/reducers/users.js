import { ANSWER_QUESTION, DELETE_ANSWER_QUESTION, ADD_QUESTION } from '../actions/shared'
import { ADD_USER, RECEIVE_USERS } from '../actions/users'



export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER :
      return {
        ...state,
        [action.user.id]: action.user
      }
    case ANSWER_QUESTION : {
      const { user, qid, answer } = action

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
            [qid]: answer
          }
        }
      }
    }
    case DELETE_ANSWER_QUESTION : {
      const { user, qid } = action

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: Object.keys(state[user].answers).filter(question => question !== qid).reduce((newState, question) => {
            return {
              ...newState,
              [question]: state[user].answers[question]
            }
          }, {})
        }
      }
    }
    case ADD_QUESTION : {
      const { id, author } = action.question

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    }
    
    default :
      return state
  }
}


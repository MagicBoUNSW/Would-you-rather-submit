// #region constants

let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'https://pbs.twimg.com/profile_images/982796605425303552/phhp5grt_400x400.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['sdzhweuklhsudrhf234534', '8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://pbs.twimg.com/profile_images/803732106513743872/o-JoI9g7_400x400.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://pbs.twimg.com/profile_images/692224785468821504/sh6UGqFl_400x400.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  },
  roseidon: {
    id: 'roseidon',
    name: 'Matthias Rosenauer',
    avatarURL: 'https://pbs.twimg.com/profile_images/899563302988152832/F0PorSQx_400x400.jpg',
    answers: {
      "437trz36frg435zue6e644": 'optionTwo',
      "er7z3r437zrzr723zrwr43": 'optionOne'
    },
    questions: ['er7z3r437zrzr723zrwr43']
  },
  hansmoleman: {
    id: 'hansmoleman',
    name: 'Hans Moleman',
    avatarURL: 'https://pbs.twimg.com/profile_images/3329742073/8f15f6ba3221573f6d49b8a4a2cab63f_400x400.jpeg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "437trz36frg435zue6e644": 'optionTwo',
      "sdzhweuklhsudrhf234534": 'optionOne'
    },
    questions: ['437trz36frg435zue6e644']
  },
  frankunderwood: {
    id: 'frankunderwood',
    name: 'Francis Underwood',
    avatarURL: 'https://vignette.wikia.nocookie.net/house-of-cards/images/d/df/Frank_Underwood_3.jpg/revision/latest?cb=20140227094826',
    answers: {
      "sdzhweuklhsudrhf234534": 'optionTwo',
      "awdfaw74rzshuhfw4urhwu": 'optionOne'
    },
    questions: ['awdfaw74rzshuhfw4urhwu']
  },
  stuart: {
    id: 'stuart',
    name: 'Markus Inion',
    avatarURL: 'https://lh3.googleusercontent.com/-Sq9htuTWeIw/VmYpwCYzxOI/AAAAAAAAAWU/Fn0j0HvNbys/w375-h375/2015%2B-%2B4',
    answers: {
      "sdzhweuklhsudrhf234534": 'optionOne',
      "ivxt8hdrkzyaxrtsz3p7": 'optionOne'
    },
    questions: ["ivxt8hdrkzyaxrtsz3p7"]
  }
}

let questions = {
  "sdzhweuklhsudrhf234534": {
    id: 'sdzhweuklhsudrhf234534',
    author: 'sarahedo',
    timestamp: 1467166872633,
    optionOne: {
      votes: ['hansmoleman', 'stuart'],
      text: 'Eat pizza'
    },
    optionTwo: {
      votes: ['frankunderwood'],
      text: 'Drink beer'
    }
  },
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo', 'hansmoleman'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['sarahedo', 'johndoe'],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: [],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
  "437trz36frg435zue6e644": {
    id: '437trz36frg435zue6e644',
    author: 'hansmoleman',
    timestamp: 629924400000,
    optionOne: {
      votes: [],
      text: 'wear pants'
    },
    optionTwo: {
      votes: ['hansmoleman','roseidon'],
      text: 'forget to wear pants'
    }
  },
  "er7z3r437zrzr723zrwr43": {
    id: 'er7z3r437zrzr723zrwr43',
    author: 'roseidon',
    timestamp: 1527076641000,
    optionOne: {
      votes: ['roseidon'],
      text: 'take shoes off at work'
    },
    optionTwo: {
      votes: [],
      text: 'NOT bother the others with your smelling feet'
    }
  },
  "awdfaw74rzshuhfw4urhwu": {
    id: 'awdfaw74rzshuhfw4urhwu',
    author: 'frankunderwood',
    timestamp: 1528284451000,
    optionOne: {
      votes: ['frankunderwood'],
      text: 'Be president'
    },
    optionTwo: {
      votes: [],
      text: 'Be president'
    }
  },
  "ivxt8hdrkzyaxrtsz3p7": {
    id: 'ivxt8hdrkzyaxrtsz3p7',
    author: 'stuart',
    timestamp: 1528434560179,
    optionOne: {
      votes: ['stuart'],
      text: 'Banana!'
    },
    optionTwo: {
      votes: [],
      text: 'Ello!'
    }
  }
}

// #endregion

// #region functions

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    author,
    timestamp: Date.now(),
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  }
}

function formatUser({ id, name, avatarURL }) {
  return {
    id,
    name,
    avatarURL,
    answers: {},
    questions: []
  }
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// #endregion

// #region export

export function _getUsers() {
  return new Promise(res => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions() {
  return new Promise(res => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function _saveQuestion(question) {
  return new Promise(res => {
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise(res => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

export function _saveUser(user) {
  return new Promise((res, rej) => {
    const formattedUser = formatUser(user)

    users.hasOwnProperty(formattedUser.id)
      ? rej('This user already exists!')
      : setTimeout(() => {
        users = {
          ...users,
          [formattedUser.id]: formattedUser
        }

        res(formattedUser)
      }, 1000)
  })
}

// #endregion

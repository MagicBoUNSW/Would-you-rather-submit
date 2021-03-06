import React, { Component } from 'react'
import { connect } from 'react-redux'

import { unsetAuthedUser } from '../actions/authedUser'

class WelcomeUser extends Component {
  render() {
    const { userName, loggedIn, avatarURL, logout } = this.props

    return (
      <div className='welcome-user'>
        <div className='user'>
          <p>Welcome <strong>{userName}</strong>!</p>
          <div
            className='user-avatar tiny'
            style={{
              backgroundImage: `url(${avatarURL})`
            }} />
        </div>
        {loggedIn && (
          <p><button onClick={logout} className='logout-button'>Logout</button></p>
        )}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  let userName, loggedIn = false, avatarURL
  if ( authedUser !== null && users.hasOwnProperty(authedUser) ) {
    userName = users[authedUser].name
    loggedIn = true
    avatarURL = users[authedUser].avatarURL
  }

  return {
    userName,
    loggedIn,
    avatarURL
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(unsetAuthedUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeUser)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
  render() {
    const { users, onLogin } = this.props

    return (
      <select
        onChange={event => onLogin(event.target.value)}
        defaultValue='default'>
        <option
          disabled
          value='default'>
          Choose Account
        </option>
        {Object.keys(users).map(user => (
          <option
            key={users[user].id}
            value={users[user].id}>
            {users[user].name}
          </option>
        ))}
      </select>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users
      ? users
      : {}
  }
}

export default connect(mapStateToProps)(SignIn)

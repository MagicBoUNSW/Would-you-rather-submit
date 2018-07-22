import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SignIn extends React.Component {


  render() {
    const { classes, users, onLogin } = this.props

    return (
        <div>
          <FormControl>
            <InputLabel >Account</InputLabel>
            <Select native onChange={event => onLogin(event.target.value)}>
              <option >Choose Account</option>
              {Object.keys(users).map(user => (
                <option
                  key={users[user].id}
                  value={users[user].id}>
                  {users[user].name}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
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

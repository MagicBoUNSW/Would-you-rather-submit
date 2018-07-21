import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { setAuthedUser } from '../actions/authedUser'
import { handleAddUser } from '../actions/users'

import Answers from './Answers'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ViewBox from './ViewBox'

class Login extends Component {
  state = {
    view: 'initial',
    redirect: false
  }

  optionOneText = 'Log in'
  optionTwoText = 'Create an account'

  handleSignInClick = () => {
    this.setState(() => ({
      view: 'signin'
    }))
  }

  handleSignUpClick = () => {
    this.setState(() => ({
      view: 'signup'
    }))
  }

  setInitialState = () => {
    this.setState(() => ({
      view: 'initial'
    }))
  }

  handleLogin = user => {
    this.props.login(user)
    this.setState(() => ({
      redirect: true
    }))
  }

  handleRegister = (id, name, avatarURL) => {
    this.props.createAccount(id, name, avatarURL)
    this.setState(() => ({
      redirect: true
    }))
    this.props.login(id)
  }

  loginOption = view => {
    switch(view) {
      case 'initial' :
        return (
          <Answers
            optionOneText={this.optionOneText}
            onClickOptionOne={this.handleSignInClick}
            optionTwoText={this.optionTwoText}
            onClickOptionTwo={this.handleSignUpClick} />
        )
      case 'signup' :
        return (
          <div className='login-area'>
            <div
              className='arrow-back'
              onClick={() => this.setInitialState()} />
            <SignUp
              onRegister={(id, name, avatarURL) => this.handleRegister(id, name, avatarURL)} />
          </div>
        )
      case 'signin' :
        return (
          <div className='login-area'>
            <div
              className='arrow-back'
              onClick={() => this.setInitialState()} />
            <SignIn
              onLogin={user => this.handleLogin(user)} />
          </div>
        )
      
      
      default : {
        this.setInitialState()

        return <Redirect to='/login' />
      }
    }
  }

  render() {
    const { view, redirect } = this.state
    const { from } = { from: { pathname: '/unanswered' } } // use this if you only want to redirect to unanswered after login

    if (redirect === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='view-page'>
        <ul>
          <li>
            <div className='new-user-greet'>
              Created By Hieu Mai
            </div>
          </li>
          <li>
            <ViewBox viewName='login'>
              {this.loginOption(view)}
            </ViewBox>
          </li>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => {
      dispatch(setAuthedUser(user))
    },
    createAccount: (id, name, avatarURL) => {
      dispatch(handleAddUser(id, name, avatarURL))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)

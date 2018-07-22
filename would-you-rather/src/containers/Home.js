import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { handleAddUser } from '../actions/users'
import SignIn from './SignIn'
import ViewBox from './ViewBox'
import Answers from './Answers'
import Hieu from '../images/Hieu.jpeg';

class Home extends Component {
  state = {
    view: 'initial',
    redirect: false
  }

  optionOneText = 'Signin'
  optionTwoText = 'Stay Here'

  handleSignInClick = () => {
    this.setState(() => ({
      view: 'signin'
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

  loginOption = view => {
    switch(view) {
      case 'initial' :
        return (
          <Answers
            optionOneText={this.optionOneText}
            onClickOptionOne={this.handleSignInClick}
            optionTwoText={this.optionTwoText} />
        )
      case 'signin' :
        return (
          <div className='login-area'>
            <div className='arrow-back' onClick={() => this.setInitialState()} />
            <SignIn onLogin={user => this.handleLogin(user)} />
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
    const { from } = { from: { pathname: '/unanswered' } }
    const title = 'WOULD YOU RATHER?'
    const avatarURL = Hieu
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
            <ViewBox viewName='login' title={title} avatarURL={avatarURL}> 
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

export default connect(null, mapDispatchToProps)(Home)

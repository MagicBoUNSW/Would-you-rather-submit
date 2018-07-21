import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    id: '',
    name: '',
    avatarURL: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    const { id, name, avatarURL } = this.state
    const { onRegister } = this.props

    onRegister(id, name, avatarURL)
  }

  handleChange = e => {
    const name = e.target.name
    const text = e.target.value
    this.setState(() => ({
      [name]: text
    }))
  }

  render() {
    const { id, name, avatarURL } = this.state

    return (
      <form onSubmit={this.handleSubmit} className='register-form'>
        <div className='register-labels'>
          <input
            value={id}
            onChange={this.handleChange}
            name='id'
            type='text'
            className='input-option register'
            placeholder='User-ID' />
          <input
            value={name}
            onChange={this.handleChange}
            name='name'
            type='text'
            className='input-option register'
            placeholder='User-Name' />
          <input
            value={avatarURL}
            onChange={this.handleChange}
            name='avatarURL'
            type='text'
            className='input-option register'
            placeholder='Avatar-URL' />
        </div>
        <div>
          <input
            type='submit'
            value='Register'
            className='register-button' />
        </div>
      </form>
    )
  }
}

export default SignUp

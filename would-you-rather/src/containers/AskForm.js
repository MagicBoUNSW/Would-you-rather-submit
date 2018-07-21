import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class AskForm extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = e => {
    const name = e.target.name
    const text = e.target.value
    this.setState(() => ({
      [name]: text
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { handleAddQuestion } = this.props

    handleAddQuestion(optionOneText, optionTwoText)

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/unanswered' />
    }

    return (
      <form className='ask-form' onSubmit={this.handleSubmit}>
        <textarea
          value={optionOneText}
          onChange={this.handleChange}
          name='optionOneText'
          className='input-option'
          rows='5'
          maxLength='100'
          placeholder='Option one'
          tabIndex='1'
          required />
        <textarea
          value={optionTwoText}
          onChange={this.handleChange}
          name='optionTwoText'
          className='input-option'
          rows='5'
          maxLength='100'
          placeholder='Option two'
          tabIndex='2'
          required />
        <input type='submit' value='Submit' className='submit-question' />
      </form>
    )
  }
}

export default AskForm

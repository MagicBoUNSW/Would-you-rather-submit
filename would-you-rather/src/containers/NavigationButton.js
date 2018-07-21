import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavigationButton extends Component {
  render() {
    let title, link, alternativeLink

    switch(this.props.page) {
      case 'add' : {
        title = 'Add question'
        link = `/add`
        break
      }
      case 'unanswered' : {
        title = 'Unanswered questions'
        link = `/unanswered`
        alternativeLink = `/question/`
        break
      }
      case 'answered' : {
        title = 'Answered questions'
        link = `/answered`
        break
      }
      case 'leaderboard' : {
        title = 'Leaderboard'
        link = `/leaderboard`
        break
      }
      default : {
        title = 'Invalid link'
        link = `/404`
        break
      }
    }

    const active =
      ( this.props.location.pathname === link )
      || ( this.props.location.pathname.toLowerCase().includes(alternativeLink) )
        ? 'active'
        : ''

    return (
      <div className={`navigation-button ${active}`}>
        <Link to={link}>{title}</Link>
      </div>
    )
  }
}

export default withRouter(NavigationButton)

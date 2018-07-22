import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Unanswered from './Unanswered'
import AddQuestion from './AddQuestion'
import Answered from './Answered'
import LeaderBoard from './LeaderBoard'


class ViewPage extends Component {
  render() {
    return (
      <div className='view-page'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Redirect to="/unanswered" />
            )} />
          <Route
            path='/home'
            component={Home} />

          <PrivateRoute
            path='/question/:id'
            component={Unanswered} />
          <PrivateRoute
            path='/unanswered'
            component={Unanswered} />
          <PrivateRoute
            path='/answered'
            component={Answered} />
          <PrivateRoute
            path='/leaderboard'
            component={LeaderBoard} />
          <PrivateRoute
            path='/add'
            component={AddQuestion} />
        </Switch>
      </div>
    )
  }
}

export default ViewPage

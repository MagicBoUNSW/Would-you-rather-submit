import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import AddQuestion from './AddQuestion'
import Answered from './Answered'
import ErrorPage from './ErrorPage'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Unanswered from './Unanswered'

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
            path='/login'
            component={Login} />
          <PrivateRoute
            path='/add'
            component={AddQuestion} />
          <PrivateRoute
            path='/unanswered'
            component={Unanswered} />
          <PrivateRoute
            path='/question/:id'
            component={Unanswered} />
          <PrivateRoute
            path='/answered'
            component={Answered} />
          <PrivateRoute
            path='/leaderboard'
            component={LeaderBoard} />
          <Route
            component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}

export default ViewPage

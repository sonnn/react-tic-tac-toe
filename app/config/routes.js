import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from 'layouts/MainLayout'
import { AppContainer } from 'containers'
import { About } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={AppContainer} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)

export default routes

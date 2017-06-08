import React from 'react'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../ui/Home.jsx'
import App from '../ui/App.jsx'
import EditForm from '../ui/EditForm.jsx'
import ReservePage from '../ui/ReservePage.jsx'

const browserHistory = createBrowserHistory()

export const renderRoutes = () => (
  <Router history = {browserHistory}>
    <div>
      <Route exact path = '/' component={ Home } />
      <Route exact path = '/admin' component = { App } />
      <Route exact path = '/edit/:id' component = { EditForm } />
      <Route exact path = '/room/:id' component = { ReservePage } />
    </div>
  </Router>
)

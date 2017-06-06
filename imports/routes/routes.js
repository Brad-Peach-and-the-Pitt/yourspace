import React from 'react'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../ui/App.jsx'
import EditForm from '../ui/EditForm.jsx'

const browserHistory = createBrowserHistory()

export const renderRoutes = () => (
  <Router history = {browserHistory}>
    <div>
      <Route exact path = '/' component = { App } />
      <Route exact path = '/edit/:id' component = { EditForm } />
    </div>
  </Router>
)

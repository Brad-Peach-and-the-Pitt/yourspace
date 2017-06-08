import React from 'react'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../ui/Home.jsx'
import App from '../ui/App.jsx'
import EditForm from '../ui/EditForm.jsx'
import ReservePage from '../ui/ReservePage.jsx'
import AdminSplash from '../ui/AdminSplash.jsx'
import UserPage from '../ui/UserPage.jsx'

const browserHistory = createBrowserHistory()

export const renderRoutes = () => (
  <Router history = {browserHistory}>
    <div>
      <Route exact path = '/' component={ Home } />
      <Route exact path = '/admin/rooms' component = { App } />
      <Route exact path = '/edit/:id' component = { EditForm } />
      <Route exact path = '/room/:id' component = { ReservePage } />
      <Route exact path = '/admin' component = { AdminSplash } />
      <Route exact path = '/admin/users' component = { UserPage  } />
    </div>
  </Router>
)

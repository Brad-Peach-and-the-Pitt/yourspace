import React from 'react'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../ui/user/Home.jsx'
import App from '../ui/admin/AdminRooms.jsx'
import EditForm from '../ui/admin/EditForm.jsx'
import ReservePage from '../ui/user/ReservePage.jsx'
import AdminSplash from '../ui/admin/AdminSplash.jsx'
import UserPage from '../ui/admin/UserPage.jsx'

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

import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRoutes } from '../imports/routes/routes.js'

// users
import '../imports/startup/accounts-config.js'

// components
import App from '../imports/ui/admin/AdminRooms.jsx'

Meteor.startup(() => {
  render(
    renderRoutes(), document.getElementById('render-target')
  )
})

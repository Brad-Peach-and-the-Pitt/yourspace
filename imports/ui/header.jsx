import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import AccountsUIWrapper from './AccountsUIWrapper'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Header extends Component {
  render() {
    return(
      <div className="page-header">
        <h1>YourSpace</h1>
        <AccountsUIWrapper  />
        <Link to={'/admin'} className="pull-right">Admin Page</Link>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import AccountsUIWrapper from './AccountsUIWrapper'

export default class Header extends Component {
  render() {
    return(
      <div className="header">
        <h1>YourSpace</h1>
        <AccountsUIWrapper  />
      </div>
    )
  }
}

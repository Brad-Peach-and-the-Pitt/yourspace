import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../api/rooms.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './header.jsx';

export default class AdminSplash extends Component {
  render(){
    return(
      <div className="container">
        <Header />
        <div className='row'>
          <Link to={'/admin/rooms'} className="col-md-6 btn-lg btn-info">Rooms</Link>
          <Link to={'/admin/users'} className="col-md-6 btn-lg btn-warning">User</Link>
        </div>
      </div>
    )
  }
}

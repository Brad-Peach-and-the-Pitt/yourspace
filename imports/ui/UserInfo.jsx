import React, { Component, PropTypes } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { createContainer } from 'meteor/react-meteor-data'



export class UserInfo extends Component {

  deleteThisUser() {
    Meteor.users.remove(this.props.user._id)
  }


  render() {
    return(
      <div className="container">
        <div className="row">
          <Link className="btn btn-info col-md-2" to={`/edit/${this.props.user._id}`}>Edit</Link>
          <button onClick={this.deleteThisUser.bind(this)} className='btn btn-warning delete col-md-2'>Delete</button>
        </div>
        <div className="row well">

          <p className="col-md-3">{this.props.user.username}</p>


        </div>

      </div>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired
}

export default createContainer(() => {
  return {
    users: Meteor.users.find().fetch(),
    currentUser: Meteor.user(),
  }
}, UserInfo)

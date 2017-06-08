import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import Header from './header.jsx'

import UserInfo from './UserInfo.jsx'

export class UserPage extends Component {


  renderUserName() {
    return this.props.users.map((user) => (
      <UserInfo key={user._id}  user={user}/>
    ))
  }

  render() {
    return(
    <div className="container">
      <Header />
      <p>{this.renderUserName()}</p>
    </div>
    )
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser : PropTypes.object,
}

export default createContainer(() => {
  return {
    users: Meteor.users.find().fetch(),
    currentUser: Meteor.user(),
  }
}, UserPage)

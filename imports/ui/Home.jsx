import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../api/rooms.js'

import Header from './header.jsx';

import { Card } from './HomeCards.jsx'


export class Home extends Component {


  getRoom() {
    return this.props.rooms.map((room) => (
      <Card key={room._id}  room={room}/>
    ))
  }

  // getRoomSeats() {
  //   return this.props.rooms.map((room) => (
  //     <CardSeats key={room._id}  room={room}/>
  //   ))
  // }






  render() {
    return(
      <div>
        <Header />
        <h3>{this.getRoom()}</h3>
      </div>

    )
  }
}

Home.propTypes = {
  rooms: PropTypes.array.isRequired,
  currentUser : PropTypes.object,
}

export default createContainer(() => {
  return {
    rooms: Rooms.find({}).fetch(),
    currentUser: Meteor.user(),
  }
}, Home)

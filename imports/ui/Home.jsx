import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../api/rooms.js'

import Header from './header.jsx';

import { CardName, CardSeats } from './HomeCards.jsx'


export class Home extends Component {


  getRoomName() {
    return this.props.rooms.map((room) => (
      <CardName key={room._id}  room={room}/>
    ))
  }

  getRoomSeats() {
    return this.props.rooms.map((room) => (
      <CardSeats key={room._id}  room={room}/>
    ))
  }






  render() {
    return(
      <div>
        <Header />
        <h3>{this.getRoomName()}</h3>
        <p>Seats: {this.getRoomSeats()}</p>
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

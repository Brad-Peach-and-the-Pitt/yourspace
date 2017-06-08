import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../../api/rooms.js'
import { Times } from '../../api/times.js'

import Header from '../header.jsx';

import { Card, TimeCard } from './HomeCards.jsx'


export class Home extends Component {


  getRoom() {
    return this.props.rooms.map((room) => (
      <Card key={room._id}  room={room}/>
    ))
  }

  getTime() {
    return this.props.times.map((time) => (
      <TimeCard key={time._id} time={time}/>
    ))
  }







  render() {
    return(
      <div className="container">
        <Header />
        <h3>{this.getRoom()} {this.getTime()}</h3>

      </div>

    )
  }
}

Home.propTypes = {
  rooms: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired,
  currentUser : PropTypes.object,
}

export default createContainer(() => {
  return {
    rooms: Rooms.find({}).fetch(),
    times: Times.find().fetch(),
    currentUser: Meteor.user(),
  }
}, Home)

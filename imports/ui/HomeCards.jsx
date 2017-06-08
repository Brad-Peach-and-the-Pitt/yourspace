import React, { Component, PropTypes } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Rooms } from '../api/rooms.js'
import { Times } from '../api/times.js'

export class Card extends Component {
  render() {
    return(
      <div className="container well">
        <h3>{this.props.room.name}</h3>
        <h5>Location: {this.props.room.floor}</h5>
        <h5>Tv: {this.props.room.tv} </h5>
        <h5>Capacity: Seats {this.props.room.seats}</h5>
        <Link to={`/room/${this.props.room._id}`}>Reserve Now</Link>
      </div>
    )
  }
}

Card.propTypes = {
  room: PropTypes.object.isRequired,
}


export class TimeCard extends Component {
  render() {
    return(
      <div>
        <h5>Times: {this.props.time.timeslot1} {this.props.time.timeslot2 }{this.props.time.timeslot3}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1}{this.props.time.timeslot1} </h5>
      </div>
    )
  }
}

TimeCard.propsTypes = {
  time: PropTypes.object.isRequired
}

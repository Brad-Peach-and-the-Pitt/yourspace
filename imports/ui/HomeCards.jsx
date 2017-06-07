import React, { Component, PropTypes } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Rooms } from '../api/rooms.js'

export class CardName extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.room.name}</h3>
      </div>
    )
  }
}

CardName.propTypes = {
  room: PropTypes.object.isRequired
}

export class CardSeats extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.room.seats}</h3>
      </div>
    )
  }
}

CardSeats.propTypes = {
  room: PropTypes.object.isRequired
}

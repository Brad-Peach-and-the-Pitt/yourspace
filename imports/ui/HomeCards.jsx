import React, { Component, PropTypes } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Rooms } from '../api/rooms.js'

export class Card extends Component {
  render() {
    return(
      <div className="container well">
        <h3>{this.props.room.name}</h3>
        <h5>Times: ======================= </h5>
        <p> {this.props.room.name} is located on the {this.props.room.floor}. There is {this.props.room.tv} TV and the room seats {this.props.room.seats} people.</p>
      </div>
    )
  }
}

Card.propTypes = {
  room: PropTypes.object.isRequired
}

// export class CardSeats extends Component {
//   render() {
//     return(
//       <div>
//         <h3>{this.props.room.seats}</h3>
//       </div>
//     )
//   }
// }
//
// CardSeats.propTypes = {
//   room: PropTypes.object.isRequired
// }

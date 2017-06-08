
import React, { Component, PropTypes } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Rooms } from '../api/rooms.js'

export default class RoomInfo extends Component {


  deleteThisRoom() {
    Rooms.remove(this.props.room._id)
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <Link className="btn btn-info col-md-2" to={`/edit/${this.props.room._id}`}>Edit</Link>
          <button onClick={this.deleteThisRoom.bind(this)} className='btn btn-warning delete col-md-2'>Delete</button>
        </div>
        <div className="row well">

          <p className="col-md-3">{this.props.room.name}</p>
          <p className="col-md-3">{this.props.room.seats}</p>
          <p className="col-md-3">{this.props.room.floor}</p>
          <p className="col-md-3">{this.props.room.tv}</p>

        </div>

      </div>
    )
  }
}

RoomInfo.propTypes = {
  room: PropTypes.object.isRequired
}

// export class RoomSeats extends Component {
//   render() {
//     return(
//       <div>
//         <p>{this.props.room.seats}</p>
//       </div>
//     )
//   }
// }
//
// RoomSeats.propTypes = {
//   room: PropTypes.object.isRequired
// }
//
// export class RoomFloor extends Component {
//   render() {
//     return(
//       <div>
//         <p>{this.props.room.floor}</p>
//       </div>
//     )
//   }
// }
//
// RoomFloor.propTypes = {
//   room: PropTypes.object.isRequired
// }
//
// export class RoomTv extends Component {
//   render() {
//     return(
//       <div>
//         <p>{this.props.room.tv}</p>
//       </div>
//     )
//   }
// }
//
// RoomTv.propTypes = {
//   room: PropTypes.object.isRequired
// }

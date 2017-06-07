
import React, { Component, PropTypes } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Rooms } from '../api/rooms.js'

export class RoomName extends Component {
  

  deleteThisRoom() {
    Rooms.remove(this.props.room._id)
  }

  render() {
    return(
      <div>
        <td><button onClick={this.deleteThisRoom.bind(this)} className='btn btn-warning delete'>Delete</button> <Link className="btn btn-info" to={`/edit/${this.props.room._id}`}>Edit</Link> {this.props.room.name}</td>

      </div>
    )
  }
}

RoomName.propTypes = {
  room: PropTypes.object.isRequired
}

export class RoomSeats extends Component {
  render() {
    return(
      <div>
        <td>{this.props.room.seats}</td>
      </div>
    )
  }
}

RoomSeats.propTypes = {
  room: PropTypes.object.isRequired
}

export class RoomFloor extends Component {
  render() {
    return(
      <div>
        <td>{this.props.room.floor}</td>
      </div>
    )
  }
}

RoomFloor.propTypes = {
  room: PropTypes.object.isRequired
}

export class RoomTv extends Component {
  render() {
    return(
      <div>
        <td>{this.props.room.tv}</td>
      </div>
    )
  }
}

RoomTv.propTypes = {
  room: PropTypes.object.isRequired
}

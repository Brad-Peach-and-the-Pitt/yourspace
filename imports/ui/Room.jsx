
import React, { Component, PropTypes } from 'react'

import { Rooms } from '../api/rooms.js'

export class RoomName extends Component {
  editThisRoom() {
    Rooms.update(this.props.room._id, {
      $set: {checked: !this.props.room.checked},
    })
  }

  deleteThisRoom() {
    Rooms.remove(this.props.room._id)
  }

  render() {
    const roomClassName = this.props.room.chcked ? "checked" : "";
    return(
      <div>
        <td className={roomClassName}><button onClick={this.deleteThisRoom.bind(this)} className='btn btn-warning delete'>Delete</button> <button onClick={this.editThisRoom.bind(this)} className="btn btn-info">Edit</button> {this.props.room.name}</td>

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

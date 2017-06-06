
import React, { Component, PropTypes } from 'react'


export class RoomName extends Component {
  render() {
    return(
      <div>
        <td>{this.props.room.name}</td>
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

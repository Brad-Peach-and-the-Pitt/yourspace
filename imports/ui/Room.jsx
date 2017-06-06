import React, { Component, PropTypes } from 'react'


export default class Room extends Component {
  render() {
    return(
      <div className="container">
        <td>{this.props.room.name}</td>
        <td>{this.props.room.seats}</td>
        <td>{this.props.room.floor}</td>
        <td>{this.props.room.tv}</td>
      </div>
    )
  }
}

Room.propTypes = {
  room: PropTypes.object.isRequired
}

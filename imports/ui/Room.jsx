import React, { Component, PropTypes } from 'react'


export default class Room extends Component {
  render() {
    return(
      <li>{this.props.room.name}</li>
    )
  }
}

Room.propTypes = {
  room: PropTypes.object.isRequired
}

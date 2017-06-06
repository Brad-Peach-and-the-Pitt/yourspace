import React, { Component, PropTypes } from 'react';
import Room from './Room.jsx'
import { createContainer } from 'meteor/react-meteor-data'

import { Rooms } from '../api/rooms.js'

class App extends Component {
  renderRooms() {
    return this.props.rooms.map((room) => (
      <Room key={room._id}  room={room}/>
    ))
  }

  render() {
    return (
      <div className="container">
        <header>
          Denver Platte Rooms
        </header>
        <ul>
          {this.renderRooms()}
        </ul>
      </div>
    )
  }

}

App.propTypes = {
  rooms: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    rooms: Rooms.find({}).fetch(),
  }
}, App)

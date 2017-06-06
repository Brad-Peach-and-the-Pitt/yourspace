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
        <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-title">
          <h3>Denver Platte Rooms</h3>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Room</th>
              <th>Location</th>
              <th>Seats</th>
              <th>TV?</th>
              <th>Reserve Now!</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRooms()}
          </tbody>
        </table>
      </div>
    </div>
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

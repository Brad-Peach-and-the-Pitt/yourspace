import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import RoomInfo from './Room.jsx'
import { createContainer } from 'meteor/react-meteor-data'


// components
import Header from '../header.jsx'
import AccountsUIWrapper from '../AccountsUIWrapper.jsx'

// API
import { Rooms } from '../../api/rooms.js'

export class App extends Component {
  handleSubmit(event) {
    event.preventDefault()
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()
    const seats = ReactDOM.findDOMNode(this.refs.seatsInput).value.trim()
    const tv = ReactDOM.findDOMNode(this.refs.tvInput).value.trim()
    const floor = ReactDOM.findDOMNode(this.refs.floorInput).value.trim()

    Rooms.insert({
      name,
      seats,
      tv,
      floor,
      owner : Meteor.userId(),
      username : Meteor.user().username
    })

    ReactDOM.findDOMNode(this.refs.nameInput).value = ''
    ReactDOM.findDOMNode(this.refs.seatsInput).value = ''
    ReactDOM.findDOMNode(this.refs.tvInput).value = ''
    ReactDOM.findDOMNode(this.refs.floorInput).value = ''
  }


  renderRoomName() {
    return this.props.rooms.map((room) => (
      <RoomInfo key={room._id}  room={room}/>
    ))
  }

  // renderRoomSeats() {
  //   return this.props.rooms.map((room) => (
  //     <RoomSeats key={room._id}  room={room}/>
  //   ))
  // }
  //
  // renderRoomFloor() {
  //   return this.props.rooms.map((room) => (
  //     <RoomFloor key={room._id}  room={room}/>
  //   ))
  // }
  //
  // renderRoomTv() {
  //   return this.props.rooms.map((room) => (
  //     <RoomTv key={room._id}  room={room}/>
  //   ))
  // }

  render() {
    return (
      <div className="container">
        <Header />


        <header>
          Denver Platte Rooms
        </header>

        {/*TO DO: Hide and Show?  */}

        <div className="container-fluid">
        <div>
          <div>
          <h3>Denver Platte Rooms</h3>
        </div>
        <div className="table table-bordered">
            <div className="rooms-header row pull-left">
              <div>
              <h4 className="col-md-3">Room</h4>
              <h4 className="col-md-3">Seats</h4>
              <h4 className="col-md-3">Location</h4>
              <h4 className="col-md-3">TV</h4>

            </div>
          <div>
              <p>{this.renderRoomName()}</p>
          </div>
        </div>


      </div>
    </div>
    </div>
    {
      this.props.currentUser ?

    <form onSubmit={this.handleSubmit.bind(this)} className="form-group new-room">
      <input type='text' ref="nameInput" placeholder="Room Name"></input>
      <input type='number' ref="seatsInput" placeholder="Number Of Seats"></input>
      <input type='text' ref="tvInput" placeholder="Does the room have a TV?"></input>
      <input type='text' ref="floorInput" placeholder="Floor Room is on"></input>
      <button type="submit" className="btn btn-success">Add Room</button>
    </form> : " "
  }
  </div>


    )
  }

}

App.propTypes = {
  rooms: PropTypes.array.isRequired,
  currentUser : PropTypes.object,
}

export default createContainer(() => {
  return {
    rooms: Rooms.find({}).fetch(),
    currentUser: Meteor.user(),
  }
}, App)

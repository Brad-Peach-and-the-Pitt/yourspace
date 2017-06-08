import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../api/rooms.js'

import Header from './header.jsx';

export class ReservePage extends Component {
  render(){
    return(
      <div  className="container">
        <Header />
        <div className="well">
          <h1>{this.props.room.name}</h1>
          <div className="row">
            <h3>Capacity: Seats {this.props.room.seats} people</h3>
            <h3>Location: {this.props.room.floor} </h3>
            <h3>Features: Tv {this.props.room.tv} </h3>
            <h4>Times Available</h4>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar">
              <span className="sr-only">60% Complete</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


ReservePage.propTypes = {
  room: PropTypes.object.isRequired,
}

export default createContainer((args) => {
  console.log(args.match.params.id);
  return {

    room: Rooms.findOne({_id: args.match.params.id}),
  }
}, ReservePage)

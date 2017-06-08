import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../../api/rooms.js'

import Header from '../header.jsx';

export class ReservePage extends Component {
  render(){
    return(
      <div  className="container-fluid reserve">
        <Header />
        <div className="well">
          <h1>{this.props.room.name}</h1>
          <div className="row">
            <h3>Capacity: Seats {this.props.room.seats} people</h3>
            <h3>Location: {this.props.room.floor} </h3>
            <h3>Tv: {this.props.room.tv} </h3>
            <h4>Times Available</h4>
            <div className="row container">
              <div className="times col-md-1"><p>7 am</p></div>
              <div className="times col-md-1"><p>8 am</p></div>
              <div className="times col-md-1"><p>9 am</p></div>
              <div className="times col-md-1"><p>10 am</p></div>
              <div className="times col-md-1"><p>11 am</p></div>
              <div className="times col-md-1"><p>12 pm</p></div>
              <div className="times col-md-1"><p>1 pm</p></div>
              <div className="times col-md-1"><p>2 pm</p></div>
              <div className="times col-md-1"><p>3 pm</p></div>
              <div className="times col-md-1"><p>4 pm</p></div>
              <div className="times col-md-1"><p>5 pm</p></div>
              <div className="times col-md-1"><p>6 pm</p></div>
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

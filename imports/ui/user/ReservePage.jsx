import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../../api/rooms.js'

import Header from '../header.jsx';

export class ReservePage extends Component {
  constructor(props) {
    super(props)
    this.state={condition: true}
  }




  addStyle(props) {
    console.log(this.props);
    this.setState(() => ({
      condition: !this.state.condition
    }))
  }



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
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open1  col-md-1" : "reserved1  col-md-1"} ><p>7 am</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open2  col-md-1" : "reserved2  col-md-1"} ><p>8 am</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open3  col-md-1" : "reserved3  col-md-1"} ><p>9 am</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open4  col-md-1" : "reserved4  col-md-1"} ><p>10 am</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open5  col-md-1" : "reserved5  col-md-1"} ><p>11 am</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open6  col-md-1" : "reserved6  col-md-1"} ><p>12 pm</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open7  col-md-1" : "reserved7  col-md-1"} ><p>1 pm</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open8  col-md-1" : "reserved8  col-md-1"} ><p>2 pm</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open9  col-md-1" : "reserved9  col-md-1"} ><p>3 pm</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open10  col-md-1" : "reserved10  col-md-1"} ><p>4 pm</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open11  col-md-1" : "reserved11  col-md-1"} ><p>5 pm</p></div>
              <div onClick={this.addStyle.bind(this)} className={ this.state.condition ? "open12  col-md-1" : "reserved12  col-md-1"} ><p>6 pm</p></div>
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

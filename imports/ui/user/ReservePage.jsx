import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms } from '../../api/rooms.js'

import Header from '../header.jsx';

export class ReservePage extends Component {
  constructor(props) {
    super(props)
    this.state={condition1: true, condition2: true, condition3: true,condition4: true, condition5: true, condition6: true, condition7: true, condition8: true, condition9: true, condition10: true, condition11: true, condition12: true,}
  }




  addStyle1(props) {
    console.log(this.props);
    this.setState(() => ({
      condition1: !this.state.condition1
    }))
  }

  addStyle2(props) {
    console.log(this.props);
    this.setState(() => ({
      condition2: !this.state.condition2
    }))
  }

  addStyle3(props) {
    console.log(this.props);
    this.setState(() => ({
      condition3: !this.state.condition3
    }))
  }

  addStyle4(props) {
    console.log(this.props);
    this.setState(() => ({
      condition4: !this.state.condition4
    }))
  }

  addStyle5(props) {
    console.log(this.props);
    this.setState(() => ({
      condition5: !this.state.condition5
    }))
  }

  addStyle6(props) {
    console.log(this.props);
    this.setState(() => ({
      condition6: !this.state.condition6
    }))
  }

  addStyle7(props) {
    console.log(this.props);
    this.setState(() => ({
      condition7: !this.state.condition7
    }))
  }

  addStyle8(props) {
    console.log(this.props);
    this.setState(() => ({
      condition8: !this.state.condition8
    }))
  }

  addStyle9(props) {
    console.log(this.props);
    this.setState(() => ({
      condition9: !this.state.condition9
    }))
  }

  addStyle10(props) {
    console.log(this.props);
    this.setState(() => ({
      condition10: !this.state.condition10
    }))
  }

  addStyle11(props) {
    console.log(this.props);
    this.setState(() => ({
      condition11: !this.state.condition11
    }))
  }

  addStyle12(props) {
    console.log(this.props);
    this.setState(() => ({
      condition12: !this.state.condition12
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
              <div onClick={this.addStyle1.bind(this)} className={ this.state.condition1 ? "open1  col-md-1" : "reserved1  col-md-1"} ><p>7 am</p></div>
              <div onClick={this.addStyle2.bind(this)} className={ this.state.condition2 ? "open2  col-md-1" : "reserved2  col-md-1"} ><p>8 am</p></div>
              <div onClick={this.addStyle3.bind(this)} className={ this.state.condition3 ? "open3  col-md-1" : "reserved3  col-md-1"} ><p>9 am</p></div>
              <div onClick={this.addStyle4.bind(this)} className={ this.state.condition4 ? "open4  col-md-1" : "reserved4  col-md-1"} ><p>10 am</p></div>
              <div onClick={this.addStyle5.bind(this)} className={ this.state.condition5 ? "open5  col-md-1" : "reserved5  col-md-1"} ><p>11 am</p></div>
              <div onClick={this.addStyle6.bind(this)} className={ this.state.condition6 ? "open6  col-md-1" : "reserved6  col-md-1"} ><p>12 pm</p></div>
              <div onClick={this.addStyle7.bind(this)} className={ this.state.condition7 ? "open7  col-md-1" : "reserved7  col-md-1"} ><p>1 pm</p></div>
              <div onClick={this.addStyle8.bind(this)} className={ this.state.condition8 ? "open8  col-md-1" : "reserved8  col-md-1"} ><p>2 pm</p></div>
              <div onClick={this.addStyle9.bind(this)} className={ this.state.condition9 ? "open9  col-md-1" : "reserved9  col-md-1"} ><p>3 pm</p></div>
              <div onClick={this.addStyle10.bind(this)} className={ this.state.condition10 ? "open10  col-md-1" : "reserved10  col-md-1"} ><p>4 pm</p></div>
              <div onClick={this.addStyle11.bind(this)} className={ this.state.condition11 ? "open11  col-md-1" : "reserved11  col-md-1"} ><p>5 pm</p></div>
              <div onClick={this.addStyle12.bind(this)} className={ this.state.condition12 ? "open12  col-md-1" : "reserved12  col-md-1"} ><p>6 pm</p></div>
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

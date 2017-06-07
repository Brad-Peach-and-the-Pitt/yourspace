import React, { Component, PropTypes } from 'react'
import {Rooms} from '../api/rooms.js'
import { createContainer } from 'meteor/react-meteor-data'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



 class EditForm extends Component {
   constructor(props) {
     super(props)
     this.state = {value: ''}

     this.handleChange = this.handleChange.bind(this);

   }

   handleChange(event) {
    this.setState({value: event.target.value});
  }

   editThisRoom(data) {
     console.log(data);

   }

  render() {
    return (
      <div className="row container">
      <form className="form-group col-md-12" onSubmit={this.editThisRoom.bind(this)}>
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.name} ref="nameInput" /><br />
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.seats} ref="seatsInput" /><br />
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.floor} ref="tvInput" /><br />
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.tv} ref="floorInput" />
        <Link to={'/'} className="btn btn-success">Submit</Link>
        <button>Submit Here</button>
      </form>
    </div>
    )
  }

}



export default createContainer((args) => {
  console.log(args.match.params.id);
  return {

    room: Rooms.findOne({_id: args.match.params.id}),
  }
}, EditForm)

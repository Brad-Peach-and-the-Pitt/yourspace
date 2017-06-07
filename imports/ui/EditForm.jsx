import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Rooms} from '../api/rooms.js'
import { createContainer } from 'meteor/react-meteor-data'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Form from 'react-router-form'
import Header from './header.jsx'




 class EditForm extends Component {





   editThisRoom(event) {
     event.preventDefault()
     const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()
     const seats = ReactDOM.findDOMNode(this.refs.seatsInput).value.trim()
     const tv = ReactDOM.findDOMNode(this.refs.tvInput).value.trim()
     const floor = ReactDOM.findDOMNode(this.refs.floorInput).value.trim()

     Rooms.update(this.props.room._id, {
       name,
       seats,
       tv,
       floor
     })
   }

  render() {
    return (
      <div className="row container">
        <Header />
      <form className="form-group col-md-12" onSubmit={this.editThisRoom.bind(this)}>
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.name} ref="nameInput" /><br />
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.seats} ref="seatsInput" /><br />
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.floor} ref="tvInput" /><br />
        <input className="input-group col-md-12" type="text" defaultValue={this.props.room.tv} ref="floorInput" />

        <button className="btn btn-success" type="submit">Submit</button>

      </form>
    </div>
    )
  }

}

EditForm.propTypes = {
  room: PropTypes.object.isRequired,
}

export default createContainer((args) => {
  console.log(args.match.params.id);
  return {

    room: Rooms.findOne({_id: args.match.params.id}),
  }
}, EditForm)

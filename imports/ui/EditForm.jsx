import React, { Component, PropTypes } from 'react'
import {Rooms} from '../api/rooms.js'
import { createContainer } from 'meteor/react-meteor-data'



 class EditForm extends Component {
  render() {
    return (
      <div>
      <form className="form-group">
        <input className="input-group" type="text" value={this.props.room.name} />
        <input className="input-group" type="text" value={this.props.room.seats} />
        <input className="input-group" type="text" value={this.props.room.floor} />
        <input className="input-group" type="text" value={this.props.room.tv} />
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

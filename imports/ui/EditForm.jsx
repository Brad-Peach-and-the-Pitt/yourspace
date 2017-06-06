import React, { Component, PropTypes } from 'react'

import { Rooms } from '../api/rooms.js'




export default class EditForm extends Component {
  render() {
    return (
      <form className="form-group">
        <input className="input-group" type="text">{}</input>
        <input className="input-group" type="text">{}</input>
        <input className="input-group" type="text">{}</input>
        <input className="input-group" type="text">{}</input>
      </form>
    )
  }

}

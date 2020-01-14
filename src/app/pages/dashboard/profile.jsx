import React, { Component } from 'react';



export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="profile">
        <h3 className="align-right">Profile</h3>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import man from '../assets/img/man.png';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: man,
    };
  }

  render() {
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div>
            <img width="130" className="avatar-img" alt="profile" src={this.state.pictureUrl} />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="userid">User ID:</label>
            <input type="text" className="form-control" disabled id="userid" />
          </div> 
          <div className="form-group">
            <label htmlFor="name">Display Name:</label>
            <input type="text" className="form-control" disabled id="name" />
          </div>  
          <div className="form-group">
            <label htmlFor="status">Status Message:</label>
            <input type="text" className="form-control" disabled id="status" />
          </div>
          <hr />
          <button type="button" className="btn btn-default">Close LIFF</button>
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class LIFFWindow extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="userid">Url:</label>
            <input type="text" className="form-control" id="userid" value="https://www.facebook.com/groups/LINEDEVTH"/>
          </div>
          <div className="form-group">
            <button type="button" class="btn btn-default">Open Url in LINE Browser</button>
          </div>
          <div className="form-group">
            <button type="button" class="btn btn-default">Open Url in External Browser</button>
          </div>
          <hr />
          <button type="button" className="btn btn-default">Close LIFF</button>
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}
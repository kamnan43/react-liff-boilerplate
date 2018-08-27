import React, { Component } from 'react';
import liffHelper from '../utils/liffHelper';

export default class LIFFWindow extends Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };
  }

  openLIFFWindow() {
    liffHelper.openWindow(this.textInput.value, false);
  }

  openLIFFWindowExternal() {
    liffHelper.openWindow(this.textInput.value, true);
  }

  render() {
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="userid">Url:</label>
            <input ref={this.setTextInputRef.bind(this)} type="text" className="form-control" id="userid" defaultValue="https://www.google.com" />
          </div>
          <div className="form-group">
            <button type="button" class="btn btn-default" onClick={this.openLIFFWindow.bind(this)}>Open Url in LINE Browser</button>
          </div>
          <div className="form-group">
            <button type="button" class="btn btn-default" onClick={this.openLIFFWindowExternal.bind(this)}>Open Url in External Browser</button>
          </div>
          <hr />
          <button type="button" className="btn btn-default" onClick={() => { liffHelper.closeWindow() }}>Close LIFF</button>
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}
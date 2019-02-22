import React, { Component } from 'react'
import liffHelper from '../utils/liffHelper'

export default class LIFFWindow extends Component {
  constructor(props) {
    super(props)

    this.textInput = null

    this.setTextInputRef = this.setTextInputRef.bind(this)
    this.openLIFFWindow = this.openLIFFWindow.bind(this)
    this.openLIFFWindowExternal = this.openLIFFWindowExternal.bind(this)
    this.closeWindow = liffHelper.closeWindow()
  }

  setTextInputRef = element => {
    this.textInput = element
  }

  openLIFFWindow() {
    liffHelper.openWindow(this.textInput.value, false)
  }

  openLIFFWindowExternal() {
    liffHelper.openWindow(this.textInput.value, true)
  }

  render() {
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="userid">
              Url:
              <input
                ref={this.setTextInputRef}
                type="text"
                className="form-control"
                id="userid"
                defaultValue="https://www.google.com"
              />
            </label>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-default" onClick={this.openLIFFWindow}>
              Open Url in LINE Browser
            </button>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-default" onClick={this.openLIFFWindowExternal}>
              Open Url in External Browser
            </button>
          </div>
          <hr />
          <button type="button" className="btn btn-default" onClick={this.closeWindow}>
            Close LIFF
          </button>
        </div>
        <div className="col-lg-3" />
      </div>
    )
  }
}

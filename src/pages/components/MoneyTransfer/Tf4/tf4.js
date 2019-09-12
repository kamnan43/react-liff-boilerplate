import React, { Component } from 'react';
import './style.css'

class Tf4 extends Component {
  render() {
    return (
      <div className="wrap-tf4">
        <div className="navi-header">Transfer confirmation</div>
        <div className="bg-red-savingPlan">You are about to transfer from <b>primary account</b> to <b>saving account</b> with amount of <b>5,000 THB</b></div>
      </div>
    )
  }
}

export default Tf4;
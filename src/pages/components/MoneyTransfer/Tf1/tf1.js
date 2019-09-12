import React, { Component } from 'react';
import './style.css'

class Tf1 extends Component {
  render() {
    return (
      <div className="wrap-tf1">
        <div className="navi-header">Transfer</div>
        <div className="bg-red-savingPlan">You are about to transfer money from primary account which balance is <b>15,000 THB</b></div>
      </div>
    )
  }
}

export default Tf1;
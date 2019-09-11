import React, { Component } from 'react';
import './style.css'

class Sp3 extends Component {
  render() {
    return (
      <div className="wrap-sp3">
        <div className="navi-header">Set amount</div>
        <div><input className='savingPlanInput'  placeholder="Set amount here"></input></div>
      </div>
    )
  }
}

export default Sp3;
import React, { Component } from 'react';
import './style.css'

class Sp4 extends Component {
  render() {
    return (
      <div className="wrap-sp4">
        <div className="navi-header">Set end Date</div>
        <div><input className='savingPlanInput'  placeholder="Set end date day here"></input></div>
        <div><input className='savingPlanInput'  placeholder="Set end date month here"></input></div>
        <div><input className='savingPlanInput'  placeholder="Set end date year here"></input></div>
      </div>
    )
  }
}

export default Sp4;
import React, { Component } from 'react';
import './style.css'

class Tf3 extends Component {
  render() {
    return (
      <div className="wrap-tf3">
        <div className="navi-header">Transfer to own saving account</div>
        <div><input className='savingPlanInput'  placeholder="Please input amount for transfer"></input></div>
      </div>
    )
  }
}

export default Tf3;
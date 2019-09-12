import React, { Component } from 'react';
import './style.css'

class Sp10 extends Component {
  render() {
    return (
      <div className="wrap-sp10">
        <div alt="Saving Plan Summary" className="navi-header">SAVING PLAN SUMMARY</div>
        <hr/>
        <div className="bg-red-savingPlan">
          Your saving plan is to save 
          500 Bath per day for 10 days
          <br/>
          Starting from 11 September 2019 to 20 September 2019.
        </div>
      </div>
    )
  }
}

export default Sp10;
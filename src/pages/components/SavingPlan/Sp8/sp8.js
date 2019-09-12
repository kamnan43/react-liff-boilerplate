import React, { Component } from 'react';
import './style.css'

class Sp8 extends Component {
  render() {
    const vacTrip1 = "Your vacation trip saving goal is to save 5,000 Bath within 19 September 2019. Now you save 0 Bath, you have to save 5,000 Bath more for 10 days remaining.";
    const vacTrip2 = "You still have no saving plan."
    const sp8_header = "Vacation Trip";
    return (
      <div className="wrap-sp8">
      <div className="navi-header" alt={sp8_header}>{sp8_header}</div>
        <div className="sp8_container">
          <label alt={vacTrip1}>{vacTrip1}</label>
          <label alt={vacTrip2}>{vacTrip2}</label>
        </div>
      </div>
    )
  }
}

export default Sp8;
import React, { Component } from 'react';
import './style.css'

class Sp11 extends Component {
  render() {
    const vacTrip1 = `Your vacation trip saving goal is to save 5,000 Bath within 19 September 2019. Now you save 0 Bath, you have to save 5,000 Bath more for 10 days remaining.`;
    const vacTrip2 = "Your saving plan is to save 500 Bath per day for 10 days. Starting from 11 September 2019 to 20 September 2019."
    const sp11_header = "Vacation Trip";
    return (
      <div className="wrap-sp11">
      <div className="navi-header" alt={sp11_header}>{sp11_header}</div>
        <div className="sp8_container">
          <label alt={vacTrip1}>{vacTrip1}</label>
          <label alt={vacTrip2}>{vacTrip2}</label>
        </div>
      </div>
    )
  }
}

export default Sp11;
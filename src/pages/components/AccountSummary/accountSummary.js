import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class AccountSummary extends Component {

  render() {
    return (

      <div className="account-summary">
        <div className="col-lg-3" />
          <div className="col-lg-6">

            <div className="navi-header">Account Summary</div>

            <div className="form-group bg-red accountSummary">
              <label>Primary Account: </label>
              <span>10,000 THB</span>
            </div>
            <div className="form-group bg-red">
              <label>Saving Account: </label>
              <span>5,000 THB</span>
            </div>
            <div className="form-group bg-red">
              <label>Total Banlance: </label>
              <span>15,000 THB</span>
            </div>
            <div className="wrap-button">
              <button className="button-link"><Link to="/" >Back</Link></button>
            </div>
          </div>
        <div>
        
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}

export default AccountSummary;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class AccountSummary extends Component {

  render() {
    return (

      <div className="page-content account-summary">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div className="form-group accountSummary">
            <label>Primary Account: </label>
            <span>10,000 THB</span>
          </div>
          <hr />
          <div className="form-group">
            <label>Saving Account: </label>
            <span>5,000 THB</span>
          </div>
          <hr />
          <div className="form-group">
            <label>Total Banlance: </label>
            <span>15,000 THB</span>
          </div>
        </div>
        <hr />
        <div>
        <button className="nav-link button-link"><Link to="/" >Back to main menu</Link></button>
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}

export default AccountSummary;
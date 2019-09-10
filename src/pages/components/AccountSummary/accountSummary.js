import React, { Component } from 'react';
import liffHelper from '../../../utils/liffHelper';
import './style.css'

class AccountSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        pictureUrl: '',
      }
    };
    liffHelper.getProfile()
      .then(profile => {
        this.setState({ profile });
      });
  }

  render() {
    const primary_account_value = 1000;
    return (
      <div>
        <div class="account-summary">
          <div class="container-fluid">
            <h1>Primary Account: {primary_account_value}</h1>
          </div>
        </div>
        <div class="account-summary">
          <div class="container-fluid">
            <h1>Primary Account: {primary_account_value}</h1>
          </div>
        </div>
      </div>

    );
  }
}

export default AccountSummary;
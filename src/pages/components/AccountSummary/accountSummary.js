import React, { Component } from 'react';
import man from '../../../assets/img/man.png';
import liffHelper from '../../../utils/liffHelper';
import './style.css'

class AccountSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        pictureUrl: man,
        redirect: false
      }
    };
    liffHelper.getProfile()
      .then(profile => {
        this.setState({ profile });
      });
  }

  render() {
    return (
      <div>
        <div className="topic-header">ACCOUNT SUMMARY</div>
        <div className="account-summary">
          <div>
            <div className="login_page_profile">
              <div className="login_page_profile_bg">
                <img width="130" className="avatar-img" alt="profile" src={this.state.profile.pictureUrl} />
              </div>
            </div>
            <div className="account-summary_container">
              <div className="account-summary_textbox">
                <span>Primary Account: 10,000 THB</span>
              </div>
              <div className="account-summary_textbox">
                <span>Saving Account: 5,000 THB</span>
              </div>
              <div className="account-summary_textbox">
                <span>Total Banlance: 15,000 THB</span>
              </div>
              <div className="wrap-button">
                <button className="button-link" onClick={() => { liffHelper.closeWindow() }}>Back to main menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
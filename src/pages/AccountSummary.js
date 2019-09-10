import React, { Component } from 'react';
import man from '../assets/img/man.png';
import liffHelper from '../utils/liffHelper';

class AccountSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        pictureUrl: man,
      }
    };
    liffHelper.getProfile()
      .then(profile => {
        this.setState({ profile });
      });
  }

  render() {
    return (
      <div className="page-content">
        <div className="row" >
          <div className="col"> Mhom </div>
          <div className="col"> Mhom </div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
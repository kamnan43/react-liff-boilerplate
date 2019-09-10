import React, { Component } from 'react';
import man from '../../../assets/img/man.png';
import liffHelper from '../../../utils/liffHelper';
import ReactCodeInput from 'react-code-input';
import { Redirect } from 'react-router-dom';

class Login extends Component {
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/accountSummary' />
    }
  }

  handlePIN(value) {
    const mockPIN = "9999"
    if (mockPIN === value) {
      console.log("mhom will fuck you");
      this.setRedirect();
    }
  }

  render() {
    const first_paragraph = "hello " + this.state.profile.userId;
    return (
      <div className="page-content">
        {this.renderRedirect()}
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div>
            <img width="130" className="avatar-img" alt="profile" src={this.state.profile.pictureUrl} />
          </div>
          <hr />
          <div className="form-group">
            <label alt={first_paragraph} htmlFor="firstParagraph">Hello {this.state.profile.userId}</label>
          </div>
          <div className="form-group">
            <label alt="Please insert youy PIN" htmlFor="secondParagraph">Please insert youy PIN</label>
          </div>
          <ReactCodeInput
            type='password'
            fields={4}
            onChange={(value) => { this.handlePIN(value) }}
          />
          <hr />
          <button type="button" className="btn btn-default" onClick={() => { liffHelper.closeWindow() }}>Close LIFF</button>
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}

export default Login;
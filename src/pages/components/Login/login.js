import React, { Component } from 'react';
import man from '../../../assets/img/man.png';
import liffHelper from '../../../utils/liffHelper';
import ReactCodeInput from 'react-code-input';
import { Button } from 'react-bootstrap';
import './style.css';

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

  handlePIN(value) {
    const mockPIN = "9999"
    if (mockPIN === value) {
      this.setRedirect();
    }
  }

  render() {
    const first_paragraph = "hello " + this.state.profile.userId;
    return (
      <div>
        <div className="login_page">
          <div className="container">
            <div className="login_page_profile">
              <div className="login_page_profile_bg">
                <img width="130" className="avatar-img" alt="profile" src={this.state.profile.pictureUrl} />
              </div>
            </div>

            <div className="form-group">
              <h3 alt={first_paragraph}>Hello {this.state.profile.displayName}</h3>
            </div>
            <div className="form-group">
              <h5 alt="Please insert youy PIN" >Please insert youy PIN.</h5>
            </div>
            <ReactCodeInput
              type='password'
              fields={4}
              onChange={(value) => { this.handlePIN(value) }}
              className="login-page_react-input-code"
              inputMode="numeric"
            />
          </div>
        </div>
        <Button variant="danger" size="lg" onClick={() => { liffHelper.closeWindow() }}>Back to main menu</Button>
      </div>
    );
  }
}

export default Login;
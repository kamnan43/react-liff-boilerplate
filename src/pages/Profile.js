import React, { Component } from 'react'
import PropTypes from 'prop-types'
import man from '../assets/img/man.png'
import liffHelper from '../utils/liffHelper'

export default class Profile extends Component {
  // constructor(props) {
  //   super(props)

  //   this.setState({
  //     ...props.profile
  //   })
  // }

  // state = {
  //   profile: {
  //     pictureUrl: man,
  //     userId: this.props.profile.userId || '',
  //     displayName: this.props.profile.displayName || '',
  //     statusMessage: this.props.profile.statusMessage || ''
  //   }
  // }

  // state: {
  //   profile: { pictureUrl: man, userId: '', displayName: '', statusMessage: '' }
  // } = this.props

  state = { ...this.props }

  componentDidMount() {
    liffHelper.getProfile().then(profile => this.setState({ profile }))
  }

  render() {
    // destructing assignment
    const {
      profile: { pictureUrl, userId, displayName, statusMessage }
    } = this.state
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div>
            <img width="130" className="avatar-img" alt="profile" src={pictureUrl} />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="userid">
              User ID:
              <input type="text" className="form-control" disabled id="userid" value={userId} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Display Name:
              <input type="text" className="form-control" disabled id="name" value={displayName} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="status">
              Status Message:
              <input
                type="text"
                className="form-control"
                disabled
                id="status"
                value={statusMessage}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="info">
              LIFF Info:
              <textarea
                rows="10"
                className="form-control"
                disabled
                id="info"
                value={JSON.stringify(liffHelper.getLIFFInfo(), '', 2)}
              />
            </label>
          </div>
          <hr />
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              liffHelper.closeWindow()
            }}
          >
            Close LIFF
          </button>
        </div>
        <div className="col-lg-3" />
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    pictureUrl: PropTypes.string,
    userId: PropTypes.string,
    displayName: PropTypes.string,
    statusMessage: PropTypes.string
  })
}

Profile.defaultProps = {
  profile: {
    pictureUrl: man,
    userId: '',
    displayName: '',
    statusMessage: ''
  }
}

import React, { Component } from 'react'
import classNames from 'classnames'

export default class Header extends Component {
  isActive(menu) {
    let url = window.location.pathname
    return url === menu ? ' active' : ''
  }

  render() {
    return (
      <ul className="nav nav-tabs">
        <li className={classNames('nav-item', { active: this.isActive('/') })}>
          <a className="nav-link" href="/">Profile</a>
        </li>
        <li className={classNames('nav-item', { active: this.isActive('/message') })}>
          <a className="nav-link" href="/message">SendMessage</a>
        </li>
        <li className={classNames('nav-item', { active: this.isActive('/window') })}>
          <a className="nav-link" href="/window">LIFFWindow</a>
        </li>
      </ul>
    )
  }
}

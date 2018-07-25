import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="/">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/message">SendMessage</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/window">LIFFWindow</a>
        </li>
      </ul>
    );
  }
}

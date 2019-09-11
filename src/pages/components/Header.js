import React, { Component } from 'react';

export default class Header extends Component {
  isActive(menu) {
    let url = window.location.pathname;
    return url === menu ? ' active' : '';
  }

  render() {
    return (
      <ul className="nav nav-tabs">
        <li className={`nav-item${this.isActive('/')}`}>
          <a className="nav-link" href="/">Profile</a>
        </li>
        <li className={`nav-item${this.isActive('/message')}`}>
          <a className="nav-link" href="/message">SendMessage</a>
        </li>
        <li className={`nav-item${this.isActive('/window')}`}>
          <a className="nav-link" href="/window">LIFFWindow</a>
        </li>
        <li className={`nav-item${this.isActive('/accountSummary')}`}>
          <a className="nav-link" href="/accountSummary">AccountSummary</a>
        </li>
        <li className={`nav-item${this.isActive('/savingPlan')}`}>
          <a className="nav-link" href="/savingPlan">SavingPlan</a>
        </li>
      </ul>
    );
  }
}

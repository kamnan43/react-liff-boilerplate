import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import Profile from './pages/Profile';
import SendMessage from './pages/SendMessage';
import LIFFWindow from './pages/LIFFWindow';
import AccountSummary from './pages/components/AccountSummary/accountSummary';
import Login from './pages/components/Login/login';
import Header from './pages/components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/message" component={SendMessage} />
            <Route path="/window" component={LIFFWindow} />
            <Route path="/accountSummary" component={AccountSummary} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

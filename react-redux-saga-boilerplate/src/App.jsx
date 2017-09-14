import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
import CounterContainer from './containers/CounterContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-redux-saga-boilerplate</h2>
        </div>
        <p className="App-intro">
          点击 + 按钮，等待 1 秒后，计数器 + 1
        </p>

        <CounterContainer />

      </div>
    );
  }
}

export default App;

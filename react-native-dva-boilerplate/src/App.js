import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-native-dva-boilerplate</h2>
        </div>
        <hr />
        <h2>计数器</h2>
        <button>+</button>
        <button>-</button>
        <hr />
      </div>
    );
  }
}

export default App;

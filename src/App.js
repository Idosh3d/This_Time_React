import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React_Test_1
          </p>
          <div className="rounded-rectangle" onClick={() => window.location.href="https://tinyurl.com/idosh3d"}>
              I can make websites now yay
          </div>
        </header>
      </div>
    );
  }
}

export default App;



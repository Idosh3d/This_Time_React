import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React_Test_1</p>
          <jojo
            className="rounded-rectangle"
            onClick={() => window.location.href="https://tinyurl.com/idosh3d"}
            >
            I can make websites now yay
          </jojo>
          <jojo2
            className="rounded-rectangle"
            onClick={() => window.open("https://tinyurl.com/idosh3d", "_blank")}
            style={{ marginTop: '20px' }}
            >
            I can make websites now yay
          </jojo2>

          <dropdown
            className="rounded-rectangle"
            style={{
              backgroundColor: 'rgb(100, 180, 180)',
              width: '300px',
              height: '50px',
              position: 'absolute',
              top: '80px',
              right: '80px',
            }}
            >
          </dropdown>
        </header>
      </div>
    );
  }
}

export default App;



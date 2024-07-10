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
            Hello from Render!
          </p>

          <div style={{ display: "flex" }}>
            <div className="rounded-rectangle" onClick={() => window.location.href="https://tinyurl.com/idosh3d"}>
              <a
                className="App-link"
                href="https://tinyurl.com/idosh3d"
                target="_blank"
                rel="noopener noreferrer"
              >
                How To Get To Ido's Portfolio
                In An Overly Complicated Way
              </a>
            </div>
            <div className="rounded-rectangle" style={{ marginLeft: "10px" }} onClick={() => window.location.href="https://tinyurl.com/idosh3d"}>
              <a
                className="App-link"
                href="https://tinyurl.com/idosh3d"
                target="_blank"
                rel="noopener noreferrer"
              >
                How To Get To Ido's Portfolio
                In An Overly Complicated Way
              </a>
            </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;



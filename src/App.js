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
            className="dropdown-top"
            style={{
              width: '350px',
              height: '50px',
              position: 'absolute',
              top: '80px',
              right: '80px',
            }}
            >
              dropdown menu no.1
            <parent
              className="dropdown-parent"
              >
                <item
                  className="dropdown-item"
                >
                  click this!
                </item>
            </parent>
          </dropdown>
        </header>
      </div>
    );
  }
}

export default App;



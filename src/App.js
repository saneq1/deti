import React from 'react';
import './assets/base.scss'
import './App.scss';
import logo from './assets/img/logo.png'

function App() {
  return (
      <div className="app">
        <header className="header">
          <div className={'header-top'}>
              <div className={'header-bottom'}>
                <div className="container">
                  <div className="row">
                <img src={logo} alt="logo"/>
                <h1>усыновление <br/> в россии</h1>
                  </div>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Forum</a></li>
              <li><a href="">Download</a></li>
            </ul>
          </nav>
        </header>
      </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import logo from './assets/img/logo.png'

function App() {
  return (
      <div className="app">
        <header className="app-header">
          <div className={'app-header-top'}>

              <div className={'app-header-bottom'}>
                <div className="container">
                <img src={logo} alt="logo"/>
                <span>усыновление в россии</span>
              </div>
            </div>
          </div>

        </header>
      </div>
  );
}

export default App;

import React from 'react';
import './header.scss'
import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/arrow.png";


const Header = (props) => {
  return (
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
        <div className="container">
          <nav className={'navigation'}>
            <ul>
              <li><a href="/">Главная</a> <img src={arrow} alt=""/></li>
              <li><a href="/">Банк данных</a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;

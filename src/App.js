import React from 'react';
import './assets/base.scss'
import './App.scss';
import logo from './assets/img/logo.png'
import arrow from './assets/img/arrow.png'
import family from './assets/img/family.png'
import child from './assets/img/child.png'

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
          <div className="container">
            <nav className={'navigation'}>
              <ul>
                <li><a href="">Главная</a> <img src={arrow} alt=""/></li>
                <li><a href="">Банк данных</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="container">

          <div className={'info'}>
            <span className={'info-title'}>банк данных</span>
            <hr/>
            <div className={'info-inner'}>
              <img src={family} alt="family"/>
              <div className={'info-inner-counter'}>
                <span>
                  42 432
                </span>
                <span>
                  Число детей, информация о которых содержится в федеральном банке данных
                </span>
              </div>
            </div>
          </div>

          <div className="search">
            <div className="search-inner">
              <span>Пол</span>
              <div className="search-inner-radio">
                <label className="checkbox"> <input type="radio" name={'search'}/> <span
                    className="radiomark">не важно</span>
                </label>
                <label className="checkbox"> <input type="radio" name={'search'}/> <span
                    className="radiomark"> мальчик</span>
                </label>
                <label className="checkbox"> <input type="radio" name={'search'}/> <span
                    className="radiomark">девочка</span>
                </label>
              </div>
              <button className={'search-inner-button'}> Искать</button>
            </div>
          </div>

          <div className={'list'}>
            <hr/>
            <div className={'list-counter'}>Нашлось 43 159 анкет</div>

            {
              [0, 1, 2].map(i => {
              return (
                  <div className={'card'}>
                    <div className={'card-about'}>
                      <div className={'card-about-name'}>Анна С.</div>
                      <div className={'card-about-city'}>Кабардино-Балкарская Республика</div>
                      <div className={'card-about-age'}>16 лет , девочка</div>
                      <p className={'card-about-info'}>Анна активная и эмоциональная девочка</p>
                    </div>
                    <img src={child} alt="child"/>
                  </div>
              )})
            }

          </div>


        </div>
      </div>
  );
}

export default App;

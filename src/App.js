import React, {useEffect, useState} from 'react';
import './assets/base.scss'
import './App.scss';
import gerb from './assets/img/gerb.png';
import phone from './assets/img/phone.png';
import email from './assets/img/email.png';
import logo from './assets/img/logo.png'
import arrow from './assets/img/arrow.png'
import family from './assets/img/family.png'
import ReactPaginate from 'react-paginate';
import ChildCard from "./component/childCard/childCard";
import axios from "axios";

function App() {
  const [childrens, setChildrens] = useState([]);
  const [params, setParams] = useState({
    limit: 6,
    page: 1
  });

  useEffect(() => {
    axios.get(`/children?limit=${params.limit}&page=${params.page}`).then(res => {
      if (res.status === 200) {
        console.log(res.data.rows);
        setChildrens(res.data.rows);
      }
    });
  }, []);

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
              childrens.map(child => {
                return <ChildCard child={child} key={child.id}/>
              })
            }

            <ReactPaginate
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={122}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={() => {
                }}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
          </div>
        </div>

        <footer>
          <div className={'footer-top'}>
            <div className={'footer-bottom'}>
              <div className="container">
                <div className="row">
                  <div className="footer-about">
                    <img src={gerb} alt="logo" className={'footer-about-gerb'}/>
                    <span className={'footer-about-caption'}>
                      Министерство просвещения <br/> РОССИЙСКОЙ ФЕДЕРАЦИИ
                    </span>
                  </div>
                  <div className="footer-info">
                    <span>
                    <img src={phone} alt="logo"/>
                    <span>
                      +7 (495) 539-55-19
                    </span>
                      </span>
                    <span>
                    <img src={email} alt="logo"/>
                    <span>
                     Вопросы по технической поддержке сайта
                    </span>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
  );
}

export default App;

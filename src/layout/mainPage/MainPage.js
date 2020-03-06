import React, {useEffect, useMemo, useState} from 'react';
import '../../assets/base.scss'
import '../../App.scss';
import family from '../../assets/img/family.png'
import ReactPaginate from 'react-paginate';
import ChildCard from "../../component/childCard/childCard";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {filtersActions} from "../../config/redux/filters/filtersActions";
import {childrenActions} from "../../config/redux/children/childrenActions";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";


function MainPage() {
  const dispatch = useDispatch();
  const genders = useSelector(state => state.filters.genders);
  const {data: children, total, pages} = useSelector(state => state.children, shallowEqual);
  const [gender, setGender] = useState();
  const [page, setPage] = useState(7);


  useEffect(() => {
    dispatch(childrenActions.getChildren({genderId: gender, page}))
  }, [page]);

  const selectGender = useMemo(() => (gender) => dispatch(filtersActions.selectGender(gender)), [dispatch]);

  useEffect(() => {
    dispatch(filtersActions.listGenders())
  }, []);

  const buttonSearch = () => {

    setPage(0);

    dispatch(childrenActions.getChildren({genderId: gender, page}));
  }


  return (
      <div className="app">
        <Header/>

        <section className="container">
          <div className={'info'}>
            <div className={'info-title'}>банк данных</div>
            <hr/>
            <div className={'info-inner'}>
              <img src={family} alt="family"/>
              <div className={'info-inner-counter'}>
                <span>
                  {total}
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
                <label className="checkbox"> <input type="radio" name={'search'} value={undefined}
                                                          className="checkbox-radio"
                                                    onChange={event => setGender(event.target.value)}/>
                <span className="checkbox-text">не важно</span>
                </label>
                {
                  genders.map(gender => <label key={gender.id} className="checkbox">
                    <input
                        type="radio"
                        name={'search'}
                        value={gender.id}
                        onChange={event => setGender(event.target.value)}
                    /> <span
                      className="radiomark">{gender.title}</span>
                  </label>)
                }
              </div>
              <button className={'search-inner-button'} onClick={() => buttonSearch()}> Искать</button>
            </div>
          </div>

          <div className={'list'}>
            <hr/>
            <div className={'list-counter'}>Нашлось {total} анкет</div>
            {
              children.map(child => {
                return <ChildCard child={child} key={child.id}/>
              })
            }
            <ReactPaginate
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                initialPage={page}
                onPageChange={({selected}) => setPage(selected)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
          </div>
        </section>

        <Footer/>
      </div>
  );
}

export default MainPage;

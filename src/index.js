import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store, {history} from "./config/redux/configureStore";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import MainPage from "./layout/mainPage/MainPage";

axios.defaults.baseURL = 'http://deti.dev.eit.edu.ru/api';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainPage/>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

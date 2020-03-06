import React from 'react';
import ReactDOM from 'react-dom';
import store, {history} from "./redux/configureStore";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import MainPage from "./layout/mainPage/MainPage";


ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainPage/>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

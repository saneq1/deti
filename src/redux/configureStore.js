import {applyMiddleware, combineReducers, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from "history";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {childrenReducers} from "./children/childrenReducers";
import {filtersReducer} from "./filters/filtersReducers";

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  children: childrenReducers,
  filters: filtersReducer,
});

const store = createStore(
    rootReducer(history),
    {},
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
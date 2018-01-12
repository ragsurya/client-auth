import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk  from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import { reduxForm } from 'redux-form';

import { AUTH_USER, AUTH_ERROR } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
// if (token) {
//   // we need to update application state
//   store.dispatch({ type: AUTH_ERROR });
// }
// // const store = createStore(reducers, applyMiddleware(reduxThunk));
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/signin" component={Signin} />
    </Route> 
  </Router> 

  </Provider>
  , document.querySelector('.container'));
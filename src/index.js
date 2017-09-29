import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import App from './containers/App';
import 'reset-css';
import './index.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

function hasLoaded(obj) {
  return Object.keys(obj).length > 0;
}

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App hasLoaded={ hasLoaded } />
  </Provider>,
  document.getElementById('root'));

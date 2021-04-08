import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Reducers from './reducer';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import './index.css';

const reducers = combineReducers(Reducers);
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


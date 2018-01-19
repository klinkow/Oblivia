import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk))

export var fullGameState = store.getState()

const stateLogger = store.subscribe(() =>
  fullGameState = store.getState()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

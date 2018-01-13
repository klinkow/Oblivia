import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk))

// TODO: Either above: game state (full) to second argument? (make applyMiddleware third argument)
// OR - below: set fullGameState to store.getState() so that it initializes with first game state

export var fullGameState

const stateLogger = store.subscribe(() =>
  fullGameState = store.getState()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

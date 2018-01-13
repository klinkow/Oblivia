import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk))


// TODO: Make this function create an export variable containing the current state. Then import in the actions index.
const stateLogger = store.subscribe(() =>
  console.log(store.getState())
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

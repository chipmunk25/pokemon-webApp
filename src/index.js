import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './appRedux/store';
import { Provider } from 'react-redux'

const store = configureStore(/* provide initial state if any */);

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  Root,
  document.getElementById('root')
);

reportWebVitals();

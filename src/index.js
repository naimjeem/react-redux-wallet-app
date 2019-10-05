import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import jwtDecode from "jwt-decode";
import * as Types from './store/actions/types';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';

const token = localStorage.getItem('authToken');
if (token) {
  let decode = jwtDecode(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode
    }
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

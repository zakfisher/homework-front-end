import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Route config
import routes from './routes';

// Redux store
import store from './store';

// Styles
import './styles/index.css';

/**
  Client-side entry point
  ---
  ./src/index.js

  In this class we:
  - call `ReactDOM.render()` on the client
  - allow client-side routing with React Router
  - pass in our Redux data store

  @returns {object} Client
*/

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

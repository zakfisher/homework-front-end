import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components & Containers
import App from './components/App';
import CurrentReposList from './containers/CurrentReposList';
import MissingRoute from './components/MissingRoute';

/**
  Routes
  ---
  ./app/routes.js

  - This file configures routes via React Router.
  - These routes can be used universally with an Express server.

  @returns {JSX} Routes
*/

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={CurrentReposList} />
    <Route path="/repos/:username" component={CurrentReposList} />
    <Route path="*" component={MissingRoute} />
  </Route>
);

export default Routes;

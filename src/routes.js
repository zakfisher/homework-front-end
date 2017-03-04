import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import App from './layouts/App';

// Pages
import Search from './pages/Search';
import MissingRoute from './pages/MissingRoute';

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
    <IndexRoute component={Search} />
    <Route path="/repos/:username" component={Search} />
    <Route path="*" component={MissingRoute} />
  </Route>
);

export default Routes;

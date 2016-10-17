/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/
/*
  As we are hot loading in routes when they are used, we have to require them inline.
*/

import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './containers/App';


const Routing = () => (
  <BrowserRouter>
    <App>
      <Match exactly pattern="/" component={require('react-router?name=home!./containers/Home')} />
      <Miss component={require('react-router?name=notFound!./containers/NotFound')} />
    </App>
  </BrowserRouter>
);

export default Routing;

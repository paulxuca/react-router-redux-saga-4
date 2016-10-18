/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/
/*
  As we are hot loading in routes when they are used, we have to require them inline.
*/

import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from 'react-redux';
import App from './containers/App';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

const appContainerStyling = {
  appContainer: {
    marginTop: 50,
  },
};

const Routing = ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <NavigationBar />
        <div style={appContainerStyling.appContainer}>
          <Match exactly pattern="/" component={require('react-router?name=home!./containers/Home')} />
          <Match exactly pattern="/example" component={require('react-router?name=example!./containers/Example')} />
          <Miss component={require('react-router?name=notFound!./containers/NotFound')} />
        </div>
        <Footer />
      </App>
    </Provider>
  </BrowserRouter>
);

Routing.propTypes = {
  store: React.PropTypes.object,
};

export default Routing;

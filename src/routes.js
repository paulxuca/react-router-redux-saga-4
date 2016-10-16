import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './containers/App'

// Component for routing
export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Match exactly pattern="/" component={require('react-router?name=home!./containers/Home')} />
          <Miss component={require('react-router?name=notFound!./containers/NotFound')} />
        </App>
      </BrowserRouter>
    );
  }
}
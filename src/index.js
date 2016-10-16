import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routing from './routes.js';
import 'sanitize.css/sanitize.css';


const renderToDomElement = document.getElementById('root');
const store = configureStore({}, browserHistory);


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routing/>
    </Provider>
  </AppContainer>,
  renderToDomElement  
);

// HMR for React
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextHotLoaded = require('./routes.js').default;
    ReactDOM.render(
      <AppContainer>
        <NextHotLoaded />
      </AppContainer>
      ,
      renderToDomElement
    );
  });
}
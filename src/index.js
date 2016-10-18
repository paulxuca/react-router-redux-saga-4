import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import configureStore from './store';
import Routing from './routes';
import sagas from './sagas';


const renderToDomElement = document.getElementById('root'); // eslint-disable-line
const store = configureStore({}, browserHistory);
store.runSaga(sagas);

ReactDOM.render(
  <AppContainer>
    <Routing store={store} />
  </AppContainer>,
  renderToDomElement
);

// HMR for React
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextHotLoaded = require('./routes.js').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NextHotLoaded store={store} />
      </AppContainer>
      ,
      renderToDomElement
    );
  });
}

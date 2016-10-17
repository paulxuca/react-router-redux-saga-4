import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => (noop) => noop); // eslint-disable-line

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then(() => {
        const nextReducers = createReducer();
        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
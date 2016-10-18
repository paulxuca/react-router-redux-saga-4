import { fork } from 'redux-saga/effects';
import * as exampleWatcher from './containers/Example/sagas';

export default function* root() {
  yield [
    fork(exampleWatcher.default),
  ];
}

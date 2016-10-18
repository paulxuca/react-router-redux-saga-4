import { fork, call, put } from 'redux-saga/effects';
import { takeLatest, delay } from 'redux-saga';
import request from '../../utils/request';
import { CHANGE_USERNAME_FIELD } from './constants';
import { usernameFetchSuccess, usernameFetchError } from './actions';

function* asyncFetchDataExample({ payload }) {
  if (payload.length >= 3) {
    yield call(delay, 1000); // We want to start fetching when idle for more than one second
     // We only want to fetch when there are more than 3 letters in the username field
    const fetchUrl = `https://api.github.com/users/${payload}/starred`;
    const asyncFetchData = yield call(request, fetchUrl);

    if (!asyncFetchData.err) {
      yield put(usernameFetchSuccess(asyncFetchData.data));
    } else {
      yield put(usernameFetchError(asyncFetchData.err.message));
    }
  }
}

function* userNameFieldWatcher() {
  yield takeLatest(CHANGE_USERNAME_FIELD, asyncFetchDataExample);
}

function* rootExampleWatcher() {
  yield [
    fork(userNameFieldWatcher),
  ];
}

export default rootExampleWatcher;

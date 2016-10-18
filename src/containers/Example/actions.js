import {
  CHANGE_USERNAME_FIELD,
  USERNAME_FETCH_ERROR,
  USERNAME_FETCH_SUCCESS,
} from './constants';

export function usernameFetchError(error) {
  return {
    type: USERNAME_FETCH_ERROR,
    payload: error,
  };
}

export function usernameFetchSuccess(payload) {
  return {
    type: USERNAME_FETCH_SUCCESS,
    payload,
  };
}

export function changeUsernameField(username) {
  return {
    type: CHANGE_USERNAME_FIELD,
    payload: username,
  };
}

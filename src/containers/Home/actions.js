import {
  CHANGE_USERNAME_FIELD,
} from './constants';

export function changeUsernameField(username) {
  return {
    type: CHANGE_USERNAME_FIELD,
    payload: username,
  };
}

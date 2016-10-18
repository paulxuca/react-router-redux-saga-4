import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME_FIELD,
  USERNAME_FETCH_ERROR,
  USERNAME_FETCH_SUCCESS,
} from './constants';

const intialState = fromJS({
  queriedUsername: '',
  fetchErrors: false,
  fetchData: false,
});

export default function exampleReducer(state = intialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME_FIELD:
      return state.set('queriedUsername', action.payload);
    case USERNAME_FETCH_ERROR:
      return state
        .set('fetchErrors', action.payload);
    case USERNAME_FETCH_SUCCESS:
      return state
      .set('fetchErrors', false)
      .set('fetchData', action.payload);
    default:
      return state;
  }
}

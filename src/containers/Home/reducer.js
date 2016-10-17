import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME_FIELD,
} from './constants';

const intialState = fromJS({
  queriedUsername: '',
});

export default function homeReducer(state = intialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME_FIELD:
      return state.set('queriedUsername', action.payload);
    default:
      return state;
  }
}

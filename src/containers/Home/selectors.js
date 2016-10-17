import { createSelector } from 'reselect';

export const selectHomeReducer = () => state => state.get('home');

export const selectUsernameField = () => createSelector(
  selectHomeReducer(),
  substate => substate.get('queriedUsername')
);



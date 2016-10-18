import { createSelector } from 'reselect';

export const selectHomeReducer = () => state => state.get('example');

export const selectHomeReducerDomain = () => createSelector(
  selectHomeReducer(),
  substate => substate.toJS()
);


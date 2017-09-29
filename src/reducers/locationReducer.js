import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.location, action) {
  switch (action.type) {
    case types.FETCH_LOCATION:
      return Object.assign({loaded: true}, action.payload);

    default:
      return state;
  }
}

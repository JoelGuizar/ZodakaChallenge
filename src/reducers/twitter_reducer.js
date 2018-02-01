import _ from 'lodash';
import {FETCH_RESULTS} from '../actions/types';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_RESULTS:
      return {...state, searchResults: action.payload};
    default:
     return state;
  }
}

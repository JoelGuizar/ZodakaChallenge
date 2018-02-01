import { combineReducers } from 'redux';
import twitterReducer from './twitter_reducer';

const rootReducer = combineReducers({
  twitter: twitterReducer,
});

export default rootReducer;

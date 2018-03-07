import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import player from './player';
import user from './user';

export default combineReducers({
  routing: routerReducer,
  counter,
  player,
  user
});

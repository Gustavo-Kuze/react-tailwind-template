import { combineReducers } from 'redux';
import exampleReducer from './example';
import settingsReducer from './settings';
import tipsReducer from './tips';

export default combineReducers({
  example: exampleReducer,
  settings: settingsReducer,
  tips: tipsReducer,
});

import { combineReducers } from 'redux';
import location from './locationReducer';
import weather from './weatherReducer';

const rootReducer = combineReducers({
  location,
  weather
});

export default rootReducer;

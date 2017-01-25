import { combineReducers } from 'redux-immutable';
import counterReducers from './counterReducer';

const rootReducer = combineReducers({
  counterReducers
});

export default rootReducer;
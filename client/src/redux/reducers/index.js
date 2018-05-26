import { combineReducers } from 'redux';

import appOptions from './optionsReducer';
import phoneList from './phonesReducer';

const rootReducer = combineReducers({
  appOptions,
  phoneList
});

export default rootReducer;

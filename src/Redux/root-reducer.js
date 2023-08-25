import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './slices/peopleslices';
import postReducer from './slices/peopleslices';

const rootReducer = combineReducers({
  userData: usersReducer,
  peopleState: postReducer
});

export default rootReducer;         
import { combineReducers } from 'redux';
import usersReducer from './slices/user.slices';
import postReducer from './slices/peopleslices';
import  filmsReducer from './slices/Films.slice';

const rootReducer = combineReducers({
  userData: usersReducer,
  postState: postReducer,
  filmsState: filmsReducer
});

export default rootReducer;         
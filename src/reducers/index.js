import {combineReducers} from 'redux';
import UserReducer from './reducer_user';
import ActiveUser from './reducer_active_user';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUser
});

export default allReducers;
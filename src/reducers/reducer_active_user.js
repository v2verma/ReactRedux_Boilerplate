import {User_Selected} from '../actions/index';

export default function (state=null, action){
  switch(action.type){
    case User_Selected:
      return action.payload;
    
    default: return state;
  }
}
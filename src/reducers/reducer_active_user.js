import {User_Selected, ADD} from '../actions/index';

export default function (state=null, action){
  switch(action.type){
    case User_Selected:
      return action.payload;
    case ADD:
      return {...state, [action.payload]: action.payload};
    
    default: return state;
  }
}
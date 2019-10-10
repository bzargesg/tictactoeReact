import { ticTacToeConstants } from '../Actions/constants';

export default function board(state = {}, action){
  switch(action.type){
    case ticTacToeConstants.O_PIECE:
      return Object.assign({},state);
    default:
      return state;
  }
}
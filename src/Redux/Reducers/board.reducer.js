import { ticTacToeConstants } from '../Actions/constants';

export default function board(state = { turn: true, board : [['','',''],['','',''],['','','']]}, action){
  let row = action.row, col = action.col;
  let board = JSON.stringify(state.board);
  board = JSON.parse(board);
  switch(action.type){
    case ticTacToeConstants.O_PIECE:
      board[row][col] = "O"
      return {board, turn: !state.turn};
    case ticTacToeConstants.X_PIECE:
      board[row][col] = "X"
      return {board, turn: !state.turn};
    default:
      return state;
  }
}
import { ticTacToeConstants } from './constants'

export const boardActions = {
  addO,
  addX,
  changeTurn
}

function addX(row, col) {
  return {
    type: ticTacToeConstants.X_PIECE,
    row,
    col
  }
}
function addO(row, col) {
  return {
    type: ticTacToeConstants.O_PIECE,
    row,
    col
  }
}
function changeTurn() {
  return {
    type: ticTacToeConstants.CHANGE_TURN
  }
}
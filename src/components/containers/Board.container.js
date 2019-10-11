import Board from '../Board';
import { connect } from 'react-redux';
import { boardActions } from '../../Redux/Actions/board.actions';

const mapStateToProps = state =>({
  ...state.board
})
const mapDispatchToProps = dispatch =>({
  addX: (row, col)=>dispatch(boardActions.addX),
  addO: (row, col)=>dispatch(boardActions.addO),
  changeTurn: ()=>dispatch(boardActions.changeTurn)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
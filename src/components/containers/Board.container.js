import Board from '../Board';
import { connect } from 'react-redux';
import { boardActions } from '../../Redux/Actions/board.actions';

const mapStateToProps = state =>({
  ...state.board
})
const mapDispatchToProps = dispatch =>({
  addX: (row, col)=>dispatch(boardActions.addX(row,col)),
  addO: (row, col)=>dispatch(boardActions.addO(row,col)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
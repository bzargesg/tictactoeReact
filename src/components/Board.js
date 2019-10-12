import React from 'react';
import Tile from './Tile';
import driver from '../Redux/Helpers/winconditions';
let Board = function (props) {
  let row = [0,1,2], col = [0,1,2]

  return (
    <div className="Board">
      <span className="win">{driver(props.board) ? driver(props.board)+" wins!" : "no winner" }</span>
      <div className="container">
      {row.map(rowNum=>{
        return (<div key={rowNum} className="row" >{col.map(colNum=>{
          return  <Tile key={rowNum+""+colNum} row={rowNum} col={colNum}  addX={props.addX.bind(this)} addO={props.addO.bind(this)} turn={props.turn} val={props.board[rowNum][colNum]}/>
        })} </div>)
      })}
      </div>
    </div>
  )
}
export default Board;
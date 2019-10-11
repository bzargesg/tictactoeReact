import React from 'react';
import Tile from './Tile';
let Board = function (props) {
  console.log(props)
  let row = [0,1,2], col = [0,1,2]
  return (
    <div className="Board">
      Board
      {row.map(rowNum=>{
        return (<div className={rowNum} >{col.map(colNum=>{
          return  <Tile row={rowNum} col={colNum}  addX={props.addX} addO={props.addO} turn={props.turn} value={props.board[rowNum][colNum]}/>
        })} </div>)
      })}
    </div>
  )
}
export default Board;
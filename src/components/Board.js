import React from 'react';
import Tile from './Tile';
let Board = function () {
  let row = [0,1,2], col = [0,1,2]
  return (
    <div className="Board">
      Board
      {row.map(rowNum=>{
        return (<div className={rowNum} >{col.map(colNum=>{
          return  <Tile row={rowNum} col={colNum} />
        })} </div>)
      })}
    </div>
  )
}
export default Board;
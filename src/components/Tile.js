import React from 'react';

let Board = function (props) {
  let addPiece = function (){
    let row = props.row, col = props.col;
    if(props.turn){
      props.addX(row,col);
    }else{
      props.addO(row,col);
    }
  }
  return (
    <span className="Tile" onClick={addPiece}>
      {props.val ? props.val : "__"}
    </span>
  )
}
export default Board;
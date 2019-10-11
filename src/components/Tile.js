import React from 'react';

let Board = function (props) {
  console.log(props)
  return (
    <span className="Tile">
      {props.val ? props.val : "__"}
    </span>
  )
}
export default Board;
  let driver = function(board){
     board = JSON.parse(JSON.stringify(board));
    
    if( checkHorizontals(board)){
      return checkHorizontals(board);
    }
    if( checkVerticals(board)){
      return  checkVerticals(board)
    }
    if( checkMajorDiagonals(board)){
      return  checkMajorDiagonals(board)
    }
    if( checkMinorDiagonals(board)){
      return  checkMinorDiagonals(board)
    }

  }
  let checkHorizontals= function(board){
    let winner =  board.map(element=>{
      return element.reduce((prevVal, currentElement) => {
        return currentElement === prevVal ? currentElement : false;
      })
    })
    for(let i=0;i<winner.length;i++){
      if(winner[i] !== false){
        return winner[i];
      }
    }
    return false;
  }
  let checkVerticals = function(board){
    for(let i = 0; i <  board.length; i++){
      let prev =  board[0][i];
      for(let j = 1; j <  board.length; j++){
        if( board[j][i] !== prev){
          prev = false;
        }
      }
      if(prev){
        return prev;
      }
    }
    return false;
  }
  let checkMajorDiagonals= function(board){
    if( board[0][0] ===  board[1][1] ===  board[2][2]){
      return  board[0][0]
    }
    return false;
  }
  let checkMinorDiagonals= function(board){
    if(board[0][2] ===  board[1][1] ===  board[2][1]){
      return  board[0][0]
    }
    return false;
  }


export default driver;
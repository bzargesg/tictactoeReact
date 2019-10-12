import React from 'react';

import Board from './components/containers/Board.container'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Tic-Tac-Toe
      </header>
      <Board />
    </div>
  );
}

export default App;

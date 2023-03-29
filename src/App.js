// Dependencies
import react, { useState, useEffect } from 'react';
// Components
import  Cell from './components/Cell';
function App() {
  // State
  let [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  let [go, setGo] = useState('circle');
  let [winMessage, setWinMessage] = useState(null);
  // Message to display to user
  const message = `It is now ${go}'s turn`;
  // Check score
  const checkScore = () => {
    // Winning combos
    const winningCombos = [
      [1, 2, 3,], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    // Loop through winningcombos to find match of array in pos in state
    winningCombos.forEach((array) => {
      let circleWins = array.every(cell => cells[cell] === 'circle');
      if(circleWins) {
        setWinMessage('Circle Wins!');
        return;
      }
      let crossWins = array.every((cell) => cells[cell] === 'cross');
      if(crossWins) {
        setWinMessage('Cross Wins!');
        return;
      }
    });
  }
  useEffect(() => {
    console.log('useeffect');
    checkScore();
  }, [cells])
  return (
    <div className="App">
      <header>
        <h2>Tic-Tac Toe</h2>
        <span>Game contains bug: If you click a cell that is already taken an error with occur and you will need to restart the game.</span>
        {/* <button onClick={resetGame} type='button'>Reset</button> */}
      </header>
      <div className='game-container'>
        {cells.map((cell, index) => <Cell key={index} id={index} cell={cell} cells={cells} setCells={setCells} go={go} setGo={setGo} winMessage={winMessage} />)}
      </div>
      <p className='message'>{winMessage || message}</p>
    </div>
  );
}

export default App;
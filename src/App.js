// Dependencies
import react, { useState } from 'react';
// Components
import  Cell from './components/Cell';
function App() {
  // State
  let [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  let [go, setGo] = useState('circle');
  let [winMessage, setWinMessage] = useState(null);
  // Message to display to user
  const message = `It is now ${go}'s turn`;
  // Return if full
  return (
    <div className="App">

      <div className='game-container'>
        {cells.map((cell, index) => <Cell key={index} id={index} cell={cell} cells={cells} setCells={setCells} go={go} setGo={setGo}/>)}
      </div>
      <p className='message'>{message}</p>
    </div>
  );
}

export default App;
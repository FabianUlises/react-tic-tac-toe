// Dependencies
import react, { useState } from 'react';
// Components
import  Cell from './components/Cell';
function App() {
  let [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  return (
    <div className="App">
      <div className='game-container'>
        {cells.map((cell, index) => <Cell key={index} id={index} cell={cell} />)}
      </div>
    </div>
  );
}

export default App;
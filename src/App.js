// Dependencies
import react, { useState } from 'react';
// Components
import  Cell from './components/Cell';
function App() {
  let [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <div className='game-container'>
        <Cell />
      </div>
    </div>
  );
}

export default App;
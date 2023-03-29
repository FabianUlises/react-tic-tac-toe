import react, { useState } from 'react';
function App() {
  let [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <div className='game-container'>

      </div>
    </div>
  );
}

export default App;
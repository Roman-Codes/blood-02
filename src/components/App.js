import React from 'react';
import '../styles/App.css';
import SetupZone from './SetupZone';
import PlayerZone from './PlayerZone';
import TurnDisplay from './TurnDisplay';

function App() {
  return (
    <div className="App">
      <h1>App be here</h1>
      <TurnDisplay />
      <hr/>

        <SetupZone />
      <hr/>

      <PlayerZone />
    </div>
  );
}

export default App;

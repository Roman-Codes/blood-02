import React from 'react';
import '../styles/App.css';
import SetupZone from './SetupZone';
import PlayerZone from './PlayerZone';

function App() {
  return (
    <div className="App">
      <h1>App be here</h1>
      <hr/>

        <SetupZone />
      <hr/>

      <PlayerZone />
    </div>
  );
}

export default App;

import React from 'react';
import { playerScores } from './Players';
import ListOfPlayers from './ListOfPlayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Cricket App</h1>
        <p className="page-subtitle">This HOL demonstrates map, filter, destructuring, spread operator, and merged arrays.</p>
        <div className="grid two-columns">
          <ListOfPlayers players={playerScores} />
          <IndianPlayers />
        </div>
      </section>
    </main>
  );
}

export default App;
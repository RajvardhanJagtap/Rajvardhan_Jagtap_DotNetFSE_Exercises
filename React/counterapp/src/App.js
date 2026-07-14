import React from 'react';
import CountPeople from './CountPeople';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Counter App</h1>
        <p className="page-subtitle">Login and Exit buttons increment different counters.</p>
        <CountPeople />
      </section>
    </main>
  );
}

export default App;
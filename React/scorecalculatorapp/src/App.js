import React from 'react';
import CalculateScore from './CalculateScore';
import './mystyle.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Score Calculator App</h1>
        <p className="page-subtitle">This HOL uses a function component and mystyle.css for styling.</p>
        <CalculateScore />
      </section>
    </main>
  );
}

export default App;
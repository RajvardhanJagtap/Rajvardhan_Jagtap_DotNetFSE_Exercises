import React from 'react';
import OnlineShopping from './OnlineShopping';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Shopping App</h1>
        <p className="page-subtitle">Five items are created in the model and passed through props.</p>
        <OnlineShopping />
      </section>
    </main>
  );
}

export default App;
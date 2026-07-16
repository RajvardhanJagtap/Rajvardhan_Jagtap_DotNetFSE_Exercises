import React from 'react';
import Register from './Register';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Mail Register App</h1>
        <p className="page-subtitle">Controlled components validate name, email, and password in real time.</p>
        <Register />
      </section>
    </main>
  );
}

export default App;
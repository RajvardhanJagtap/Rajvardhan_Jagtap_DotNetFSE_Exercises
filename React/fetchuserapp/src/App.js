import React from 'react';
import Getuser from './Getuser';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Fetch User App</h1>
        <p className="page-subtitle">User details are retrieved in componentDidMount from randomuser.me.</p>
        <Getuser />
      </section>
    </main>
  );
}

export default App;
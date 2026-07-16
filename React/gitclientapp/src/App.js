import React from 'react';
import GitClient from './GitClient';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Git Client App</h1>
        <p className="page-subtitle">Axios fetches repositories from the GitHub API and the test file mocks axios.</p>
        <GitClient />
      </section>
    </main>
  );
}

export default App;
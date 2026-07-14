import React from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Blog App</h1>
        <p className="page-subtitle">Posts are loaded from JSONPlaceholder in componentDidMount.</p>
        <Posts />
      </section>
    </main>
  );
}

export default App;
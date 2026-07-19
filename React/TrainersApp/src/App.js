import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetails from './TrainerDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <section className="app-card">
          <h1 className="page-title">Trainers App</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/trainers">Trainers</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList />} />
            <Route path="/trainer/:id" element={<TrainerDetails />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
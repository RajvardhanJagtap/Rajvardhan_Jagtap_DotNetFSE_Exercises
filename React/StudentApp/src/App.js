import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="app-shell">
        <section className="app-card">
          <h1 className="page-title">Student Management Portal</h1>
          <p className="page-subtitle">All components are rendered from App.js using class components.</p>
          <div className="stack">
            <Home />
            <About />
            <Contact />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
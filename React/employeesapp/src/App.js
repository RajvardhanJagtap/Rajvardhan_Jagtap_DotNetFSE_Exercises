import React from 'react';
import ThemeProvider, { ThemeContext } from './ThemeContext';
import './App.css';

function Dashboard() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const palette = theme === 'light' ? 'light-theme' : 'dark-theme';

        return (
          <section className={`section-card ${palette}`}>
            <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h2>
            <p>Employee dashboard content rendered through the Context API.</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </section>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <main className="app-shell">
        <section className="app-card">
          <h1 className="page-title">Employees App</h1>
          <p className="page-subtitle">Props-based theme handling has been replaced with React Context.</p>
          <Dashboard />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

const cohorts = [
  { name: 'Cohort A', trainer: 'Trainer One', status: 'Ongoing', startDate: '01 Jul 2026' },
  { name: 'Cohort B', trainer: 'Trainer Two', status: 'Completed', startDate: '15 Jun 2026' },
];

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Cohort Tracker</h1>
        <p className="page-subtitle">CSS Modules, inline styles, className, and dynamic styling are all demonstrated here.</p>
        <div className="grid two-columns">
          {cohorts.map((cohort) => (
            <CohortDetails key={cohort.name} cohort={cohort} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
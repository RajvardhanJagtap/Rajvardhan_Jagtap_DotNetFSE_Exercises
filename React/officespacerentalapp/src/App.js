import React from 'react';
import Office from './Office';
import './App.css';

const offices = [
  { name: 'Prime Tower', rent: 85000, address: 'Chennai', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
  { name: 'Metro Hub', rent: 48000, address: 'Bengaluru', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80' },
];

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Office Space Rental App</h1>
        <p className="page-subtitle">JSX renders the office image, name, rent, and address. Rent color changes by value.</p>
        <div className="grid two-columns">
          {offices.map((office) => (
            <Office key={office.name} office={office} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
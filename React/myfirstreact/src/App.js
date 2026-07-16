import React from 'react';
import './App.css';

const concepts = [
  {
    title: 'SPA',
    description: 'A Single Page Application updates the page without full reloads.',
  },
  {
    title: 'MPA',
    description: 'A Multi Page Application loads separate pages from the server.',
  },
  {
    title: 'React',
    description: 'React is a component-based library for building user interfaces.',
  },
  {
    title: 'Virtual DOM',
    description: 'React keeps a lightweight in-memory tree to reduce real DOM work.',
  },
];

function App() {
  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Welcome to the first session of React</h1>
        <p className="page-subtitle">The first HOL introduces the basic React ideas and structure.</p>

        {/* Important React concepts required by the exercise. */}
        <div className="grid two-columns">
          {concepts.map((concept) => (
            <article key={concept.title} className="detail-card">
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
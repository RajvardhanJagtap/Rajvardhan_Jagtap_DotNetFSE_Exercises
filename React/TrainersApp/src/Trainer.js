import React from 'react';
import { Link } from 'react-router-dom';

function Trainer({ trainer }) {
  return (
    <article className="trainer-card">
      <h3>{trainer.name}</h3>
      <p>{trainer.domain}</p>
      <p>{trainer.location}</p>
      <Link to={`/trainer/${trainer.id}`}>View Details</Link>
    </article>
  );
}

export default Trainer;
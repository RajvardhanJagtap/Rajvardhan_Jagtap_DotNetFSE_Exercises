import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find((item) => String(item.id) === id);

  if (!trainer) {
    return <p>Trainer not found.</p>;
  }

  return (
    <section className="section-card">
      <h2>Trainer Details</h2>
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Domain:</strong> {trainer.domain}</p>
      <p><strong>Experience:</strong> {trainer.experience} years</p>
      <p><strong>Location:</strong> {trainer.location}</p>
      <Link to="/trainers">Back to list</Link>
    </section>
  );
}

export default TrainerDetails;
import React from 'react';
import trainers from './TrainersMock';
import Trainer from './Trainer';

function TrainersList() {
  return (
    <section className="trainer-grid">
      {trainers.map((trainer) => (
        <Trainer key={trainer.id} trainer={trainer} />
      ))}
    </section>
  );
}

export default TrainersList;
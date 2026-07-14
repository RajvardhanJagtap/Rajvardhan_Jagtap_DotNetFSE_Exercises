import React from 'react';

function ListOfPlayers({ players }) {
  const lowScores = players.filter((player) => player.score < 70);

  return (
    <section className="section-card">
      <h2>Players with score below 70</h2>
      <ul>
        {lowScores.map(({ name, score }) => (
          <li key={name}>{name} - {score}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListOfPlayers;
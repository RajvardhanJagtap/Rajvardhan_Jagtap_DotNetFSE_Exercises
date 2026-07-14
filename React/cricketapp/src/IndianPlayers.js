import React from 'react';
import { teamA, teamB } from './Players';

function IndianPlayers() {
  const mergedPlayers = [...teamA, ...teamB];
  const [firstPlayer, secondPlayer, ...rest] = mergedPlayers;

  return (
    <section className="section-card">
      <h2>Indian Players</h2>
      <p><strong>First:</strong> {firstPlayer}</p>
      <p><strong>Second:</strong> {secondPlayer}</p>
      <p><strong>Rest:</strong> {rest.join(', ')}</p>
      <ul>
        {mergedPlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </section>
  );
}

export default IndianPlayers;
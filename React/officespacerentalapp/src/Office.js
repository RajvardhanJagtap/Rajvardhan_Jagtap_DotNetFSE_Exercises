import React from 'react';

function Office({ office }) {
  const rentStyle = {
    color: office.rent > 60000 ? 'green' : 'red',
    fontWeight: 700,
  };

  return (
    <article className="office-card">
      <img src={office.image} alt={office.name} />
      <h3>{office.name}</h3>
      <p style={rentStyle}>Rent: {office.rent}</p>
      <p>{office.address}</p>
    </article>
  );
}

export default Office;
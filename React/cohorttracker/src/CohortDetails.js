import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const statusClass = cohort.status === 'Ongoing' ? styles.ongoing : styles.completed;
  const cardStyle = {
    borderColor: cohort.status === 'Ongoing' ? '#22c55e' : '#3b82f6',
  };

  return (
    <article className={styles.card} style={cardStyle}>
      <h3>{cohort.name}</h3>
      <p className={`${styles.status} ${statusClass}`}>{cohort.status}</p>
      <p>{cohort.trainer}</p>
      <p>{cohort.startDate}</p>
    </article>
  );
}

export default CohortDetails;
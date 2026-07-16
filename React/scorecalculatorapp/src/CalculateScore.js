import React, { useMemo, useState } from 'react';

// Function component required by the exercise.
function CalculateScore() {
  const [form, setForm] = useState({ name: '', school: '', totalMarks: '' });

  const averageScore = useMemo(() => {
    const total = Number(form.totalMarks);
    if (!total || Number.isNaN(total)) {
      return 0;
    }
    return (total / 6).toFixed(2);
  }, [form.totalMarks]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="score-card">
      <h2>Calculate Score</h2>
      <div className="score-grid">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Enter student name" />
        </label>
        <label>
          School
          <input name="school" value={form.school} onChange={handleChange} placeholder="Enter school name" />
        </label>
        <label>
          Total Marks
          <input name="totalMarks" type="number" value={form.totalMarks} onChange={handleChange} placeholder="Enter total marks" />
        </label>
      </div>

      {/* Display the calculated average score and the entered details. */}
      <div className="result-card">
        <p><strong>Name:</strong> {form.name || 'N/A'}</p>
        <p><strong>School:</strong> {form.school || 'N/A'}</p>
        <p><strong>Total Marks:</strong> {form.totalMarks || '0'}</p>
        <p><strong>Average Score:</strong> {averageScore}</p>
      </div>
    </section>
  );
}

export default CalculateScore;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ employeeName: '', complaint: '' });
  const [reference, setReference] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const refNumber = `CMP-${Math.floor(100000 + Math.random() * 900000)}`;
    setReference(refNumber);
    window.alert(`Complaint registered successfully. Reference: ${refNumber}`);
  };

  return (
    <main className="app-shell">
      <section className="app-card">
        <h1 className="page-title">Ticket Raising App</h1>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Employee Name
            <input name="employeeName" value={form.employeeName} onChange={handleChange} required />
          </label>
          <label>
            Complaint
            <textarea name="complaint" value={form.complaint} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
        {reference && <p className="reference">Complaint Reference Number: {reference}</p>}
      </section>
    </main>
  );
}

export default App;
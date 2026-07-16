import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (nextForm) => {
    const nextErrors = {};

    if (nextForm.name.length < 5) {
      nextErrors.name = 'Name must be at least 5 characters.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextForm.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (nextForm.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(nextErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    validate(nextForm);
  };

  return (
    <section className="form-card">
      <h2>Register</h2>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Password
        <input name="password" type="password" value={form.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
    </section>
  );
}

export default Register;
import React, { useState } from 'react';
import './signup.css';

function Signup() {
  // Initialize form state (empty values for simplicity)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    title: '',
    birthdate: '',
    gender: '',
    profile_picture: '',
    country: '',
    role: '',
    status: '',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      // Prepare form data, assuming the profile picture is not required
      const formData = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
        title: form.title,
        gender: form.gender,
        birthdate: form.birthdate,
        country_name: form.country, // Map the form field to the country name used by your server
        role: form.role,
        status: form.status,
      };

      // Make the API request
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || 'Registration successful!');
        // Optionally redirect the user or clear the form
      } else {
        setError(result.message || 'Registration failed.');
      }
    } catch (err) {
      setError('Server error occurred.');
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <select name="title" value={form.title} onChange={handleChange} required>
            <option value="" disabled>Select Title</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
          <input
            type="date"
            name="birthdate"
            value={form.birthdate}
            onChange={handleChange}
            required
          />
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
          <input
            type="file"
            name="profile_picture"
            onChange={handleChange}
          />
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            {/* Add more options here as required */}
          </select>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            required
          />
          <select name="status" value={form.status} onChange={handleChange} required>
            <option value="" disabled>Select Status</option>
            <option value="unblocked">Unblocked</option>
            <option value="blocked">Blocked</option>
          </select>
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}
        <p className="login-message">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

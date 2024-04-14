import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatedEmail(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email' });
      return;
    }
    
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  const validatedEmail = (email) => {
    const emailCharacters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailCharacters.test(email);
  };

  const requiredField = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    }
  };

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={requiredField}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={requiredField}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            onBlur={requiredField}
          />
          {errors.question && <span className="error">{errors.question}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;
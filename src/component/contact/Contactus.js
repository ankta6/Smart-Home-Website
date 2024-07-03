// src/ContactForm.js
import React, { useState } from 'react';
import './Contactus.css';
import heroImage from './image/contact.jpg'; // Replace with the path to your hero image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="hero-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <h1 className="hero-title">Contact Us</h1>
      </div>
      <div className="contact-form-container">
        <h2 className="get-in-touch">Get In Touch</h2>
        <p className="subtext">FOR BULK ORDERS OR FRANCHISE</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Your name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone No.
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your message (optional)
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-us-container">
        <h1 className="section-title">Let's Connect</h1>
        <p className="company-description">
          Reach out to our team for expert advice and support on integrating
          smart home solutions tailored to your needs.
        </p>
        <div className="address-container">
          <div className="address">
            <h2>Headquarter</h2>
            <p>
              123 Smart Avenue, Tech City, Smartland, Smartville, SM1 RT3,
              United States
            </p>
            <p>
              <strong>Contact</strong> – +1 (555) 123-4567
            </p>
            <p>
              <strong>Email</strong> – info@smarthomecompany.com
            </p>
          </div>
          <div className="address">
            <h2>Registered Address</h2>
            <p>
              123 Smart Avenue, Tech City, Smartland, Smartville, SM1 RT3,
              United States
            </p>
            <p>
              <strong>For Sales Enquiry</strong> – +1 (555) 123-4567
            </p>
            <p>
              <strong>E-Mail ID</strong> – info@smarthomecompany.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

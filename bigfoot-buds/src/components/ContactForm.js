import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./style.css";


const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    subject: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      const formattedMessage = `
        Location: ${formData.location}
        Subject: ${formData.subject}
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email Address: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Message: ${formData.message}
      `;

      emailjs.send('service_z050ph1', 'template_rj26q2u', {
        to_email: 'jimmyjiang70@gmail.com',
        message: formattedMessage,
      }, 'KNa8m87MKK_f7Ypha')
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch(() => {
        alert('Failed to send message.');
      });
    }
    setValidated(true);
  };

  return (
    <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>


      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid location.</div>
        </div>


        <div className="col-md-4 mb-3">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please select a subject.</div>
        </div>
      </div>

      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />


          <div className="invalid-feedback">Please provide your first name.</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          
          <div className="invalid-feedback">Please provide your last name.</div>
        </div>
      </div>

      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid email address.</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="col-md-12 mb-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="invalid-feedback">Please enter a message.</div>
        </div>
      </div>

      <button className="btn btn-primary" type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us for any queries or feedback.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> Lakshmi Complex, 2/18, Dharapuram Road, Thillai Nagar, Velliangadu, Tiruppur, Tamil Nadu 641604</p>
          <p><strong>Hours:</strong> Open ⋅ Closes 10:30 PM</p>
          <p><strong>Phone:</strong> <a href="tel:+918940818111">089408 18111</a></p>
          <div className="contact-map">
            <iframe
              title="Sri Mobiles Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.906345799799!2d76.94432231435245!3d11.110511692116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac1c0d7587d17%3A0xf0c3a7b7e78b34ed!2sLakshmi%20Complex%2C%20Dharapuram%20Road!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

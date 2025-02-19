import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      setStatus(response.data.message);
      setFormData({ firstName: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-us-container6">
      <div className="left-container6">
        <h3 className="section-heading6">Send Us A Message</h3>
        <p className="section-description6">
          Have questions, feedback, or need assistance? Our team is here to help. Fill out the form below, and we’ll get back to you as soon as possible!
        </p>
        <form className="contact-form6" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name*" required value={formData.firstName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="text" name="phone" placeholder="Phone*" required value={formData.phone} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Subject*" required value={formData.subject} onChange={handleChange} />
          </div>
          <div className="form-row">
            <textarea name="message" placeholder="Your Message*" rows="4" required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-button">Submit Now</button>
          <p className="status-message">{status}</p>
        </form>
      </div>

      <div className="right-container6">
        <div className="info-item6">
          <FaPhone className="info-icon6" />
          <div className="info-text6">
            <h4>Call</h4>
            <p>+123 456 7890</p>
          </div>
        </div>

        <div className="info-item6">
          <FaEnvelope className="info-icon6" />
          <div className="info-text6">
            <h4>Email</h4>
            <p>info@paycoincrypto.com</p>
          </div>
        </div>

        <div className="info-item6">
          <FaClock className="info-icon6" />
          <div className="info-text6">
            <h4>Schedule Time</h4>
            <p>24/7 Anytime All Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

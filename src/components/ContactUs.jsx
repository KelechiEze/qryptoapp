import React from "react";
import "./ContactUs.css"; // Import the CSS file
import callIcon from "../assets/call-icon.png"; // Update with the actual path
import emailIcon from "../assets/email-icon.png"; // Update with the actual path
import scheduleIcon from "../assets/schedule-icon.png"; // Update with the actual path

const ContactUs = () => {
  return (
    <div className="contact-us-container6">
      <div className="left-container6">
        <h3 className="section-heading6">Send Us A Message</h3>
        <p className="section-description6">
        Have questions, feedback, or need assistance? Our team is here to help. Fill out the form below, and we’ll get back to you as soon as possible!
        </p>
        <form className="contact-form6">
          <div className="form-row">
            <input type="text" placeholder="First Name*" required />
            <input type="email" placeholder="Email*" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone*" required />
            <input type="text" placeholder="Subject*" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Your Message*" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit Now
          </button>
        </form>
      </div>

      <div className="right-container6">
        <div className="info-item6">
          <div className="icon-container6">
            <img src={callIcon} alt="Call Icon" className="info-icon6" />
          </div>
          <div className="info-text6">
            <h4>Call</h4>
            <p>+123 456 7890</p>
          </div>
        </div>

        <div className="info-item6">
          <div className="icon-container6">
            <img src={emailIcon} alt="Email Icon" className="info-icon6" />
          </div>
          <div className="info-text6">
            <h4>Email</h4>
            <p>info@paycoincrypto.com</p>
          </div>
        </div>

        <div className="info-item6">
          <div className="icon-container6">
            <img src={scheduleIcon} alt="Schedule Icon" className="info-icon6" />
          </div>
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

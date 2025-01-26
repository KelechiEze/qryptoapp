import React from "react";
import "./WhyChooseSection.css";
import feedbackImage from "../assets/feedback.png"; // Replace with your image path
import profileCardImage from "../assets/profile-card.png"; // Replace with your image path
import { FaLock } from "react-icons/fa"; // Import icons from react-icons

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      {/* Left Container */}
      <div className="left-container">
        <div className="image-wrapper">
          <img src={feedbackImage} alt="Feedback" className="feedback-image" />
          <img src={profileCardImage} alt="Profile Card" className="profile-card-image" />
        </div>
      </div>

      {/* Right Container */}
      <div className="right-container1">
        <span className="highlight">Why Choose PayCoin</span>
        <h2 className="my-section">
          Where Innovation Meets <span className="gradient-text">Cryptocurrency Trading</span>
        </h2>
        <p className="paragraph">
          At PayCoin, we pride ourselves on offering a user-friendly platform that caters to both novice traders & seasoned PayCoin investors.
        </p>

        {/* Cards Container */}
        <div className="cards-container">
  {/* Card 1 */}
  <div className="card">
    <div className="card-content">
      {/* Icon */}
      <div className="card-icon">
        <FaLock />
      </div>

      {/* Text Content */}
      <div className="card-text-wrapper">
        <h5 className="card-title">Enhanced Security</h5>
        <p className="card-text">
          We use top-notch security measures to protect your investments.
        </p>
      </div>
    </div>
  </div>
  </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

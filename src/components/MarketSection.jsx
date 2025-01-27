import React from "react";
import "./AboutSection.css"; // Import the CSS file

// Import images
import coinsImage from "../assets/herocoin.png"; // Update the path to match your folder structure
import phonesImage from "../assets/boutland1.png"; // Update the path to match your folder structure

const MarketSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left Container */}
        <div className="left3">
          <h1 className="about-title">Market Update</h1>
          <p className="about-description">
          Ride the crypto wave! Get electrifying market updates, spot trends, and unlock opportunities before they take off!
          </p>
          <form className="cta-form">
            <input
              type="email"
              placeholder="Email Address"
              className="email-input"
            />
            <button className="cta-button" type="submit">
              Get Started ↗
            </button>
          </form>
        </div>

        {/* Right Container */}
        <div className="right3">
          {/* Coins Image */}
          <div className="coin-image">
            <img
              src={coinsImage}
              alt="Floating Coins"
              className="coins"
            />
          </div>
          {/* Phone Mockups */}
          <div className="phone-mockup">
            <img
              src={phonesImage}
              alt="Phone Mockups"
              className="phones"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

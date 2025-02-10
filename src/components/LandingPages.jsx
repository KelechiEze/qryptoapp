import React from "react";
import "./LandingPages.css";
// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBriefcase,
  faChartBar,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

const LandingPages = () => {
  

  return (
    <div className="landing-page-container">
      {/* Left Container */}
      <div className="left-container1">
        <h1 className="landing-title">Create Your Wallet Today!</h1>
        <p className="landing-text">
        Empower your future with blockchain. Secure, transparent, and limitless—invest in crypto today and be part of the revolution shaping tomorrow
        </p>
      </div>

      {/* Right Container */}
      <div className="right-container">
        <div className="feature-card1">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <p>Instant Purchases</p>
        </div>
        <div className="feature-card1">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <p>Top-Notch Management</p>
        </div>
        <div className="feature-card1">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <p>Detailed Statistics</p>
        </div>
        <div className="feature-card1">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faPlug} />
          </div>
          <p>Fast Connections</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPages;

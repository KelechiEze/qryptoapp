import React from "react";
import "./InvestmentPlans.css";
import { FaRuler, FaChartLine, FaUniversity } from "react-icons/fa"; // Importing React Icons

const InvestmentPlans = () => {
  return (
    <section className="investment-section">
      <h2 className="investment-title">Choose Your Investment Tier</h2>
      <p className="investment-subtitle">
        Select from a range of plans designed to suit various investment needs and goals.
      </p>

      <div className="plans-container">
        {/* Starter Plan */}
        <div className="plan-card">
          <div className="plan-icon">
            <FaRuler className="icon" />
          </div>
          <h3 className="plan-title">Starter Plan</h3>
          <p className="plan-price">$500.00</p>
          <ul className="plan-features">
            <li>Ideal for beginners</li>
            <li>Access to educational resources</li>
            <li>Basic market analysis tools</li>
            <li>Email support</li>
          </ul>
          <a href="https://dashboardkrypt.netlify.app/" target="_blank" rel="noopener noreferrer" className="plan-button">
            SELECT
          </a>
        </div>

        {/* Growth Plan (Recommended) */}
        <div className="plan-card recommended">
          <div className="recommended-tag">Recommended</div>
          <div className="plan-icon">
            <FaChartLine className="icon" />
          </div>
          <h3 className="plan-title">Growth Plan</h3>
          <p className="plan-price">$1,000.00</p>
          <ul className="plan-features">
            <li>For the aspiring investor</li>
            <li>Advanced market analysis tools</li>
            <li>Portfolio management assistance</li>
            <li>Priority email support</li>
          </ul>
          <a href="https://dashboardkrypt.netlify.app/" target="_blank" rel="noopener noreferrer" className="plan-button">
            SELECT
          </a>
        </div>

        {/* Premium Plan */}
        <div className="plan-card">
          <div className="plan-icon">
            <FaUniversity className="icon" />
          </div>
          <h3 className="plan-title">Premium Plan</h3>
          <p className="plan-price">$5,000.00</p>
          <ul className="plan-features">
            <li>For serious investors</li>
            <li>Comprehensive market insights</li>
            <li>Dedicated account manager</li>
            <li>24/7 priority support</li>
          </ul>
          <a href="https://dashboardkrypt.netlify.app/" target="_blank" rel="noopener noreferrer" className="plan-button">
            SELECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;

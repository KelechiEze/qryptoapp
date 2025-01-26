import React from "react";
import "./Footer.css";
import logoImage from "../assets/logo2.png"; // Update the path based on your folder structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="paycoin-box">
             <img src={logoImage} alt="Smart Mine Logo" className="logo-image" />
            <p className="paycoin-text">
              Join Our Blockchain PayCoin Community
            </p>
            <button className="join-btn">
              Join Now <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            <li>Tokens Sale</li>
            <li>Ecosystem</li>
            <li>Wallets Sale</li>
            <li>Gravity Dex</li>
            <li>Whitepaper</li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Solution</h4>
          <ul className="footer-links">
            <li>Token Suite</li>
            <li>Work Process</li>
            <li>Wallets Sale</li>
            <li>Tokenisation</li>
            <li>Portal Token</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>Our Features</li>
            <li>Why Blockchain</li>
            <li>Our Blog</li>
            <li>Introduction</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Need Help?</h4>
          <ul className="footer-links">
            <li>+1 (123) 456 7890</li>
            <li>paycoindemo@.com</li>
            <li>paycoinwebsite.com</li>
          </ul>
          <div className="social-icons">
            <span className="icon">F</span>
            <span className="icon">G+</span>
            <span className="icon">In</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

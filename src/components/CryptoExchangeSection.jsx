import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./CryptoExchangeSection.css";
import dogeImage from "../assets/shiba.png";
import bitcoinImage from "../assets/btc.png";
import binanceImage from "../assets/tron.png";
import avatarImage from "../assets/lite.png";

const CryptoExchangeSection = () => {
  return (
    <section className="crypto-exchange-section1 position-relative">
      {/* Floating Icons */}
      <img src={dogeImage} alt="Doge" className="floating-icon icon-doge position-absolute" />
      <img src={bitcoinImage} alt="Bitcoin" className="floating-icon icon-bitcoin position-absolute" />
      <img src={binanceImage} alt="Binance" className="floating-icon icon-binance position-absolute" />
      <img src={avatarImage} alt="Avatar" className="floating-icon icon-avatar position-absolute" />

      {/* Section Content */}
      <div className="container text-center">
        <span className="highlight9 d-inline-block">Fact PayCoin Crypto Investment</span>
        <h3 className="section-title1">Invest Crypto Securely</h3>
        
        <div className="stats-container2 d-flex flex-wrap justify-content-center align-items-center mx-auto p-4">
          <div className="stat2 text-center px-3">
            <p className="stat-title3">Bitcoin</p>
            <h3 className="stat-value2">5M+</h3>
          </div>
          <div className="divider2 mx-3"></div>
          <div className="stat2 text-center px-3">
            <p className="stat-title3">Digital Assets</p>
            <h3 className="stat-value2">2M+</h3>
          </div>
          <div className="divider2 mx-3"></div>
          <div className="stat2 text-center px-3">
            <p className="stat-title3">Happy Users</p>
            <h3 className="stat-value2">450+</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoExchangeSection;

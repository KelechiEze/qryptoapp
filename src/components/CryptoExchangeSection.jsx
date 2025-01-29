import React from "react";
import "./CryptoExchangeSection.css";
import dogeImage from "../assets/shiba.png";
import bitcoinImage from "../assets/btc.png";
import binanceImage from "../assets/tron.png";
import avatarImage from "../assets/lite.png";

const CryptoExchangeSection = () => {
  return (
    <section className="crypto-exchange-section1">
      {/* Floating Images */}
      <img src={dogeImage} alt="Doge" className="floating-icon icon-doge" />
      <img src={bitcoinImage} alt="Bitcoin" className="floating-icon icon-bitcoin" />
      <img src={binanceImage} alt="Binance" className="floating-icon icon-binance" />
      <img src={avatarImage} alt="Avatar" className="floating-icon icon-avatar" />

      {/* Section Content */}
      <div className="content-wrapper">
        <span className="highlight9">Fact PayCoin Crypto Investment</span>
        <h3 className="section-title1">Invest Crypto Securely</h3>
        <div className="stats-container2">
          <div className="stat2">
            <p className="stat-title3">Bitcoin</p>
            <h3 className="stat-value2">5M+</h3>
          </div>
          <div className="divider2"></div>
          <div className="stat">
            <p className="stat-title3">Digital Assets</p>
            <h3 className="stat-value2">2M+</h3>
          </div>
          <div className="divider2"></div>
          <div className="stat">
            <p className="stat-title3">Happy Users</p>
            <h3 className="stat-value2">450+</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoExchangeSection;

import React from "react";
import "./MarketExchange.css";
import balanceIcon from "../assets/balance-icon.png";
import bitcoinIcon from "../assets/bitcoin-icon.png";
import ethereumIcon from "../assets/ethereum-icon.png";
import solanaIcon from "../assets/solana-icon.png";
import chartOrange from "../assets/chart-orange.png";
import chartPurple from "../assets/chart-purple.png";
import chartRed from "../assets/chart-red.png";

const MarketExchange = () => {
  return (
    <section className="market-section">
      <div className="market-header">
        <span className="update-badge">Today Market Update</span>
        <h2 className="section-title">Today's Cryptocurrency Prices</h2>
      </div>
      <div className="market-cards">
        {/* Card 1: Estimated Balance */}
        <div className="market-card">
          <div className="market-info">
            <img src={balanceIcon} alt="Estimated Balance Icon" className="market-icon" />
            <div className="market-text">
              <h3 className="market-title">Estimated Balance</h3>
            </div>
          </div>
          <div className="market-details">
            <p className="market-price">$123,987</p>
            <div className="market-stats">
              <span className="profit-positive">+$2560.78</span>
              <span className="percentage-positive">+14.67%</span>
            </div>
          </div>
        </div>

        {/* Card 2: BTCUSDT */}
        <div className="market-card">
          <div className="market-info">
            <img src={bitcoinIcon} alt="Bitcoin Icon" className="market-icon" />
            <div className="market-text">
              <h3 className="market-title">BTCUSDT</h3>
              <p className="market-subtitle">Bitcoin</p>
            </div>
            <img src={chartOrange} alt="Chart Orange" className="chart-icon-inline" />
          </div>
          <div className="market-details">
            <p className="market-price">$105,169</p>
            <div className="market-stats">
              <span className="profit-negative">-$16.78</span>
              <span className="percentage-positive">+14.67%</span>
            </div>
          </div>
        </div>

        {/* Card 3: ETHUSDT */}
        <div className="market-card">
          <div className="market-info">
            <img src={ethereumIcon} alt="Ethereum Icon" className="market-icon" />
            <div className="market-text">
              <h3 className="market-title">ETHUSDT</h3>
              <p className="market-subtitle">Ethereum</p>
            </div>
            <img src={chartPurple} alt="Chart Purple" className="chart-icon-inline" />
          </div>
          <div className="market-details">
            <p className="market-price">$3,186</p>
            <div className="market-stats">
              <span className="profit-positive">+$189.91</span>
              <span className="percentage-positive">+14.67%</span>
            </div>
          </div>
        </div>

        {/* Card 4: SOLUSDT */}
        <div className="market-card">
          <div className="market-info">
            <img src={solanaIcon} alt="Solana Icon" className="market-icon" />
            <div className="market-text">
              <h3 className="market-title">SOLUSDT</h3>
              <p className="market-subtitle">Solana</p>
            </div>
            <img src={chartRed} alt="Chart Red" className="chart-icon-inline" />
          </div>
          <div className="market-details">
            <p className="market-price">$234.38</p>
            <div className="market-stats">
              <span className="profit-positive">+$556.14</span>
              <span className="percentage-positive">+14.67%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketExchange;

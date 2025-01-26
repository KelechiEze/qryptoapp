import React from "react";
import { Line } from "react-chartjs-2";
import "./MarketTable.css";

// Importing assets
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import binance from "../assets/binance.png";
import tether from "../assets/trine.png";
import solana from "../assets/solana.png";
import usdcoin from "../assets/usd.png";

// Importing React Icons
import { AiOutlineStar } from "react-icons/ai";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const MarketTable = () => {
  const data = [
    { name: "BitCoin (BTC)", price: "$56,623.54", change: "+0.07%", icon: bitcoin },
    { name: "Ethereum (ETH)", price: "$56,000.54", change: "+0.37%", icon: ethereum },
    { name: "Binance (BNB)", price: "$56,123.54", change: "+0.17%", icon: binance },
    { name: "Tether (USDT)", price: "$56,343.54", change: "+0.27%", icon: tether },
    { name: "Solana (SOL)", price: "$200.04", change: "-0.44%%", icon: solana },
    { name: "USD Coin (USDC)", price: "$181.00", change: "-0.03%", icon: usdcoin },
  ];

  // Chart data for each cryptocurrency
  const generateChartData = () => ({
    labels: ["1h", "2h", "3h", "4h", "5h", "6h"], // Time labels
    datasets: [
      {
        data: Array.from({ length: 6 }, () => Math.random() * 100), // Mock data
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false }, // Hide X-axis
      y: { display: false }, // Hide Y-axis
    },
    elements: {
      line: { tension: 0.4 }, // Add a curve
    },
  };

  return (
    <section className="market-section">
      <div className="market-header">
        <span className="update-badge">BITCOIN MARKET UPDATE</span>
        <h2 className="section-title">Cryptocurrency Market Update</h2>
      </div>
      <div className="market-table">
        <div className="table-header">
          <div>NAME/PAIR</div>
          <div>LAST PRICE</div>
          <div>24 CHANGE</div>
          <div>CHART</div>
          <div>TRADE</div>
        </div>
        {data.map((row, index) => (
          <div className="table-row" key={index}>
            <div className="name-pair">
              <AiOutlineStar className="star-icon" />
              <img src={row.icon} alt={row.name} className="crypto-icon" />
              <span className="crypto-name">{row.name}</span>
            </div>
            <div className="price">{row.price}</div>
            <div className={`change ${row.change.startsWith("+") ? "positive" : "negative"}`}>
              {row.change}
            </div>
            <div className="chart">
              <div className="chart-container">
                <Line data={generateChartData()} options={chartOptions} />
              </div>
            </div>
            <button className="trade-btn">Trade</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketTable;

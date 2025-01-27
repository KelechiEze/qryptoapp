// AboutPage.jsx
import React from "react";
import MarketSection from "./MarketSection";
import MarketExchange from "./MarketExchange";
import MarketTable from "./MarketTable";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

const MarketPage = () => {
  return (
    <div className="about-page">
      <MarketSection />
      <MarketExchange />
      <MarketTable />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default MarketPage;

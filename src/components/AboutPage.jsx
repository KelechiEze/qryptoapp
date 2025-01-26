// AboutPage.jsx
import React from "react";
import AboutSection from "./AboutSection";
import WhyChooseSection from "./WhyChooseSection";
import CryptoExchangeSection from "./CryptoExchangeSection";
import TeamSection from "./TeamSection";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutSection />
      <CryptoExchangeSection />
      <WhyChooseSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default AboutPage;

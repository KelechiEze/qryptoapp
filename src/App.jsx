import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LandingPages from "./components/LandingPages";
import WhyChooseSection from "./components/WhyChooseSection";
import InvestmentPlans from "./components/InvestmentPlans";
import CryptoExchangeSection from "./components/CryptoExchangeSection";
import MarketTable from "./components/MarketTable";
import Testimonial from "./components/Testimonial";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import MarketPage from "./components/MarketPage";
import ContactUsPage from "./components/ContactUsPage";
import BlogPage from "./components/BlogPage";

const App = () => {
  const location = useLocation();

  // Hide the Header for Register, Login, and Dashboard pages
  const shouldShowHeader = !["/register", "/login", "/dashboard"].includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={
          <>
            <LandingPages />
            <WhyChooseSection />
            <InvestmentPlans />
            <CryptoExchangeSection />
            <MarketTable />
            <Testimonial />
            <BlogSection />
            <Footer />
          </>
        } />
        {/* Other Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

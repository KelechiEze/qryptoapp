import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import WhyChooseSection from "./components/WhyChooseSection";
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
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main page showing all sections */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <WhyChooseSection />
              <CryptoExchangeSection />
              <MarketTable />
              <Testimonial />
              <BlogSection />
              <Footer />
            </>
          }
        />
        {/* About page */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;

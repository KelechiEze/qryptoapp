import React, { useState } from "react";
import "./Testimonial.css";

// Importing assets
import avatar1 from "../assets/avatar1.png"; 
import avatar2 from "../assets/avatar2.png"; 
import avatar3 from "../assets/avatar3.png"; 
import mapImage from "../assets/fd1.png"; 
import location1 from "../assets/avatar1.png"; 
import location2 from "../assets/avatar2.png"; 
import location3 from "../assets/avatar3.png"; 

// Sample data for testimonials
const testimonials = [
  {
    text: "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none compare to PayCoin. They are the best platform.",
    name: "Marvin McKinney",
    role: "CEO of Startup",
    avatar: avatar1,
  },
  {
    text: "PayCoin has completely transformed the way I trade. The platform is intuitive and reliable, making it the best option for cryptocurrency traders.",
    name: "Jane Doe",
    role: "Investor",
    avatar: avatar2,
  },
  {
    text: "PayCoin has completely transformed my financial life. The platform is fast and reliable, making it the best option for cryptocurrency investors.",
    name: "Mike Jones",
    role: "Investor",
    avatar: avatar3,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(""); // "next" or "prev"

  const handleNext = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <span className="badge">TESTIMONIALS</span>
        <h2 className="section-title">Feedback from Our Investors</h2>
        <div className={`testimonial-content slide-${direction}`}>
          <div className="quote-icon">“</div>
          <p className="testimonial-text">{testimonials[current].text}</p>
          <div className="testimonial-author">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="author-avatar"
            />
            <div>
              <h4 className="author-name">{testimonials[current].name}</h4>
              <p className="author-role">{testimonials[current].role}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-navigation">
          <button className="nav-button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="nav-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <div className="testimonial-right">
        <div className="map-container">
          <img src={mapImage} alt="Map" className="map" />
          <div className="icon" style={{ top: "20%", left: "30%" }}>
            <img src={location1} alt="Location 1" />
          </div>
          <div className="icon" style={{ top: "50%", left: "50%" }}>
            <img src={location2} alt="Location 2" />
          </div>
          <div className="icon" style={{ top: "70%", left: "20%" }}>
            <img src={location3} alt="Location 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

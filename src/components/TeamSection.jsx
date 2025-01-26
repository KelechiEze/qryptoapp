import React from "react";
import "./TeamSection.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Import team images
import kaneImage from "../assets/kane.png";
import alesayImage from "../assets/alesay.png";
import rosieImage from "../assets/rosie.png";
import jonathanImage from "../assets/jonathan.png";

const teamMembers = [
  {
    name: "Kane Williamson",
    title: "Founder & CEO",
    image: kaneImage,
  },
  {
    name: "Alesay Healy",
    title: "Blockchain Architect",
    image: alesayImage,
  },
  {
    name: "Rosie Rempel",
    title: "Marketing Manager",
    image: rosieImage,
  },
  {
    name: "Jonathan Weber",
    title: "ICO Engineer",
    image: jonathanImage,
  },
];

const TeamSection = () => {
    return (
      <section className="team-section">
        <div className="team-header">
          <span className="team-tag">OUR TEAM</span>
          <h2 className="team-title1">Our Dedicated Team</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <div className="social-icons">
                <div className="social-icon slide-left">
                  <FaFacebookF />
                </div>
                <div className="social-icon slide-right">
                  <FaTwitter />
                </div>
                <div className="social-icon slide-left">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TeamSection;
  
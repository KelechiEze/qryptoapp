import React from "react";
import "./BlogSection.css"; // Add appropriate styling for the blog section

// Importing assets
import blogImg1 from "../assets/blog1.png"; // Replace with actual image paths
import blogImg2 from "../assets/blog2.png";
import blogImg3 from "../assets/blog3.png";

// Importing React Icons
import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blogImg1,
      title: "The Power Of Diversification In Cryptocurrency On Investment",
      description: "In today’s dynamic financial landscape, cryptocurrency trading has emerged as.",
      author: "Alex Robertson",
      date: "7/31/2023",
    },
    {
      id: 2,
      image: blogImg2,
      title: "The Best Ultimate Crypto Trading Handbook Strategies, Tips More",
      description: "In today’s dynamic financial landscape, cryptocurrency trading has emerged as.",
      author: "Alex Robertson",
      date: "7/31/2023",
    },
    {
      id: 3,
      image: blogImg3,
      title: "The Benefits Of Diversification In Cryptocurrency Investment",
      description: "In today’s dynamic financial landscape, cryptocurrency trading has emerged as.",
      author: "Alex Robertson",
      date: "7/31/2023",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <span className="blog-badge">OUR BLOG</span>
        <h2 className="blog-title1">Latest Blog & News</h2>
      </div>
      <div className="blog-cards-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="meta-item">
                  <FaUser className="meta-icon" /> {blog.author}
                </span>
                <span className="meta-item">
                  <FaRegCalendarAlt className="meta-icon" /> {blog.date}
                </span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <a href="#readmore" className="read-more">
                Read More <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

import React from "react";
import "./BlogPage.css";
import img1 from "../assets/img1.png"; // Example image imports
import img2 from "../assets/img2.png";
import img3 from "../assets/img1.png";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="coming-soon-container">
        <h1 className="coming-soon-title">PAGE COMING SOON</h1>
        <p className="coming-soon-description">
          We're working hard to bring you something amazing! Stay tuned.
        </p>
      </div>

      {/* Floating Images */}
      <img src={img1} alt="Floating Icon 1" className="floating-img img1" />
      <img src={img2} alt="Floating Icon 2" className="floating-img img2" />
      <img src={img3} alt="Floating Icon 3" className="floating-img img3" />
    </div>
  );
};

export default BlogPage;

import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero">
        <h1>About Online Auction Platform</h1>
        <p>Experience seamless bidding with our secure and user-friendly auction platform.</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Live Bidding</h2>
          <p>Engage in real-time auctions and place your bids instantly.</p>
        </div>
        <div className="feature-card">
          <h2>Secure Payments</h2>
          <p>100% safe transactions with multiple payment options.</p>
        </div>
        <div className="feature-card">
          <h2>Verified Sellers</h2>
          <p>Bid with confidence knowing that all sellers are verified.</p>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To provide a trustworthy and transparent online auction platform where users can buy and sell items seamlessly.</p>
      </section>
    </div>
  );
};

export default About;

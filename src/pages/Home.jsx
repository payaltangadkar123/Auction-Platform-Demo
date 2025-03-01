import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Online Auction</h1>
        <p>Bid on exclusive items and win exciting deals!</p>
      </header>
      
      <section className="features-section">
        <div className="feature">
          <h2>Live Bidding</h2>
          <p>Experience real-time competitive bidding on unique products.</p>
        </div>
        <div className="feature">
          <h2>Secure Transactions</h2>
          <p>Your payments are protected with the latest security measures.</p>
        </div>
        <div className="feature">
          <h2>Wide Variety</h2>
          <p>Choose from hundreds of listed auctions across different categories.</p>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Start Bidding Now!</h2>
        <p>Sign up and explore the best deals on the market.</p>
        <div>
          <Link to="/signup" className="btn-secondary">Sign Up</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import "./Auctions.css";

const Auctions = () => {
  return (
    <div className="auctions-container">
      <section className="hero">
        <h1>Auctions</h1>
        <p>Explore live and past auctions.</p>
      </section>

      <section className="live-auctions">
        <h2>Live Auctions</h2>
        <div className="auction-list">
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Item Name</h3>
            <p>Current Bid: $100</p>
            <button className="btn">View Details</button>
          </div>
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Item Name</h3>
            <p>Current Bid: $150</p>
            <button className="btn">View Details</button>
          </div>
        </div>
      </section>

      <section className="auction-history">
        <h2>Past Auctions</h2>
        <div className="auction-list">
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Item Name</h3>
            <p>Final Price: $200</p>
          </div>
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Item Name</h3>
            <p>Final Price: $300</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auctions;

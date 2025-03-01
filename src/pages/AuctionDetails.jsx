import React from "react";
import "./AuctionDetails.css";

const AuctionDetails = () => {
  return (
    <div className="auction-details-container">
      <div className="auction-header">
        <h2>Luxury Watch</h2>
        <p className="auction-timer">Time Remaining: 02h 15m 30s</p>
      </div>

      <div className="auction-content">
        <img src="https://via.placeholder.com/800" alt="Auction Item" className="auction-image" />
        <div className="auction-info">
          <p><strong>Starting Bid:</strong> $500</p>
          <p><strong>Current Bid:</strong> $750</p>
          <p className="description">This is a premium luxury watch with high-end craftsmanship...</p>
          
          <div className="bid-section">
            <input type="number" className="input-field" placeholder="Enter your bid" min="751" />
            <button className="btn-bid">Place Bid</button>
          </div>
        </div>
      </div>

      <div className="bid-history">
        <h3>Recent Bids</h3>
        <ul>
          <li>User1 - $750</li>
          <li>User2 - $700</li>
          <li>User3 - $650</li>
        </ul>
      </div>
    </div>
  );
};

export default AuctionDetails;

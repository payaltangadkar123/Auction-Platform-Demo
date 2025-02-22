import React from "react";
import "./AuctionDetails.css";

const AuctionDetails = () => {
  return (
    <div className="auction-details">
      <h2>Auction Item Name</h2>
      <img src="https://via.placeholder.com/800" alt="Auction Item" />
      <p>Description of the item...</p>
      <div className="bid-section">
        <input type="number" className="input-field" placeholder="Enter your bid" />
        <button className="btn">Place Bid</button>
      </div>
    </div>
  );
};

export default AuctionDetails;

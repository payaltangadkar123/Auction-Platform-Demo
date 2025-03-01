import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Add styling if needed

const BuyerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Buyer Dashboard</h2>
      <p>Welcome to the auction platform! Browse and bid on products.</p>

      {/* Sample auctions */}
      <div className="auction-list">
        <div className="auction-item">
          <h3>Product 1</h3>
          <p>Current Bid: $100</p>
          <button>Place Bid</button>
        </div>
        <div className="auction-item">
          <h3>Product 2</h3>
          <p>Current Bid: $250</p>
          <button>Place Bid</button>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="logout-btn">Logout</button>
    </div>
  );
};

export default BuyerDashboard;

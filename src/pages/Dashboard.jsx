import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>

      <div className="stats-container">
        <div className="stats-card">Total Auctions: 10</div>
        <div className="stats-card">Bids Placed: 5</div>
      </div>

      <div className="auctions-list">
        <div className="auction-item">
          <h3>Auction Item 1</h3>
          <p>Starting Bid: $50</p>
          <a href="/auction/1" className="btn-view">View Auction</a>
        </div>
        <div className="auction-item">
          <h3>Auction Item 2</h3>
          <p>Starting Bid: $100</p>
          <a href="/auction/2" className="btn-view">View Auction</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

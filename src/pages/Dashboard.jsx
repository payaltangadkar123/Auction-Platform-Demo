// import React from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-header">Dashboard</h2>

//       <div className="stats-container">
//         <div className="stats-card">Total Auctions: 10</div>
//         <div className="stats-card">Bids Placed: 5</div>
//       </div>

//       <div className="auctions-list">
//         <div className="auction-item">
//           <h3>Auction Item 1</h3>
//           <p>Starting Bid: $50</p>
//           <a href="/auction/1" className="btn-view">View Auction</a>
//         </div>
//         <div className="auction-item">
//           <h3>Auction Item 2</h3>
//           <p>Starting Bid: $100</p>
//           <a href="/auction/2" className="btn-view">View Auction</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>

      <div className="stats-container">
        <div className="stats-card">
          <h3>Total Auctions</h3>
          {/* <p>10</p> */}
        </div>
        <div className="stats-card">
          <h3>Bids Placed</h3>
          {/* <p>5</p> */}
        </div>
        <div className="stats-card">
          <h3>Active Bids</h3>
          {/* <p>3</p> */}
        </div>
      </div>

      <div className="auctions-list">
        <h3>Ongoing Auctions</h3>
        <div className="auction-item">
          <h3>Luxury Watch</h3>
          <p>Starting Bid: $500</p>
          <p>Current Bid: $750</p>
          <a href="/auction/1" className="btn-view">View Auction</a>
        </div>
        <div className="auction-item">
          <h3>Painting</h3>
          <p>Starting Bid: $300</p>
          <p>Current Bid: $450</p>
          <a href="/auction/2" className="btn-view">View Auction</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

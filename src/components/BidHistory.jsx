import React from "react";

const BidHistory = ({ bids }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-2">Bid History</h2>
      <ul className="space-y-2">
        {bids.length > 0 ? (
          bids.map((bid, index) => (
            <li key={index} className="border p-2 rounded">
              <span className="font-bold">${bid.amount}</span> by {bid.user} at {new Date(bid.time).toLocaleTimeString()}
            </li>
          ))
        ) : (
          <p>No bids yet.</p>
        )}
      </ul>
    </div>
  );
};

export default BidHistory;

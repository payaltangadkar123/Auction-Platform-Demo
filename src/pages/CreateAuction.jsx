import React from "react";
import "./CreateAuction.css";

const CreateAuction = () => {
  return (
    <div className="create-auction">
      <h2>Create New Auction</h2>
      <form>
        <input type="text" className="input-field" placeholder="Item Name" />
        <input type="number" className="input-field" placeholder="Starting Bid" />
        <textarea className="input-field" placeholder="Description"></textarea>
        <button className="btn">Submit Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Welcome to Online Auction</h1>
      <p>Bid on items and win exciting deals!</p>
      <Link to="/auctions" className="btn">View Auctions</Link>
    </div>
  );
};

export default Home;

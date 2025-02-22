import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import AuctionDetails from "../pages/AuctionDetails";
import CreateAuction from "../pages/CreateAuction";
import Profile from "../pages/Profile";
import Payment from "../pages/Payment";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auction/:id" element={<AuctionDetails />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      


      
      <Footer />
    </Router>
  );
};

export default AppRouter;

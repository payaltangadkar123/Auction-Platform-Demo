import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer"); // Default role as Buyer
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Logging in:", { email, password, role });

    // ✅ Navigate to the respective dashboard based on role
    if (role === "buyer") {
      window.location.href = "/AppBuyer"; 
    } else if (role === "seller") {
      window.location.href = "/AppSeller"
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p>Log in to continue bidding on exclusive auctions.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* ✅ Role Selection Dropdown */}
          <select
            className="input-field"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

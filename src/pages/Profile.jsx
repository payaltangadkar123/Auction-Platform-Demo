import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <img src="https://via.placeholder.com/150" alt="Profile" />
      <p>Username: JohnDoe</p>
      <p>Email: johndoe@example.com</p>
    </div>
  );
};

export default Profile;

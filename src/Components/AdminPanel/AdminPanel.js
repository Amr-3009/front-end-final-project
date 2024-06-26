import React from "react";
import { Link } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="panelWrapper">
      <h1>What would you like to do?</h1>
      <ul>
        <li>
          <Link to="/admin-panel/view-menu-items">View Menu Items</Link>
        </li>
        <li>
          <Link to="/admin-panel/view-users">View Users</Link>
        </li>
        <li>
          <Link to="/admin-panel/view-bookings">View Bookings</Link>
        </li>
        <li>
          <Link to="/admin-panel/admin-register">Register a new Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminPanel;

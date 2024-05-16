// SideNav.js
import React from "react";
import { Link } from "react-router-dom";
import styles from './navbar.module.css'; // Import the CSS module

const SideNav = ({ isAuthenticated, onLogout }) => {
  return (
    <div className={styles.sidebar}>  // Apply CSS module class
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><button onClick={onLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideNav;

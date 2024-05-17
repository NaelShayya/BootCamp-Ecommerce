import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Add your CSS styles here

const Header = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="logo">CourseHub</div>
      <nav></nav>
      <div className="user-actions">
        <span></span>
        <NavLink to="/login" className="actions">
          Log In
        </NavLink>
        <NavLink to="/signup" className="actions" onClick={handleLogout}>
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

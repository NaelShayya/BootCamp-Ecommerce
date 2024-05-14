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
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/courses" activeClassName="active">
          Courses
        </NavLink>
        <NavLink to="/features" activeClassName="active">
          Features
        </NavLink>
        <NavLink to="/contactUs" activeClassName="active">
          Contact
        </NavLink>
      </nav>
      <div className="user-actions">
        <span></span>
        <NavLink to="/cart" className="icon">
          🛒
        </NavLink>
        <NavLink to="/contactUs" className="logout" onClick={handleLogout}>
          Logout
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

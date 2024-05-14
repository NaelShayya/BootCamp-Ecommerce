import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/navbar";
const Layout = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  // Check if the user is authenticated based on the presence of the token
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/course">Course</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <SideNav />

      <Outlet />
    </>
  );
};

export default Layout;

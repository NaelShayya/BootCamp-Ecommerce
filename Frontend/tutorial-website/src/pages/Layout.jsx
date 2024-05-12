
import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/navbar";

const Layout = () => {
  

 return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
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
        </ul>
      </nav>
     
      <SideNav/>
    
      <Outlet />

    </>
  );
};

export default Layout;

// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/sidenav/navbar";
import styles from './layout.module.css'; // Ensure CSS module is set up
const Layout = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  const isAuthenticated = sessionStorage.getItem("token") !== null;

  return (
    <>
      <SideNav isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <div className={styles.content}>
        <Outlet />  
      </div>
    </>
  );
};

export default Layout;

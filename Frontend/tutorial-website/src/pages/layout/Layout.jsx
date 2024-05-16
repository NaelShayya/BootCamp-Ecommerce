// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/sidenav/navbar";

const Layout = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  const isAuthenticated = sessionStorage.getItem("token") !== null;

  return (
    <>
      <SideNav isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Outlet />
    </>
  );
};

export default Layout;

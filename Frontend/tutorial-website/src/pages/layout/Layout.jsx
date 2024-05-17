import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/sidenav/navbar";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <SideNav />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

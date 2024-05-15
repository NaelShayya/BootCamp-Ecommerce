// src/pages/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/navbar';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <SideNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

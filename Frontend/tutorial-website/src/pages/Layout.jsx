import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/navbar";

const Layout = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <SideNav/>
    
      <Outlet />
    </div>
  )
};

export default Layout;
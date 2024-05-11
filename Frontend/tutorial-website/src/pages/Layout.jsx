import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/navbar";

const Layout = () => {
  return (
    <>
      <SideNav/>
    
      <Outlet />
    </>
  )
};

export default Layout;
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/Explore">Explore</Link>
          </li>
          <li>
            <Link to="/Course">Course</Link>
          </li>
        </ul>
      </nav>
      {/* This is where the content for the current route will be rendered. */}
      <Outlet />
    </>
  )
};

export default Layout;
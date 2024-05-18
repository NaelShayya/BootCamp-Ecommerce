import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faUserGraduate,
  faSearch,
  faEnvelope,
  faSignOutAlt,
  faKiwiBird,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./sidenav.module.css"; // Ensure CSS module is set up

const SideNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 100);
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li
          style={{
            backgroundColor: "red",
            borderRadius: "20px",
            height: "40px",
            alignItems: "center",
          }}
          className={styles.navItem}>
          <NavLink
            to="/"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faKiwiBird}
              className={styles.icon}
            />
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/cart"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
            <span>Cart</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/course"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faUserGraduate} className={styles.icon} />
            <span>Courses</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/explore"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <span>Explore</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/contactUs"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span>Contact Us</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            onClick={handleLogout}
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

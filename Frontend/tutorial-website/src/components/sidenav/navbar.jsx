// SideNav.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faUserGraduate,
  faSave,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./sidenav.module.css"; // Ensure CSS module is set up

const SideNav = ({ isAuthenticated, onLogout }) => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
            <span>Home</span>
          </NavLink>
        </li>
        {/* Additional links with different icons */}
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
            to="/courses"
            className={styles.navLink}
            activeClassName={styles.active}>
            <FontAwesomeIcon icon={faUserGraduate} className={styles.icon} />
            <span>Courses</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

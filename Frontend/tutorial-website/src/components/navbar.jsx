// src/components/SideNav.jsx
import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div style={{ width: 180, padding: "10px", borderRight: "1px solid #ddd" }}>
      <style>{`
        .sidenav {
          position: sticky;
          top: 0;
          z-index: 1000;
        }
      `}</style>
      <div className="sidenav">
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/search">
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button component={Link} to="/course">
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button component={Link} to="/favorites">
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button component={Link} to="/signup">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
export default SideNav;

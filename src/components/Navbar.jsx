import { NavLink } from "react-router-dom";
import React from "react";
import './Navbar.css'
const activeLink = { fontWeight: "bold", textDecoration: "underline" };
const inActiveLink = { fontWeight: "normal" };

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
            NetFlix | Budget Edition
        </div>
        <div className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLink : inActiveLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            style={({ isActive }) => (isActive ? activeLink : inActiveLink)}
          >
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

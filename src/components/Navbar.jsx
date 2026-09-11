import { NavLink } from "react-router-dom";
import React from "react";

const activeLink = { fontWeight: "bold", textDecoration: "underline" };
const inActiveLink = { fontWeight: "normal" };

const Navbar = () => {
  return (
    <>
      <nav>
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
      </nav>
    </>
  );
};

export default Navbar;

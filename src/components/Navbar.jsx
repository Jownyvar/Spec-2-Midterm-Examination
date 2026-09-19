import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { logout, auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const activeLink = { fontWeight: "bold", textDecoration: "underline" };
const inActiveLink = { fontWeight: "normal" };

const Navbar = () => {
  const navigate = useNavigate();
  async function handleLogOut() {
    const response = await logout();
    console.log(response);
    navigate("/");
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/Register");
      }
    });
    return unsub;
  },);
  return (
    <>
      <nav>
        <NavLink to="/" className="logo">
          NetFlix | Budget Edition
        </NavLink>
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
          <button onClick={handleLogOut}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

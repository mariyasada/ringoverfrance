import React, { useState } from "react";
import "../Navbar/navbar.css";
import { FiMenu, GiCancel, FaUserAlt } from "../Icons";
import { Hamburger } from "../index";
import "../Hamburger/Hamburger.css";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const getActiveLink = ({ isActive }) => ({
    borderBottom: isActive ? "2px solid black" : "none",
  });

  return (
    <nav className="Header-container">
      <div className="header-items flex-center">
        <div className="header-left-logo flex-center">
          <div className="menu-icon">
            {open ? (
              <GiCancel className="menu-icon" onClick={() => setOpen(!open)} />
            ) : (
              <FiMenu className="menu-icon" onClick={() => setOpen(!open)} />
            )}
          </div>
          <NavLink to="/">
            <img
              className="image-logo"
              src="https://ik.imagekit.io/qrhnvir8bf0/websitelogo_O462uqe1O.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594156758"
              alt="mt-logo"
            />
          </NavLink>
        </div>

        <div className="nav-items-container ">
          <ul className="nav-items flex-center">
            <NavLink to="/home" style={getActiveLink} className="nav-item">
              HOME
            </NavLink>

            <NavLink to="/journey" style={getActiveLink} className="nav-item">
              THE JOURNEY
            </NavLink>

            <NavLink to="/team" style={getActiveLink} className="nav-item">
              TEAM
            </NavLink>

            <NavLink to="/store" style={getActiveLink} className="nav-item">
              STORE
            </NavLink>

            <NavLink to="/contact" style={getActiveLink} className="nav-item">
              CONTACT
            </NavLink>
          </ul>
        </div>
        <div className="Header-nav-icon-right flex-center">
          <FaUserAlt className="header-icon" title="logIn" />
          <p className="title-login">MARIYA</p>
        </div>
      </div>
      {open && <Hamburger className="hamburger-menu-container" />}
    </nav>
  );
};

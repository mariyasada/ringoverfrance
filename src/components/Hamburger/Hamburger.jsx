import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Hamburger/Hamburger.css";
import { sidebarOption } from "../constants";

export const Hamburger = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });
  return (
    <div>
      <ul className="hamburger-menu-container">
        {sidebarOption.map((item) => {
          return (
            <NavLink
              to={`${item.path}`}
              className="hamburger-menu-item"
              style={getActiveStyle}
              key={item.name}
            >
              <li className="hamburger-item flex-center">{item.name}</li>
            </NavLink>
          );
        })}
        {/* <NavLink to="/" style={getActiveStyle} className="hamburger-menu-item">
          HOME
        </NavLink>

        <NavLink to="/" style={getActiveStyle} className="hamburger-menu-item">
          THE JOURNEY
        </NavLink>

        <NavLink to="/" style={getActiveStyle} className="hamburger-menu-item">
          TEAM
        </NavLink>

        <NavLink to="/" style={getActiveStyle} className="hamburger-menu-item">
          STORE
        </NavLink>

        <NavLink to="/" style={getActiveStyle} className="hamburger-menu-item">
          CONTACT
        </NavLink> */}
      </ul>
    </div>
  );
};

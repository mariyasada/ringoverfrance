import React from "react";
import { NavLink } from "react-router-dom";
import "../Hamburger/Hamburger.css";
import { sidebarOption } from "../constants";

export const Hamburger = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });
  return (
    <div data-testid="hamburger-menu">
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
      </ul>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink to={"/"} className={(nav) => (nav.isActive ? "active" : "")}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/table"}
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <li>Table</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

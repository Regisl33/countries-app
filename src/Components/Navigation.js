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
          to={"/display"}
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <li>Countries</li>
        </NavLink>
        <NavLink
          to={"/table"}
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <li>Countries Table</li>
        </NavLink>
        <NavLink
          to={"/Search"}
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <li>Search</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

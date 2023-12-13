import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/display"}>
          <li>Countries</li>
        </NavLink>
        <NavLink to={"/table"}>
          <li>Countries Table</li>
        </NavLink>
        <NavLink to={"/Search"}>
          <li>Search</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

import React, { useContext } from "react";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";
import { ContextCountriesData } from "../Contexts/ContextCountriesData";

const SearchDisplay = () => {
  const searchData = useContext(ContextCountriesData);
  return (
    <div className="countries-table">
      <Logo />
      <Navigation />
    </div>
  );
};

export default SearchDisplay;

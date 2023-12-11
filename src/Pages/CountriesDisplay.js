import React, { useContext } from "react";
import { ContextCountriesData } from "../Contexts/ContextCountriesData";
import Country from "../Components/Country";

const CountriesDisplay = () => {
  const data = useContext(ContextCountriesData);
  return (
    <div className="displayCountries">
      {data &&
        data.map((country, index) => <Country key={index} country={country} />)}
    </div>
  );
};

export default CountriesDisplay;

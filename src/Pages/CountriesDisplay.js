import React, { useContext } from "react";
import { ContextCountriesData } from "../Contexts/ContextCountriesData";
import Country from "../Components/Country";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";

const CountriesDisplay = () => {
  const data = useContext(ContextCountriesData);
  return (
    <main>
      <Logo />
      <Navigation />
      <div className="displayCountries">
        {data &&
          data.map((country, index) => (
            <Country key={index} country={country} />
          ))}
      </div>
    </main>
  );
};

export default CountriesDisplay;

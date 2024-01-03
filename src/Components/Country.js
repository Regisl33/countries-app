import React from "react";

const Country = ({ country }) => {
  return (
    <div className="country">
      <img src={country.flags.svg} alt={country.flags.alt} />
      <div className="country-infos">
        <h2>{country.name.common}</h2>
        <h3>{country.capital}</h3>
        <p>Pop. {country.population.toLocaleString().replaceAll(",", " ")}</p>
      </div>
    </div>
  );
};

export default Country;

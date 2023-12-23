import React from "react";

const Infos = ({ country }) => {
  return (
    <div className="infos-container">
      <div className="infos">
        <h3>{country.name.common}</h3>
        <img src={country.flags.svg} alt={country.flags.alt} />
        <h4>{country.capital}</h4>
      </div>
    </div>
  );
};

export default Infos;

// nom
// capital
// population
// flags
// languages
// timeszones
// continents
// car side
// currencies
// start of Week
// independent
// unMember

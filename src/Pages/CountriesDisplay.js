import React, { useContext, useEffect, useState } from "react";
import { ContextCountriesData } from "../Contexts/ContextCountriesData";
import Country from "../Components/Country";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";

const CountriesDisplay = () => {
  const data = useContext(ContextCountriesData);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [rangeValue, setRangeValue] = useState(48);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [mappeddata, setMappedData] = useState([]);

  useEffect(() => {
    selectedContinent
      ? setMappedData(
          data.filter((country) =>
            country.continents[0]
              .toLowerCase()
              .includes(selectedContinent.toLowerCase())
          )
        )
      : setMappedData(data);
  }, [selectedContinent, data]);

  return (
    <main>
      <Logo />
      <Navigation />
      <div className="filters">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
        <div>
          <input
            type="range"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
            min={1}
            max={250}
          />
          <span>{rangeValue}</span>
        </div>
        <ul>
          {radios.map((continent) => (
            <li key={continent}>
              <input
                type="radio"
                id={continent}
                name="radio"
                checked={continent === selectedContinent}
                onChange={(e) => setSelectedContinent(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          ))}
        </ul>
      </div>
      {selectedContinent && (
        <div className="cancel">
          <button onClick={() => setSelectedContinent("")}>Cancel</button>
        </div>
      )}
      <div className="displayCountries">
        {mappeddata &&
          mappeddata
            .filter((country) =>
              country.name.common.toLowerCase().includes(searchValue)
            )
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country, index) => <Country key={index} country={country} />)}
      </div>
    </main>
  );
};

export default CountriesDisplay;

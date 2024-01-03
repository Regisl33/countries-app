import React from "react";

const TableRow = ({ country, counter }) => {
  const handleLanguages = () => {
    let arrayLang = [];
    for (const key in country.languages) {
      arrayLang.push(country.languages[key]);
    }
    return arrayLang.length > 3
      ? arrayLang.slice(0, 3).join(", ")
      : arrayLang.join(", ");
  };

  return (
    <tr
      className={counter}
      style={{
        background:
          counter % 2 === 1 ? "rgb(23, 63, 244)" : "rgb(237, 23, 244)",
      }}
    >
      <td>{counter}</td>
      <td>
        <img src={country.flags.svg} alt={country.name.common} />
      </td>
      <td>{country.name.common}</td>
      <td>{country.capital}</td>
      <td>{country.population.toLocaleString().replaceAll(",", " ")}</td>
      <td>{handleLanguages()}</td>
      <td>{country.continents.join(", ")}</td>
      <td>
        {country.timezones.length === 1
          ? country.timezones[0]
          : `From ${country.timezones[0]} to ${
              country.timezones[country.timezones.length - 1]
            }`}
      </td>
    </tr>
  );
};

export default TableRow;

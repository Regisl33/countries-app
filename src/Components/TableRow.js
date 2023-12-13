import React from "react";

const TableRow = ({ country, counter }) => {
  return (
    <tr className={counter}>
      <td>{counter}</td>
      <td>
        <img src={country.flags.svg} alt={country.name.common} />
      </td>
      <td>{country.name.common}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td>{country.language}</td>
      <td>{country.continent}</td>
      <td>{country.timezones}</td>
    </tr>
  );
};

export default TableRow;

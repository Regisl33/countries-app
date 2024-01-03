import React, { useContext } from "react";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";
import { ContextCountriesData } from "../Contexts/ContextCountriesData";
import TableRow from "../Components/TableRow";

const CountriesTable = () => {
  const tableDate = useContext(ContextCountriesData);
  return (
    <div className="countries-table">
      <Logo />
      <Navigation />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Flags</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Language</th>
              <th>Continent</th>
              <th>Timezones</th>
            </tr>
          </thead>
          <tbody>
            {tableDate &&
              tableDate.map((country, index) => (
                <TableRow key={index} counter={index} country={country} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountriesTable;

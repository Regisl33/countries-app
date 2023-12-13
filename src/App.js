import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ContextCountriesData } from "./Contexts/ContextCountriesData";
import CountriesDisplay from "./Pages/CountriesDisplay";
import CountriesTable from "./Pages/CountriesTable";
import SearchDisplay from "./Pages/SearchDisplay";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesData(res.data));
  }, []);
  return (
    <BrowserRouter>
      <ContextCountriesData.Provider value={countriesData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<CountriesDisplay />} />
          <Route path="/table" element={<CountriesTable />} />
          <Route path="/search" element={<SearchDisplay />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </ContextCountriesData.Provider>
    </BrowserRouter>
  );
};

export default App;

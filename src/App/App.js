import React, { useContext } from "react";

import SearchContext from "../store/search/searchContext";
import WeatherContext from "../store/weather/weatherContext";

import Weather from "../components/Weather/index";
import MyButton from "../ui/MyButton";
import CitySearch from "../components/CitySearch/CitySearch";

import "./App.css";

const App = () => {
  const { searchValue } = useContext(SearchContext);
  const { getData } = useContext(WeatherContext);

  return (
    <section className="app">
      <CitySearch />
      <Weather />
      <MyButton onClick={getData}>Look at {searchValue}</MyButton>
    </section>
  );
};

export default App;

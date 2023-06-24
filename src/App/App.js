import React, { useContext } from "react";

import SearchContext from "../Store/search/searchContext";
import WeatherContext from "../Store/weather/weatherContext";

import Weather from "../Components/Weather/index";
import MyButton from "../UI/MyButton";
import CitySearch from "../Components/CitySearch/CitySearch";

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

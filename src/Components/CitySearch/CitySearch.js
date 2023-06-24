import React, { useContext } from "react";

import MyInput from "../../ui/MyInput";
import SearchContext from "../../store/search/searchContext";

import "./CitySearch.css";
import WeatherContext from "../../store/weather/weatherContext";

const CitySearch = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { weather } = useContext(WeatherContext).data;

  const description = weather ? weather[0].description : "...";

  const onChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="city-search">
      <p className="text">Right now, </p>
      <MyInput value={searchValue} onChange={onChange} placeholder="city" />
      <p className="text">, there's {description}.</p>
    </div>
  );
};

export default CitySearch;

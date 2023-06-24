import React, { useContext, useState } from "react";
import axios from "axios";

import WeatherContext from "./weatherContext";
import SearchContext from "../search/searchContext";

export default function WeatherProvider({ children }) {
  const { searchValue } = useContext(SearchContext);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState("idle");

  const getData = async (event) => {
    event.preventDefault();

    console.log(searchValue);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=73f3e40fd7931caa8df6a28168edc191`;

    try {
      setLoading("loading");

      const response = await axios.get(url);
      const data = await response.data;

      setData(data);
      setLoading("succeeded");
    } catch (error) {
      setLoading("error");
    }
  };

  const value = {
    loading,
    data,
    getData,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

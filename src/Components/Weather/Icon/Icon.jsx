import React, { useContext } from "react";

import WeatherContext from "../../../store/weather/weatherContext";

import compareWeatherStatus from "../../../Utils/CompareWeatherStatus";

export default function Icon() {
  const { weather } = useContext(WeatherContext).data;

  return <div className="icon">{compareWeatherStatus(weather[0].main)}</div>;
}

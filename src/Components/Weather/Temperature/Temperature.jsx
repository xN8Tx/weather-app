import React, { useContext } from "react";

import WeatherContext from "../../../store/weather/weatherContext";

import "./Temperature.css";

export default function Temperature() {
  const { main } = useContext(WeatherContext).data;

  const temperature = Math.round(main.temp);
  const minTemperature = Math.round(main.temp_min);
  const maxTemperature = Math.round(main.temp_max);

  return (
    <div className="temperature">
      <h2>{temperature}</h2>
      <p>
        {minTemperature}° / {maxTemperature}°
      </p>
    </div>
  );
}

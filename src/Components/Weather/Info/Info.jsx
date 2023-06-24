import React, { useContext } from "react";

import WeatherContext from "../../../Store/weather/weatherContext";
import InfoItem from "../InfoItem/InfoItem";

import rainy from "../../../Assets/Images/Rainy.png";
import water from "../../../Assets/Images/water.png";
import windy from "../../../Assets/Images/windy.png";

export default function Info() {
  const { wind, main } = useContext(WeatherContext).data;

  const humidity = Math.round(main.humidity);
  const gust = Math.round(main.pressure);

  return (
    <div className="info">
      <InfoItem src={windy} text={wind.speed} char="m/s" />
      <InfoItem src={water} text={humidity} char="%" />
      <InfoItem src={rainy} text={gust} />
    </div>
  );
}

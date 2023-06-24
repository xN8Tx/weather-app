import React, { useContext } from "react";

import WeatherContext from "../../Store/weather/weatherContext";

import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import FirstStart from "./FirstStart/FirstStart";
import Wrapper from "./Wrapper/Wrapper";

const Weather = () => {
  const { loading } = useContext(WeatherContext);

  return (
    <>
      {loading === "idle" && <FirstStart />}
      {loading === "loading" && <Loading />}
      {loading === "error" && <Error />}
      {loading === "succeeded" && <Wrapper />}
    </>
  );
};

export default Weather;

import { createContext } from "react";

const defaultValue = {
  loading: "idle", // 'loading', 'succeeded', 'error'
  data: {},
  getData: (event) => {},
};

const WeatherContext = createContext(defaultValue);

export default WeatherContext;

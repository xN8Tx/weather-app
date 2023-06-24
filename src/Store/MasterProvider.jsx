import React from "react";

import SearchProvider from "./search/SearchProvider";
import WeatherProvider from "./weather/WeatherProvider";

export default function MasterProvider({ children }) {
  return (
    <SearchProvider>
      <WeatherProvider>{children}</WeatherProvider>
    </SearchProvider>
  );
}

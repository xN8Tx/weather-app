import React from "react";

import Icon from "../Icon/Icon";
import Temperature from "../Temperature/Temperature";
import Info from "../Info/Info";

export default function Wrapper() {
  return (
    <div className="weather-info">
      <Icon />
      <Temperature />
      <Info />
    </div>
  );
}

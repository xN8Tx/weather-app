import Clear from "../Assets/SVG/Clear";
import Rain from "../Assets/SVG/Rain";
import Snow from "../Assets/SVG/Snow";
import Default from "../Assets/SVG/Default";

const compareWeatherStatus = (main) => {
  switch (main) {
    case "Clear":
      return <Clear />;
    case "Snow":
      return <Snow />;
    case "Rain":
      return <Rain />;
    default:
      return <Default />;
  }
};

export default compareWeatherStatus;

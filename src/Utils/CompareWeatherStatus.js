import Clear from "../assets/SVG/Clear";
import Rain from "../assets/SVG/Rain";
import Snow from "../assets/SVG/Snow";
import Default from "../assets/SVG/Default";

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

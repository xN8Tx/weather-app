import axios from "axios";

export const GetData = async(value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=73f3e40fd7931caa8df6a28168edc191`
    const response = await axios.get(url);
    return response
}
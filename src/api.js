import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
// const API_KEY = "bf2f76ea5c3f6ecf04e78593d3ca7628";
const API_KEY = "9b986105cf7fd0759656a1f42bd7a8c1";
export const fetchCurrentWeather = async ({ city, unit = "metric" }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
};

export const fetchWeatherForecast = async ({ city, unit = "metric" }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.log("Error fetching weather forecast");
    throw err;
  }
};

import React, { useEffect, useState } from "react";
import { fetchWeatherForecast } from "../api";
import ForecastCard from "./ForecastCard";

const Forecast = ({ city, unit }) => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await fetchWeatherForecast({city, unit});
        console.log(data);
        const dayForecast = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        if (dayForecast.length === 0) {
          console.log("Error fetching the day forecast");
        }
        setWeatherForecast(dayForecast);
      } catch (error) {
        setError("Error fetching Forecast");
      }
    };
    fetchForecast();
  }, [city, unit]);
  return (
    <div className="py-4">
      <p className="text-2xl font-semibold mb-2 underline underline-offset-8">
        5-Day Forecast
      </p>
      {error && <p>{error}</p>}
      {weatherForecast && (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 py-5 gap-2 justify-items-center items-center">
          {weatherForecast.slice(0, 5).map((item, index) => {
            const date = new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
            });
            const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            const tempMin = item.main.temp_min;
            const tempMax = item.main.temp_max;
            return (
              <ForecastCard
                unit={unit}
                key={index}
                date={date}
                icon={icon}
                tempMin={tempMin}
                tempMax={tempMax}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Forecast;

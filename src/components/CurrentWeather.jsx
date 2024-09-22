import React, { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api";

const CurrentWeather = ({ city, unit }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetchCurrentWeather({city, unit});
        console.log(data);
        setCurrentWeather(data);
      } catch (error) {
        console.log(`Error fetching current weather`);
        setError(error);
      }
    };
    fetchWeather();
  }, [city, unit]);
  return (
    <div>
      {error && <p>{error}</p>}
      {currentWeather && (
        <div className="flex justify-around items-center flex-col lg:flex-row">
          <div className="bg-[#2e21be] px-10 py-3 my-8 rounded-lg text-white max-w-max flex flex-col gap-1.5">
            <p className="text-2xl">{currentWeather.name}</p>
            <p className="text-5xl">{currentWeather.main.temp} °{unit==="imperial"? "F": "C"}</p>
            <p className="text-2xl">{currentWeather.weather[0].main}</p>
            <div>
              <img
                className="h-20"
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt={currentWeather.weather[0].description}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:text-left mt-4 md:mt-0 items-center text-center">
            <p className="text-3xl md:text-5xl lg:text-6xl">{currentWeather.name} ,</p>
            <p className="text-xl italic font-semibold px-4">
              {currentWeather.sys.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;

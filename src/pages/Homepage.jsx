import React, { useState } from "react";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import ToggleUnit from "../components/ToggleUnit";

const Homepage = () => {
  const [city, setCity] = useState("New Delhi");
  const [unit, setUnit] = useState("metric");
  return (
    <div className="px-6 py-4 h-full">
      <Header setCity={setCity} />
      <ToggleUnit unit={unit} setUnit={setUnit} />
      <div className="">
        <CurrentWeather city={ city} unit={unit}/>
        <Forecast city={ city} unit={unit} />
      </div>
    </div>
  );
};

export default Homepage;

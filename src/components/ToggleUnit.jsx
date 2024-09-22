import React from "react";

const ToggleUnit = ({ unit, setUnit }) => {
  return (
    <div className="flex items-center">
      {/* <label className="mr-2 ">Celsius</label> */}
      <input
      className="h-5 w-5 text-blue-600 border-gray-300 ring-blue-600 focus-ring-blue-500"
        type="checkbox"
        checked={unit === "imperial"}
        onChange={() => setUnit(unit === "metric" ? "imperial" : "metric")}
      />
      <label className="ml-2 text-lg">Fahrenheit</label>
    </div>
  );
};

export default ToggleUnit;

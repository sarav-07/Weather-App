import React from "react";

const ForecastCard = ({date, icon, tempMin, tempMax, unit}) => {
    console.log(unit)
    
  return (
    <div>
      <div className="text-center flex flex-col items-center justify-center gap-0 bg-[#2e21be] max-w-max px-2 py-4 rounded-lg">
        <p>{date}</p>
        <div className="flex items-center justify-center">
          <img className="h-28" src={icon} alt="Weather icon" />
          <div>
            <p className="text-xl">{Math.round(tempMin)} °{unit==="imperial"? "F": "C"}</p>
            <p className="text-xl">{Math.round(tempMax)} °{unit==="imperial"? "F": "C"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;

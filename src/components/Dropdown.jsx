import React from "react";
import { useWeather } from "../context/WeatherContext";

function Dropdown() {
  const { city, cities, setCity } = useWeather();
  const changeCity = (e) => {
    cities.filter((item) => {
      if (item.name === e.target.value) {
        setCity(item);
      }
      return item;
    });
  };

  return (
    <div className="mx-auto max-w-screen-md mt-20 py-3 pr-32 pl-5 bg-slate-100 h-fit">
      <select
        value={city.name}
        onChange={changeCity}
        className="w-1/4 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-400"
      >
        {cities.map((item, key) => {
          return (
            <option value={item.name} key={key}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;

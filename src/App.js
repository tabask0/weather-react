import "./App.css";
import axios from "axios";
import { useState } from "react";
import City from "./City";

const api = {
  key: "cf91654288703286c81d5ba781bd806f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weath, setWeath] = useState({});
  const [city, setCity] = useState("");

  const handler = (e) => {
    if (e.keyCode == 13) {
      request();
    }
  };

  const request = () => {
    const a = axios
      .get(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
      .then((weather) => {
        console.log(weather);
        setWeath(weather.data);
      });
    return a;
  };

  return (
    <div className="w-full h-full text-center flex-col justify-center mt-20">
      <input
        className="border-2 border-blue-200 rounded-l-md p-2 mb-20"
        type="text"
        onKeyDown={(e) => handler(e)}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="border-2 border-blue-200 bg-blue-200 rounded-r-md p-2 text-md"
        onClick={() => request(city)}
      >
        Show weather
      </button>
      <City
        city={weath?.name}
        description={weath.weather?.[0].description}
        country={weath.sys?.country}
        tempMin={weath.main?.temp_min}
        tempMax={weath.main?.temp_max}
        current={weath.main?.temp}
        icon={weath.weather?.[0].icon}
      />
    </div>
  );
}

export default App;

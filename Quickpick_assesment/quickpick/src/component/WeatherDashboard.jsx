import React, { useState } from "react";

const API_KEY = "39af7071642d541ebfa4b6fe77c342dd";

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error fetching weather data.");
    }
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;

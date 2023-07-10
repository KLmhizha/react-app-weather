import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Weather.css";
import Currentweather from "./Currentweather";
import { ThreeDots } from "react-loader-spinner";

export default function Weather() {
  let [city, setCity] = useState("Pietermaritzburg");
  let [weatherData, setWeatherData] = useState({ load: false });
  let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeatherData({
      load: true,
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      cityName: response.data.name,
      countryName: response.data.sys.country,
      coordinates: response.data.coord,
    });
  }

  function searchCity() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
						<div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              onChange={updateCity}
            />
           </div>
					 <div className="col-3">
						<input type="submit" value="Search" className="button"/>
						</div>
          </div>
        </form>
        <section>
          <Currentweather data={weatherData} />
        </section>
      </div>
    );
  } else {
    searchCity();
    return (
      <ThreeDots
        color="#394564"
        width={100}
        height={100}
        ariaLoading="loading"
      />
    );
  }
}

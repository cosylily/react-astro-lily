import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Formatteddate from "./FormattedDate";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setweatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      time: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather p-4 rounded-4 mb-5 mt-5 pe-2">
        <form className="justify-content-center">
          <input
            type="text"
            placeholder="Enter a city..."
            className=" m-2 p-1 textBox rounded-3 border border-black"
          />
          <input
            type="submit"
            value="Search"
            className=" p-1 rounded-2 searchButton"
          />
        </form>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="Main col-8 me">
              <div className="placeInfo mt-3">
                <div className="city">{weatherData.city}</div>
                <div className="time">
                  <Formatteddate timestamp={weatherData.time} />
                </div>
              </div>
              <div className="mainInfo row justify-content-start mt-3 ">
                <div className="temp col-4 text-align-center pt-3 rounded-start">
                  {Math.round(weatherData.temperature)} ℃
                </div>
                <div className="otherInfo col-8 rounded-end pt-3">
                  <ul className="">
                    <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                    <li>Wind speed: {Math.round(weatherData.wind)}km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="descriptions col-4 pt-3 ps-2 text-end">
              <div className="tempLogo mt-2 mb-2">⛅️</div>
              <div className="weatherDescribe text-uppercase">
                {weatherData.description}
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-3">
          This project is coded by{" "}
          <a href="https://github.com/cosylily" target="blank">
            Hikari{" "}
          </a>
          and is open-sourced in{" "}
          <a href="https://github.com/cosylily/react-astro-lily" target="blank">
            Git Hub
          </a>
          .
        </footer>
      </div>
    );
  } else {
    let city = "London";
    let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}

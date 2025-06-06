import React, { useState, useEffect } from "react";

import "./forecast.css";
import axios from "axios";
import Forecastsection from "./Forecastsec";

export default function Weatherforecast(props) {
  let [data, setData] = useState({});
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.cityinfo]);

  function handleForecastResponse(response) {
    setLoaded(true);
    setData(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="forecast">
        <div className="row mt-3 mb-3">
          {data.map(function (dailyForecast, index) {
            if (index < 6 && index !== 0) {
              return (
                <div className="col" key={index}>
                  <Forecastsection data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityinfo}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
}

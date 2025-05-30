import React, { useState } from "react";

import "./forecast.css";
import axios from "axios";
import Forecastsection from "./Forecastsec";

export default function Weatherforecast(props) {
  let [data, setData] = useState({});
  let [loaded, setLoaded] = useState(false);
  function handleForecastResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setData({
      icon: response.data.daily[1].condition.icon,
      tempMax: Math.round(response.data.daily[1].temperature.maximum),
      tempMin: Math.round(response.data.daily[1].temperature.minimum),
      timestamp: new Date(response.data.daily[1].time * 1000),
    });
  }
  if (loaded) {
    return <Forecastsection data={data} />;
  } else {
    let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityinfo}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
}

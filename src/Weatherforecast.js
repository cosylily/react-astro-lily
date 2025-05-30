import React, { useState } from "react";
import Weathericon from "./Weathericon";
import "./forecast.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weatherforecast(props) {
  let [data, setData] = useState({});
  let [loaded, setLoaded] = useState(false);
  function handleForecastResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setData({
      icon: response.data.daily[0].condition.icon,
      tempMax: Math.round(response.data.daily[0].temperature.maximum),
      tempMin: Math.round(response.data.daily[0].temperature.minimum),
      timestamp: response.data.daily[0].time,
    });
  }
  if (loaded) {
    return (
      <div className="forecast">
        <div className="row mt-3 mb-3">
          <div className="col text-center p-3">
            <div className="forecast-grid mt-3">
              <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
                <div>29/5</div>
                <div>Thurs</div>
              </div>{" "}
              <div>
                <Weathericon icon="clear-sky-day" />
              </div>{" "}
              <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
                {" "}
                <div className="forecast-temperature-max">19</div>
                <div className="forecast-temperature-min">10</div>
              </div>
            </div>
            <div className="forecast-grid mt-3">
              <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
                <div>29/5</div>
                <div>Thurs</div>
              </div>{" "}
              <div>
                <Weathericon icon="clear-sky-day" />
              </div>{" "}
              <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
                {" "}
                <span className="forecast-temperature-max">19</span>
                <span className="forecast-temperature-min">10</span>
              </div>
            </div>
            <div className="forecast-grid mt-3">
              <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
                <div>29/5</div>
                <div>Thurs</div>
              </div>{" "}
              <div>
                <Weathericon icon="clear-sky-day" />
              </div>{" "}
              <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
                {" "}
                <span className="forecast-temperature-max">19</span>
                <span className="forecast-temperature-min">10</span>
              </div>
            </div>
          </div>
          <div className="col text-center p-3">
            <div className="forecast-grid mt-3">
              <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
                <div>29/5</div>
                <div>Thurs</div>
              </div>{" "}
              <div>
                <Weathericon icon="clear-sky-day" />
              </div>{" "}
              <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
                {" "}
                <span className="forecast-temperature-max">19</span>
                <span className="forecast-temperature-min">10</span>
              </div>
            </div>
            <div className="forecast-grid mt-3">
              <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
                <div>29/5</div>
                <div>Thurs</div>
              </div>{" "}
              <div>
                <Weathericon icon="clear-sky-day" />
              </div>{" "}
              <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
                {" "}
                <span className="forecast-temperature-max">19</span>
                <span className="forecast-temperature-min">10</span>
              </div>
            </div>
            <div className="forecast-grid mt-3">
              <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
                <div>29/5</div>
                <div>Thurs</div>
              </div>{" "}
              <div>
                <Weathericon icon="clear-sky-day" />
              </div>{" "}
              <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
                {" "}
                <span className="forecast-temperature-max">19</span>
                <span className="forecast-temperature-min">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityinfo}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
}

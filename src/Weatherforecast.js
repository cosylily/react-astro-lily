import React from "react";
import Weathericon from "./Weathericon";
import "./forecast.css";
export default function Weatherforecast() {
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
}

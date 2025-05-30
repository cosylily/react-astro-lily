import React from "react";
import Weathericon from "./Weathericon";

export default function ForecastSection(props) {
  let day = props.data.timestamp.getDay();
  let month = props.data.timestamp.getMonth();
  let date = props.data.timestamp.getDate();

  function dateformat() {
    if (date === 1) {
      return `${date}st ${months[month]}`;
    }
    if (date === 2) {
      return `${date}nd ${months[month]}`;
    }
    if (date === 3) {
      return `${date}rd ${months[month]}`;
    }
    if (date === 21) {
      return `${date}st ${months[month]}`;
    }
    if (date === 22) {
      return `${date}nd ${months[month]}`;
    }
    if (date === 23) {
      return `${date}rd ${months[month]}`;
    }
    if (date === 31) {
      return `${date}st ${months[month]}`;
    } else {
      return `${date}th ${months[month]}`;
    }
  }

  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="forecast">
      <div className="row mt-3 mb-3">
        <div className="col text-center p-3">
          <div className="forecast-grid mt-3">
            <div className="forecast-day d-flex flex-row ps-5 pe-5 justify-content-around">
              <div>{dateformat()}</div>
              <div>{days[day]}</div>
            </div>{" "}
            <div>
              <Weathericon icon={props.data.icon} />
            </div>{" "}
            <div className="forecast-temperatures d-flex flex-row ps-5 pe-5">
              {" "}
              <div className="forecast-temperature-max">
                {props.data.tempMax}
              </div>
              <div className="forecast-temperature-min">
                {props.data.tempMin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

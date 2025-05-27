import React, { useState } from "react";

export default function Weathertemp(props) {
  let [unit, setUnit] = useState("celcius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="temp col-4 text-align-center pt-3 rounded-start">
        <a href="/" onClick={convertToF}>
          {" "}
          {Math.round(props.temp)} <span className="unit">℃</span>{" "}
        </a>
      </div>
    );
  } else {
    return (
      <div className="temp col-4 text-align-center pt-3 rounded-start">
        <a href="/" onClick={convertToC}>
          {" "}
          {(Math.round(props.temp) * 9) / 5 + 32}{" "}
          <span className="unit">℉</span>{" "}
        </a>
      </div>
    );
  }
}

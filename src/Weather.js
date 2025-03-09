import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="App border border-black p-4 rounded-4 mb-3 mt-3">
      <form className="justify-content-center">
        <input
          type="text"
          placeholder="Enter a city..."
          className=" m-2 p-1 textBox rounded-3 border border-black"
        />
        <input
          type="submit"
          value="Search"
          className=" p-1 rounded-2 border border-1 searchButton"
        />
      </form>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="Main col-8">
            <div className="placeInfo mt-3">
              <div className="city">Salford</div>
              <div className="time">
                <ul>
                  <li>Sunday, 9 March, 2025</li>
                  <li>9:40pm</li>
                </ul>
              </div>
            </div>
            <div className="mainInfo row justify-content-start mt-3">
              <div className="temp col-4">10 ℃</div>
              <div className="otherInfo col-8">
                <ul>
                  <li>Humidity: 66%</li>
                  <li>Wind speed: 7mph</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tempLogo col-4 p-3">⛅️</div>
        </div>
      </div>
    </div>
  );
}

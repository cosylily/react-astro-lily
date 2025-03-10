import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather p-4 rounded-4 mb-5 mt-5">
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
            <div className="mainInfo row justify-content-start mt-3 ">
              <div className="temp col-4 text-align-center pt-3 rounded-start">
                10 ℃
              </div>
              <div className="otherInfo col-8 rounded-end pt-3">
                <ul className="">
                  <li>Humidity: 66%</li>
                  <li>Wind speed: 7mph</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tempLogo col-4 p-5">⛅️</div>
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
}

import React, { useState } from "react";

const AbhiBusMainHeader = () => {
  const [fromStation, setFromStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [dateFunc, setdateData] = useState("");

  const fromStationFunction = (c) => {
    setFromStation(c.target.value);
  };

  const endStationFunction = (c) => {
    setEndStation(c.target.value);
  };

  const dateFunction = (c) => {
    setdateData(c.target.value);
  };

  const showAlert = () => {
    alert(`from: ${fromStation} to: ${endStation} on: ${dateFunc}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="mainBusBackground">
        <div className="mainContainerAdjustment">
          <h1 className="bookBusTickets">Book Bus Tickets</h1>
          <div className="searchComtainer">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div className="alignCenter">
                <div style={{ display: "flex" }} className="inputContainer">
                  <img
                    src="src\assets\images\BUS2.png"
                    alt="Logo"
                    className="logoInputText"
                  ></img>
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="From Station"
                    onChange={fromStationFunction}
                  ></input>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="arrowSizing w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="alignCenter">
                <div style={{ display: "flex" }} className="inputContainer">
                  <img
                    src="src\assets\images\loc2.webp"
                    alt="Logo"
                    className="logoInputText2"
                  ></img>
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="to Station"
                    onChange={endStationFunction}
                  ></input>
                </div>

                <div style={{ display: "flex" }} className="inputContainer">
                  <input
                    className="searchbar2"
                    type="date"
                    onChange={dateFunction}
                  ></input>
                  <button className="ButtonsStyling2">Today</button>
                  <button className="ButtonsStyling2">Tomorrow</button>
                </div>
                <button className="ButtonsStyling3" onClick={showAlert}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AbhiBusMainHeader;
